import { Error as PrismaError } from "@prisma/client";
import OpenAI from "openai";
import { Card, CardContent, CardHeader } from "./ui/card";
import { marked } from "marked";
import prisma from "@/lib/prisma";

export default async function SuggestedSolution({
  error,
}: {
  error: PrismaError;
}) {
  let suggestion = error.suggestedFix;

  if (!suggestion) {
    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    try {
      const response = await client.responses.create({
        model: "gpt-4",
        instructions:
          "You are a senior WordPress developer. When presented with a PHP error, first analyze and explain the likely cause of the error. Then, provide a concise code snippet adhering to WordPress Coding Standards (WPCS) that addresses the issue. Use inline comments only for explanations directly related to the code. Finally, assess your confidence in the proposed solution with a statement like ‘I’m 85% confident this will resolve the issue.’ Avoid suggesting generic error suppression techniques; instead, focus on understanding and resolving the root cause of the error.",
        input: `Here's the error message: "${error.message}". It occurred in file "${error.file}" at line ${error.line}. The PHP version is ${error.phpVersion}, and the WordPress version is ${error.wpVersion}.`,
      });

      suggestion = response.output_text || "No suggestion available.";

      await prisma.error.update({
        where: { id: error.id },
        data: { suggestedFix: suggestion },
      });
    } catch (err) {
      console.error("Failed to fetch suggestion:", err);
      return (
        <Card className="mt-4">
          <CardHeader>
            <h4 className="text-lg font-semibold">
              Sorry, you are on your own...
            </h4>
          </CardHeader>
          <CardContent>
            <p>Failed to fetch suggestion.</p>
          </CardContent>
        </Card>
      );
    }
  }

  return (
    <Card className="mt-4">
      <CardHeader>
        <h4 className="text-lg font-semibold">AI suggests the following</h4>
      </CardHeader>
      <CardContent>
        <div
          className="[&_p]:my-2 [&>ul]:list-disc [&>ul]:ml-6 [&>ol]:list-decimal [&>ol]:ml-6 [&>li]:mb-1 [&>code]:bg-gray-100 [&>code]:px-1 [&>code]:py-0.5 [&>code]:rounded [&>code]:text-sm [&>code]:font-mono"
          dangerouslySetInnerHTML={{ __html: marked(suggestion) }}
        />
      </CardContent>
    </Card>
  );
}

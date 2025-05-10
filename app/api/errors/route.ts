import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (
      !body.type ||
      !body.message ||
      !body.file ||
      body.line === undefined ||
      !body.timestamp ||
      !body.site ||
      !body.php_version ||
      !body.wp_version ||
      !body.wp_theme ||
      !body.wp_plugins ||
      !body.fingerprint
    ) {
      console.log(body);
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const recentDuplicate = await prisma.error.findFirst({
      where: {
        fingerprint: body.fingerprint,
        site: body.site,
        timestamp: {
          gte: new Date(Date.now() - 5_000),
        },
      },
    });

    if (recentDuplicate) {
      return NextResponse.json({ duplicate: true });
    }

    const error = await prisma.error.create({
      data: {
        type: body.type,
        errno: body.errno,
        message: body.message,
        file: body.file,
        line: body.line,
        backtrace: body.backtrace,
        timestamp: new Date(body.timestamp * 1000), // Convert Unix timestamp to JavaScript Date
        site: body.site,
        phpVersion: body.php_version,
        wpVersion: body.wp_version,
        wpTheme: body.wp_theme,
        wpPlugins: body.wp_plugins,
        fingerprint: body.fingerprint,
      },
    });

    return NextResponse.json({ success: true, id: error.id });
  } catch (error) {
    console.error("Error saving error payload:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

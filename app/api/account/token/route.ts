import { auth } from "@/auth";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.email)
    return new NextResponse("Unauthorized", { status: 401 });
  const { gitlabToken } = await req.json();
  await prisma.user.update({
    where: { email: session.user.email },
    data: { gitlabToken },
  });
  return NextResponse.json({ success: true });
}

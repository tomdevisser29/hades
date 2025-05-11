import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  const session = await auth();

  if (!session?.user?.email)
    return new NextResponse("Unauthorized", { status: 401 });

  const { gitlabRepository, serverPath } = await req.json();

  await prisma.site.update({
    where: { id: parseInt(id) },
    data: { gitlabRepository, serverPath },
  });

  return NextResponse.json({ success: true });
}

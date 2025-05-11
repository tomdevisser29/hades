import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await auth();
  const siteId = await params.id;

  if (!session?.user?.email)
    return new NextResponse("Unauthorized", { status: 401 });

  const { gitlabRepository } = await req.json();

  await prisma.site.update({
    where: { id: parseInt(siteId) },
    data: { gitlabRepository },
  });

  return NextResponse.json({ success: true });
}

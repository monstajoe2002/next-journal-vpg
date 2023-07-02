import type { NextRequest } from "next/server";
import prisma from "@/lib/prisma";
export async function DELETE(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const id = searchParams.get("id")!;
  await prisma.entry.delete({
    where: {
      id,
    },
  });
}

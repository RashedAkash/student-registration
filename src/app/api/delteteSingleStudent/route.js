import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server"

export const DELETE = async (req, res) => {
  try {
    const { searchParams } = new URL(req.url);
    const id = parseInt(searchParams.get('id'))
    const prisma = new PrismaClient();
    const result = await prisma.user.delete({
      where:{id:id}
    })
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(error)
  }
}
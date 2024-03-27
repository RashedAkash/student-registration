import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  try {
    const prisma = new PrismaClient();
    const result = await prisma.user.findMany();
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(error);
  }
};

import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export const PUT = async (req, res) => {
    
   
  try {
   const { searchParams } = new URL(req.url);
   const id = parseInt(searchParams.get("id"));
   const prisma = new PrismaClient();
   const result = await prisma.user.update({
     where: { id: id },
     data: {
       first_name: "Virat",
       last_name: "Kohli",
       roll: 40,
       age: 18,
       grade: "A",
       courses: "Cricket",
     },
   });
   return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(error);
  }
};

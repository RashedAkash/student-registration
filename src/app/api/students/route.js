import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server"

// Creating API for single student registration.
export const POST = async (req, res) => {
  try {
    const prisma = new PrismaClient();
    const result = await prisma.user.create({
      data: {
        first_name: "Rashed",
        last_name: "Akash",
        roll: 22,
        age: 24,
        grade: "A",
        courses:"Accounting"
      }
    })
    return NextResponse.json(result);  
  } catch (error) {
   return NextResponse.json(error) 
  }
}


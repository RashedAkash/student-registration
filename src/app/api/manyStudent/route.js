import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

// Creating API for many student registration.
export const POST = async (req, res) => {
    
  try {
  const prisma = new PrismaClient();
  const result = await prisma.user.createMany({
    data: [
      {
        first_name: "Babar",
        last_name: "Azam",
        roll: 2,
        age: 29,
        grade: "A+",
        courses: "Science",
      },
      {
        first_name: "Rashed",
        last_name: "Rahman",
        roll: 3,
        age: 25,
        grade: "B",
        courses: "Engineering",
      },
      {
        first_name: "Ahmed",
        last_name: "Khan",
        roll: 4,
        age: 26,
        grade: "B+",
        courses: "Business",
      },
      {
        first_name: "Fatima",
        last_name: "Ali",
        roll: 5,
        age: 23,
        grade: "A-",
        courses: "Arts",
      },
      {
        first_name: "Zara",
        last_name: "Ahmed",
        roll: 6,
        age: 27,
        grade: "C",
        courses: "Medicine",
      },
    ],
  });
  return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(error);
  }
};



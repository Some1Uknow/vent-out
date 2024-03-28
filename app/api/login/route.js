import connectDB from "@/lib/mongodb";
import Psychologist from "@/models/psychologist";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { email, password } = await request.json();
    console.log(request);
  try {
    await connectDB();
    const psychologist = await Psychologist.findOne({ email });

    if (!psychologist) {
      return NextResponse.json(
        { message: "Psychologist not found bruh" },
        { status: 404 }
      );
    }

    if (psychologist.password !== password) {
      return NextResponse.json({ message: "Wrong password" });
    }
// send psychologist ID once login is successfull
    return NextResponse.json({ message: "Login successful" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Server error" });
  }
}

export function methodNotAllowed(res) {
  return NextResponse.methodNotAllowed(res);
}

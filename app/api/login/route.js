import connectDB from "@/lib/mongodb";
import Psychologist from "@/models/psychologist";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { email, password } = await request.json();

  try {
    await connectDB();
    const psychologist = await Psychologist.findOne({ email });

    if (!psychologist) {
      return NextResponse.json(
        { message: "Psychologist not found" },
        { status: 404 }
      );
    }

    if (psychologist.password !== password) {
      return NextResponse.json({ message: "Wrong password" });
    }

    // Send psychologist ID once login is successful
    return NextResponse.json({ message: "Login successful", psychologistId: psychologist._id });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Server error" });
  }
}

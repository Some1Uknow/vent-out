import Psychologist from "@/models/psychologist";
import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";

export async function GET(request, { params }) {
  const Id = params.id;
  await connectDB();
  const psych = await Psychologist.findById(Id);
  
  if (!psych) {
    return NextResponse.json({ message: "Psychologist not found" }, { status: 404 });
  }

  return NextResponse.json({ psychologist: psych });
}

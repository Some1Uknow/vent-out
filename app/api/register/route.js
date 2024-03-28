import connectDB from "@/lib/mongodb";
import psychologist from "@/models/psychologist";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { firstName, lastName, email, password, expertise, country, years, phone, company } = await request.json();
  await connectDB();
  await psychologist.create({ firstName, lastName, email, password, expertise, country, years, phone, company });
  return NextResponse.json({ message: "Psychologist Created" }, { status: 201 });
}

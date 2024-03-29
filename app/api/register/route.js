import connectDB from "@/lib/mongodb";
import Psychologist from "@/models/psychologist";
import { NextResponse } from "next/server";

export async function POST(request) {
  const {
    firstName,
    lastName,
    email,
    password,
    expertise,
    country,
    years,
    phone,
    company,
  } = await request.json();
  await connectDB();
  await Psychologist.create({
    firstName,
    lastName,
    email,
    password,
    expertise,
    country,
    years,
    phone,
    company,
  });
  return NextResponse.json(
    { message: "Psychologist Created" },
    { status: 201 }
  );
}

export async function GET(request) {
  await connectDB();
  const psychologist = await Psychologist.find({});
  if (!psychologist || psychologist.length === 0) {
    return NextResponse.json(
      { message: "Psychologists not present" },
      { status: 404 }
    );
  }
  return NextResponse.json({ psychologist }, { status: 201 });
}

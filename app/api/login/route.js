import mongoose from "mongoose";
import psychologist from "@/models/psychologist";
import connectDB from "@/lib/mongodb";

export async function GET(request){
    const {email, password} = await request.json();
    await connectDB();
    await psychologist.findOne({email: email})
    
}
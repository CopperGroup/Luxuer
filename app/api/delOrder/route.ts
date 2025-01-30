import { connectToDB } from "@/lib/mongoose";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import Order from "@/lib/models/order.model";
import { sendEmail } from "@/helpers/mailer";




export async function POST(request: NextRequest) {
    try {
        connectToDB();

        const body = await request.json();
    
        const {id}= body;
  
        const result = await Order.findByIdAndDelete(id);

        return NextResponse.json({
            message: "User created successfully",
            success: true,
        });

    } catch (error: any) {
        // Handle errors
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
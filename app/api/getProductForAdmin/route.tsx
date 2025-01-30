

import { connectToDB } from "@/lib/mongoose";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import User from "@/lib/models/user.model";
import { sendEmail } from "@/helpers/mailer";
import Product from "@/lib/models/product.model";


export async function POST(request: NextRequest) {
    try {
        connectToDB();
  
        // Parse the request body as JSON
        const productId = await request.json();
      
        const product = await Product.findOne({'params.0.value': productId.params.id});
       

        // Respond with success message
        return NextResponse.json({
            message: "User created successfully",
            success: true,
            product
            
        });

    } catch (error: any) {
        // Handle errors
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
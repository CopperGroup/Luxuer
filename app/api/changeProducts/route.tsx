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
        const data = await request.json();
        const {context, product} = data
      
        const NewProduct = await Product.findOne({'params.0.value': context.params.id});
       
        
        NewProduct.name=product.name,
        NewProduct.id=product.id,
        NewProduct.price=product.price,
        NewProduct.priceToShow=product.priceToShow,
        NewProduct.category=product.category,
        NewProduct.quantity=product.quantity,
        NewProduct.vendor=product.vendor,
        NewProduct.description= product.description
      

   

        await NewProduct.save();


        // Respond with success message
        return NextResponse.json({
            message: "User created successfully",
            success: true,
            NewProduct
            
        });

    } catch (error: any) {
        // Handle errors
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
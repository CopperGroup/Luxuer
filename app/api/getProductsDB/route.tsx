import Product from "@/lib/models/product.model";
import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongoose";
import User from "@/lib/models/user.model";

export async function GET(request: NextRequest) {
  try {
    await connectToDB();  // Додаємо await для асинхронного підключення

    const products = await Product.find({});
    
    return NextResponse.json({
      message: "Products found",
      data: products,
    });
  } catch (error: any) {
    console.log('Server Error:', error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
} 
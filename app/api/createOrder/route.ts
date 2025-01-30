import { connectToDB } from "@/lib/mongoose";
import { NextRequest, NextResponse } from "next/server";
import Order from "@/lib/models/order.model";
import User from "@/lib/models/user.model";
import { fetchUserByEmail } from "@/lib/actions/user.actions";


export async function POST(request: NextRequest) {
    try {
        connectToDB();

        // Parse the request body as JSON
        const body = await request.json();

        // Destructure the body to extract user data
        const {name,  products, surname, phoneNumber, contactEmail, accountEmail, wayToPay, deliveryMethod, city, adress, coment, toPay, data, id} = body;

        // Create a new Order object
        const newOrder = new Order({
            name,
            products,
            surname,
            phoneNumber,
            contactEmail,
            accountEmail,
            wayToPay,
            deliveryMethod,
            city,
            adress,
            coment,
            toPay,
            data,
            id
        });


        
        // Save the new  to the database
        const savedOrder = await newOrder.save();
        const User = await fetchUserByEmail(accountEmail);
     

        User.orders.push(newOrder);
        await User.save();

        
        // Respond with success message
        return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedOrder
        });

    } catch (error: any) {
        // Handle errors
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

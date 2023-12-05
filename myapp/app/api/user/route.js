import { NextResponse } from "next/server";
import User from "@/models/UserModel";

// Get All Users
export  async function GET(request) {
    try {
      const users = await User.findAll();
      // console.log(users);
      return NextResponse.json({ users }, { status: 200 });
    } catch (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }

  export async function POST(request) {
    try {
      const data = await request.json();
      const users = await User.create({
        name: data.name,
        age: data.age,
        city: data.city
      });
      console.log(users);
      return NextResponse.json({message: 'user created successfully..', users}, {status: 200});
     

    } catch (error) {
       return NextResponse.json({error: error.message}, {status: 500});
    }
  }



  

 
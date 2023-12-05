
import User from "@/models/UserModel";
import { NextResponse } from "next/server";

// get one user 

export async function GET(req) {
  const userId = req.url.split('api/user/')[1];

  if (!userId) {
    return NextResponse.json({ error: 'User ID is required in the URL' }, { status: 400 });
  }

  try {
    // Find the user by ID
    const user = await User.findByPk(userId);

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    console.error('Error fetching user:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}



// delete user 

export async function DELETE(req) {

  const userId = req.url.split('api/user/')[1];

  if (!userId) {
    return NextResponse.json({ error: 'User ID is required in the URL' }, { status: 400 });
  }
  try {
    // Find the user by ID
    const user = await User.findByPk(userId);
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    // Delete the user
    await user.destroy();

    return NextResponse.json({ message: 'User deleted successfully' }, { status: 200 });
  } catch (error) {
    if (error.name === 'SequelizeValidationError') {
      return NextResponse.json({ error: 'Validation error' }, { status: 400 });
    }
    console.error('Error deleting user:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

//update user

export async function PUT(req) {
  const userId = req.url.split('api/user/')[1];

  console.log("user id is :", userId);

  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return NextResponse.json({ message: "user not found..." }, { status: 404 });
    }
    const { name, age, city } = await req.json();

    console.log(":parameter is:", {name, age, city});

    if (!name && !age && !city) {
      return NextResponse.json({ message: "Empty request body." }, { status: 400 });
    }
     await user.update({ name, age, city });
    return NextResponse.json({ message: "user updated successfully" }, { status: 200 });

  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Internal server error..." }, { status: 500 });
  }
}




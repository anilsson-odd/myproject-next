import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import dbConnect from "@/utils/dbConnect";

export async function POST(req, res) {
  try {
    const { email, name, password } = await req.json();

    await dbConnect();

    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        {
          message: "Email already exists!",
        },
        {
          status: 400,
        }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      email,
      name,
      hashedPassword,
    })

    return NextResponse.json(
      {
        message: "Account created.",
      },
      {
        status: 200,
      }
    );
  } catch (err) {
    return NextResponse.json(
      {
        message: err.message,
      },
      {
        status: 500,
      }
    );
  }
}

"use client";

import { Button, Card, CardBody, Input } from "@nextui-org/react";
import { useState } from "react";

const SignupPage = () => {
  const [message, setMessage] = useState("");
  async function handleSignUp(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const name = formData.get("name");
    const password = formData.get("password");

    try {
      const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/sign-up`, {
        method: "POST",
        body: JSON.stringify({
          email,
          name,
          password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await result.json();

      setMessage(data.message);
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <div className="flex flex-col items-center">
      <form
        onSubmit={handleSignUp}
      >
        <h1 className="text-xl mt-5 text-center">Register</h1>
        <Card>
          <CardBody>
            <div className="flex flex-col justify-center items-center">
              <Input className="w-96" name='email' type='email' label="Email" placeholder="Enter your email" />
              <br />
              <Input className="w-96" name="name" type="text" label="Name" placeholder="Enter your full name" />
              <br />
              <Input className="w-96" name='password' type='password' label="Password" placeholder="Enter your password" />
              <br />
              {message}
              <Button type='submit'>Sign Up</Button>
            </div>
          </CardBody>
        </Card>
      </form>
    </div>
  );
}

export default SignupPage;

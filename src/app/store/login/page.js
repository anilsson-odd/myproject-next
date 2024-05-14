'use client';
import paths from '@/utils/paths';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import { Button, Card, CardBody, Input } from "@nextui-org/react";
import { useState } from "react";

const LoginPage = () => {
  const router = useRouter();

  const [message, setMessage] = useState("");

  async function handleSignIn(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');

    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });

      if (result.error) {
        setMessage(result.error);
      }
      else if (result.ok) {
        router.push(paths.store());
      }
    } catch (err) {
      console.error('Sign in error:', err);
    }
  }

  return (
    <div className="flex flex-col items-center">
      <form
        onSubmit={handleSignIn}
      >
        <h1 className="text-xl mt-5 text-center">Login</h1>
        <Card>
          <CardBody>
            <div className="flex flex-col justify-center items-center">
              <Input className="w-96" name='email' type='email' label="Email" placeholder="Enter your email" />
              <br />
              <Input className="w-96" name='password' type='password' label="Password" placeholder="Enter your password" />
              <br />
              {message}
              <Button type='submit'>Sign In</Button>
            </div>
          </CardBody>
        </Card>
      </form>
    </div>
  );
}

export default LoginPage;

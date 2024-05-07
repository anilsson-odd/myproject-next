'use client';
import paths from '@/utils/paths';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const router = useRouter();

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
        console.error('Sign in error:', result.error);
      }
      else if (result.ok) {
        router.push(paths.store());
      }
    } catch (err) {
      console.error('Sign in error:', err);
    }
  }

  return (
    <>
      <h1>Login</h1>
      <form
        onSubmit={handleSignIn}
      >
        <label>
          Email
          <input name='email' type='email' />
        </label>
        <label>
          Password
          <input name='password' type='password' />
        </label>
        <button type='submit'>Sign In</button>
      </form>
    </>
  );
}

export default LoginPage;

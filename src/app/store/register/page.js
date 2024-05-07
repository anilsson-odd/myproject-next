"use client";

const SignupPage = () => {
  async function handleSignUp(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const name = formData.get("name");
    const password = formData.get("password");

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
  }

  return (
    <>
      <h1>Register</h1>
      <form
        onSubmit={handleSignUp}
      >
        <label>
          Email
          <input name='email' type='email' />
        </label>
        <label>
          Name
          <input name="name" type="text" />
        </label>
        <label>
          Password
          <input name='password' type='password' />
        </label>
        <button type='submit'>Sign Up</button>
      </form>
    </>
  );
}

export default SignupPage;

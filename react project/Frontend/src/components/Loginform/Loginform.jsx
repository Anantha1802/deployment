import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous error

    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        email,
        password,
      });

      if (response.data.success) {
        setSuccess(true);
        onLogin(); // Notify parent component of successful login
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      setError('Login failed. Please check your credentials and try again.');
    }
  };
  return (
    <>
      <div class="flex w-screen flex-wrap text-slate-800">
        <div class="flex w-full flex-col md:w-1/2 items-center justify-center">
          <div class="mx-auto flex flex-col justify-center items-center px-6 md:justify-start lg:w-[30rem] ">
            <p class="text-center text-3xl font-bold md:leading-tight md:text-left md:text-5xl">
              Welcome  <br />
              to <span class="text-blue-600">Cloud4coolkids </span>
            </p>
            <p class="mt-6 text-center font-medium md:text-left">
              Dear team! Login to your account.
            </p>
            {success ? (
              <p className="success-message">Login successful!</p>
            ) : (
              <form class="flex flex-col items-stretch pt-3 md:pt-8 w-2/3 items-end" onSubmit={handleLogin}>
                <div class="w-full flex flex-col pt-4">
                  <div class="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600 border-none">
                    <input
                      type="email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               required
                      class="w-full flex-shrink appearance-none bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus-within:border-blue-600"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div class="mb-4 w-full flex flex-col pt-4">
                  <div class="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600 border-none">
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      class="w-full flex-shrink appearance-none bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus-within:border-blue-600"
                      placeholder="Password"
                    />
                  </div>
                </div>
                {error && <p className="error-message">{error}</p>}
                <button
                  type="submit"
                  class="rounded-lg bg-blue-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md outline-none ring-blue-500 ring-offset-2 transition hover:bg-blue-700 focus:ring-2 md:w-32"
                >
                  Sign in
                </button>
              </form>
            )}
          </div>
        </div>
        <div class="relative hidden h-[92.9vh] select-none bg-blue-600 bg-gradient-to-br md:block md:w-1/2">
          <div class="py-16 px-8 text-white xl:w-[40rem]">
            <span class="rounded-full bg-white px-3 py-1 font-medium text-blue-600">
              New Feature
            </span>
            <p class="my-6 text-3xl font-semibold leading-10">
              Crack the Code Behind
              <span class="abg-white whitespace-nowrap py-2 text-cyan-300">
                {" "}
                Skillful Learning
              </span>
              .
            </p>
            <p class="mb-4">
              Cloud4coolkids empowers your children to become innovators,
              inventors, and creative thinkers. With instruction-based LMS
              courses that provide them with essential skills, we coach young
              learners to prosper in this new world of technology!
            </p>
            <a
              href="#"
              class="font-semibold tracking-wide text-white underline underline-offset-4"
            >
              Learn More
            </a>
          </div>
          <div className="flex justify-center">
            <img
              class="ml-8 w-6/12 max-w-lg rounded-lg object-cover"
              src="https://stories.freepiklabs.com/api/vectors/operating-system/bro/render?color=2563EBFF&background=complete&hide="
              alt=''
            />
          </div>
        </div>
      </div> 
    </>
  );
};

export default LoginForm;
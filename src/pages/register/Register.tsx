import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Register attempt:", {
      name,
      email,
      password,
      confirmPassword,
    });
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-900 to-neutral-900 relative'>
      {/* Main background with cigarette */}
      <div
        className='absolute inset-0 bg-cover bg-center opacity-50'
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/247040/pexels-photo-247040.jpeg')",
          backgroundPosition: "center",
        }}></div>

      {/* Smoke overlay */}
      <div
        className='absolute inset-0 opacity-35 mix-blend-overlay'
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1466627/pexels-photo-1466627.jpeg')",
          backgroundSize: "cover",
          animation: "smoke 15s infinite",
        }}></div>

      {/* Glass effect card */}
      <div
        className='max-w-md w-full m-4 p-8 backdrop-blur-md bg-zinc-900/40 rounded-2xl 
                    shadow-2xl relative z-10 hover:shadow-3xl transition-all duration-300 
                    border border-zinc-800/50'>
        <div>
          <h2 className='mt-6 text-center text-3xl font-bold text-gray-100'>
            Join the Journey
          </h2>
          <p className='mt-2 text-center text-sm text-gray-300'>
            Start your smoke-free life today
          </p>
        </div>

        <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
          <div className='space-y-5'>
            <div className='transform transition-all duration-300 hover:scale-[1.01]'>
              <label
                htmlFor='name'
                className='block text-sm font-semibold text-gray-300'>
                Full Name
              </label>
              <input
                id='name'
                name='name'
                type='text'
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='mt-1 block w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg 
                         text-gray-100 placeholder-gray-500
                         focus:ring-2 focus:ring-gray-500 focus:border-transparent
                         transition-all duration-300 backdrop-blur-sm'
                placeholder='Enter your full name'
              />
            </div>

            <div className='transform transition-all duration-300 hover:scale-[1.01]'>
              <label
                htmlFor='email'
                className='block text-sm font-semibold text-gray-300'>
                Email address
              </label>
              <input
                id='email'
                name='email'
                type='email'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='mt-1 block w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg 
                         text-gray-100 placeholder-gray-500
                         focus:ring-2 focus:ring-gray-500 focus:border-transparent
                         transition-all duration-300 backdrop-blur-sm'
                placeholder='Enter your email'
              />
            </div>

            <div className='transform transition-all duration-300 hover:scale-[1.01]'>
              <label
                htmlFor='password'
                className='block text-sm font-semibold text-gray-300'>
                Password
              </label>
              <input
                id='password'
                name='password'
                type='password'
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='mt-1 block w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg 
                         text-gray-100 placeholder-gray-500
                         focus:ring-2 focus:ring-gray-500 focus:border-transparent
                         transition-all duration-300 backdrop-blur-sm'
                placeholder='Enter your password'
              />
            </div>

            <div className='transform transition-all duration-300 hover:scale-[1.01]'>
              <label
                htmlFor='confirm-password'
                className='block text-sm font-semibold text-gray-300'>
                Confirm Password
              </label>
              <input
                id='confirm-password'
                name='confirm-password'
                type='password'
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className='mt-1 block w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg 
                         text-gray-100 placeholder-gray-500
                         focus:ring-2 focus:ring-gray-500 focus:border-transparent
                         transition-all duration-300 backdrop-blur-sm'
                placeholder='Confirm your password'
              />
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='w-full flex justify-center py-3 px-4 border border-transparent rounded-lg
                       text-sm font-semibold text-white bg-gradient-to-r from-gray-700 to-gray-900
                       hover:from-gray-800 hover:to-gray-950 focus:outline-none focus:ring-2
                       focus:ring-offset-2 focus:ring-gray-500 transform transition-all duration-300
                       hover:scale-[1.02] hover:shadow-lg shadow-gray-900/50'>
              Sign up
            </button>
          </div>
        </form>

        <div className='mt-6 text-center'>
          <p className='text-sm text-gray-400'>
            Already have an account?{" "}
            <a
              onClick={() => navigate("/register")}
              className='font-medium text-gray-300 hover:text-gray-400 transition-colors cursor-pointer'>
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;

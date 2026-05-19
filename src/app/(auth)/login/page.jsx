'use client'
import Link from 'next/link';
import { useForm } from 'react-hook-form';

const loginPage = () => {
  const {register, handleSubmit, formState: { errors }} = useForm();

  const handleLogin = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-[#F3F3F3] flex items-center justify-center p-4 select-none">
      
      
      <div className="w-full max-w-2xl bg-white rounded-md p-8 md:p-10 shadow-sm">
        
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#403F3F] mb-6 tracking-tight">
          Login your account
        </h2>


        <form className="space-y-6" onSubmit={handleSubmit(handleLogin)}>
          
          <div className="flex flex-col gap-2.5">
            <label className="text-base font-bold text-[#403F3F] tracking-wide">
              Email address
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              {...register("email", { required: "Email is required" })}
              className="w-full bg-[#F3F3F3] text-neutral-800 placeholder-neutral-400 text-sm rounded-md py-4 px-5 border-none outline-none focus:ring-1 focus:ring-neutral-400 transition-shadow"
            />
            {
              errors.email && (
                <p className="text-red-500 font-medium">{errors.email.message}</p>
              )
            }
          </div>

          {/* Password Field Block */}
          <div className="flex flex-col gap-2.5">
            <label className="text-base font-bold text-[#403F3F] tracking-wide">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              {...register("password", { required: "Password is required" })}
              className="w-full bg-[#F3F3F3] text-neutral-800 placeholder-neutral-400 text-sm rounded-md py-4 px-5 border-none outline-none focus:ring-1 focus:ring-neutral-400 transition-shadow"
            />
            {
              errors.password && (
                <p className="text-red-500 font-medium">{errors.password.message}</p>
              )
            }
          </div>

          {/* Submit Action Action Trigger */}
          <div className="pt-3">
            <button
              type="submit"
              className="w-full bg-[#403F3F] hover:bg-neutral-800 text-white font-semibold text-base py-3.5 rounded-md transition-colors duration-150 cursor-pointer"
            >
              Login
            </button>
          </div>

        </form>

        {/* Bottom Context Footer Anchor */}
        <p className="text-center text-sm font-semibold text-neutral-500 mt-8 tracking-wide">
          Don’t Have An Account ?{' '}
          <Link 
            href="/register" 
            className="text-[#E21B1B] hover:underline font-bold transition-all ml-1"
          >
            Register
          </Link>
        </p>

      </div>
    </div>
  );
};

export default loginPage;
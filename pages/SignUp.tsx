import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-screen bg-[#112217] text-white">
      <div className="flex items-center p-4 pb-2 justify-between">
        <button onClick={() => navigate(-1)} className="text-white flex size-12 shrink-0 items-center justify-center">
          <ArrowLeft size={24} />
        </button>
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">Sign Up</h2>
      </div>

      <div className="px-4 py-3 flex flex-col gap-4">
        <input
          placeholder="Full Name"
          className="w-full h-14 rounded-lg bg-[#23482f] border-none text-white placeholder-[#92c9a4] px-4 focus:ring-0"
        />
        <input
          placeholder="Email"
          className="w-full h-14 rounded-lg bg-[#23482f] border-none text-white placeholder-[#92c9a4] px-4 focus:ring-0"
        />
         <input
          type="password"
          placeholder="Password"
          className="w-full h-14 rounded-lg bg-[#23482f] border-none text-white placeholder-[#92c9a4] px-4 focus:ring-0"
        />
         <input
          type="password"
          placeholder="Confirm Password"
          className="w-full h-14 rounded-lg bg-[#23482f] border-none text-white placeholder-[#92c9a4] px-4 focus:ring-0"
        />
      </div>

      <div className="px-4 py-2 flex items-center justify-between">
          <p className="text-white text-base font-normal">I agree to the Terms and Conditions</p>
          <input type="checkbox" className="h-5 w-5 rounded border-[#326744] bg-transparent text-[#13ec5b] focus:ring-0 checked:bg-[#13ec5b]" />
      </div>

      <div className="px-4 py-3">
        <button className="w-full h-12 rounded-lg bg-[#13ec5b] text-[#112217] font-bold text-base hover:opacity-90 transition-opacity">
          Sign Up
        </button>
      </div>

      <div className="mt-auto pb-8">
        <p className="text-[#92c9a4] text-sm text-center underline">
          <Link to="/login">Already have an account? Log In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-screen bg-[#112217] text-white">
      <div className="flex items-center p-4 pb-2 justify-between">
        <button onClick={() => navigate(-1)} className="text-white flex size-12 shrink-0 items-center justify-center">
          <ArrowLeft size={24} />
        </button>
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">Sign In</h2>
      </div>

      <div className="px-4 py-3 flex flex-col gap-4">
        <input
          placeholder="Email or Username"
          className="w-full h-14 rounded-lg bg-[#23482f] border-none text-white placeholder-[#92c9a4] px-4 focus:ring-0"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full h-14 rounded-lg bg-[#23482f] border-none text-white placeholder-[#92c9a4] px-4 focus:ring-0"
        />
      </div>

      <p className="text-[#92c9a4] text-sm font-normal text-center underline pb-3">Forgot Password?</p>

      <div className="px-4 py-3">
        <button className="w-full h-12 rounded-lg bg-[#13ec5b] text-[#112217] font-bold text-base hover:opacity-90 transition-opacity">
          Sign In
        </button>
      </div>

      <div className="mt-4 px-4 flex flex-wrap gap-3 justify-center">
        <button className="flex-1 min-w-[150px] h-10 rounded-lg bg-[#23482f] text-white text-sm font-bold flex items-center justify-center hover:bg-[#326744] transition-colors">
          Sign in with Google
        </button>
        <button className="flex-1 min-w-[150px] h-10 rounded-lg bg-[#23482f] text-white text-sm font-bold flex items-center justify-center hover:bg-[#326744] transition-colors">
          Sign in with Apple
        </button>
      </div>

      <div className="mt-auto pb-8">
        <p className="text-[#92c9a4] text-sm text-center underline">
          <Link to="/signup">Don't have an account? Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
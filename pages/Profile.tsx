import React from 'react';
import { CreditCard, Star, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

const Profile: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#112217] text-white pb-20">
      <div className="p-4 flex items-center justify-center border-b border-[#23482f]">
          <h1 className="text-lg font-bold">Profile</h1>
      </div>

      <div className="p-4 flex items-center gap-4">
          <div className="h-16 w-16 rounded-full bg-[#23482f] flex items-center justify-center text-2xl font-bold">
              U
          </div>
          <div>
              <h2 className="text-xl font-bold">User Name</h2>
              <p className="text-[#92c9a4]">user@example.com</p>
          </div>
      </div>

      <div className="mt-4 flex flex-col">
          <Link to="/payments" className="flex items-center gap-4 px-4 py-4 hover:bg-[#193322] border-b border-[#23482f]">
               <CreditCard size={24} className="text-[#92c9a4]" />
               <span className="text-base font-medium">Payments & History</span>
          </Link>
          <Link to="/subscription" className="flex items-center gap-4 px-4 py-4 hover:bg-[#193322] border-b border-[#23482f]">
               <Star size={24} className="text-[#92c9a4]" />
               <span className="text-base font-medium">Subscription Plans</span>
          </Link>
          <Link to="/login" className="flex items-center gap-4 px-4 py-4 hover:bg-[#193322] border-b border-[#23482f] text-red-400">
               <LogOut size={24} />
               <span className="text-base font-medium">Log Out / Switch Account</span>
          </Link>
      </div>
    </div>
  );
};

export default Profile;
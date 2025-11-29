import React from 'react';
import { Outlet } from 'react-router-dom';
import BottomNav from './BottomNav';

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#112217]">
      <div className="flex-1">
        <Outlet />
      </div>
      <BottomNav />
    </div>
  );
};

export default Layout;
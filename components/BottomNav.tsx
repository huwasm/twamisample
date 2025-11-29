import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Home, BookOpen, Video, Compass, User } from 'lucide-react';

const BottomNav: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/home', label: 'Home', icon: Home },
    { path: '/library', label: 'Library', icon: BookOpen },
    { path: '/courses', label: 'Courses', icon: Video },
    { path: '/quests', label: 'Quests', icon: Compass },
    { path: '/profile', label: 'Profile', icon: User },
  ];

  return (
    <div className="sticky bottom-0 z-50 w-full border-t border-[#23482f] bg-[#193322] px-4 pb-4 pt-2">
      <div className="flex justify-between items-end">
        {navItems.map((item) => {
          const active = isActive(item.path);
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-1 flex-col items-center justify-end gap-1 ${
                active ? 'text-white' : 'text-[#92c9a4]'
              }`}
            >
              <div className={`flex h-8 items-center justify-center ${active ? 'rounded-full' : ''}`}>
                <Icon
                  size={24}
                  fill={active ? 'currentColor' : 'none'}
                  stroke={active ? 'none' : 'currentColor'}
                  strokeWidth={2}
                  className={active ? 'text-white' : 'text-[#92c9a4]'}
                />
                {/* Lucide icons don't support 'fill' property perfectly for outline style switching without tweaks, 
                    but passing fill='currentColor' works for solid shapes if the icon supports it. 
                    Standard lucide icons are outline. For solid look we usually use a different icon set or 
                    fill the path. Here we approximate by filling active. */}
              </div>
              <p className="text-xs font-medium leading-normal tracking-[0.015em]">
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;
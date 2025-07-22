import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Activity, BarChart2, FlaskRound as Flask, Menu } from 'lucide-react';

export function Layout({ children }) {
  const location = useLocation();
  const [isSidebarOpen, setSidebarOpen] = React.useState(false);

  const navItems = [
    { path: '/', label: 'Risk Prediction', icon: Activity },
    { path: '/operations', label: 'Operations', icon: BarChart2 },
    { path: '/research', label: 'Research', icon: Flask },
  ];

  return (
    <div className="min-h-screen bg-[#F4EBDC]">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} w-64 bg-[#3A506B] transition-transform duration-300 ease-in-out z-30`}>
        <div className="p-6">
          <div className="flex items-center justify-between text-white mb-8">
            <span className="text-xl font-bold">HealthCore</span>
            <button onClick={() => setSidebarOpen(false)} className="p-2 hover:bg-[#D8C3A5] hover:text-[#3A506B] rounded-md">
              <Menu size={24} />
            </button>
          </div>
          <nav className="space-y-4">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-md text-sm font-medium w-full
                  ${location.pathname === path 
                    ? 'bg-[#D8C3A5] text-[#3A506B]' 
                    : 'text-white hover:bg-[#D8C3A5] hover:text-[#3A506B]'}`}
              >
                <Icon size={20} />
                <span>{label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <nav className="bg-[#3A506B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(true)}
                className="p-2 rounded-md hover:bg-[#D8C3A5] hover:text-[#3A506B]"
              >
                <Menu size={24} />
              </button>
              <span className="text-xl font-bold ml-4">HealthCore</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}
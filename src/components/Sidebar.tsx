"use client";

import { HomeIcon, CreditCardIcon, BellIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";

const menu = [
  { name: "Dashboard", icon: <HomeIcon className="h-5 w-5" /> },
  { name: "Cards", icon: <CreditCardIcon className="h-5 w-5" /> },
  { name: "Notifications", icon: <BellIcon className="h-5 w-5" /> },
  { name: "Settings", icon: <Cog6ToothIcon className="h-5 w-5" /> },
];

export default function Sidebar() {
  return (
    <div className="flex flex-col h-full p-6">
      {/* Profile */}
      <div className="flex items-center gap-3 mb-8">
        <div className="h-10 w-10 bg-brand-green/20 rounded-full"></div>
        <div>
          <p className="font-semibold text-brand-text">Rahul A Dharwadkar</p>
          <p className="text-sm text-gray-500">Premium Account</p>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex flex-col gap-3">
        {menu.map((item, idx) => (
          <button
            key={idx}
            className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-brand-green/10 transition"
          >
            {item.icon}
            <span className="text-sm font-medium">{item.name}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto text-xs text-gray-400">
        v1.0.0
      </div>
    </div>
  );
}


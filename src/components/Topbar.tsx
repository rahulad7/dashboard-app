"use client";

import { BellIcon } from "@heroicons/react/24/outline";

export default function Topbar() {
  return (
    <header className="h-16 bg-white shadow-card flex items-center justify-between px-6">
      {/* Greeting */}
      <div>
        <p className="text-brand-text font-semibold text-lg">Rahul</p>
        <p className="text-sm text-gray-500">Hello</p>
      </div>

      {/* Right side actions */}
      <div className="flex items-center gap-6">
        {/* Notification bell */}
        <div className="relative cursor-pointer">
          <BellIcon className="h-6 w-6 text-gray-600" />
          {/* unread counter will be added later */}
        </div>

        {/* Profile picture */}
        <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
      </div>
    </header>
  );
}


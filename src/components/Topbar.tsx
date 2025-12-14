"use client";

import Link from "next/link";
import { BellIcon } from "@heroicons/react/24/outline";
import { useNotifications } from "@/src/hooks/useNotifications";

export default function Topbar() {
  const { unreadCount } = useNotifications();

  return (
    <header className="h-16 bg-white shadow-card flex items-center justify-between px-4 md:px-6">
      <div>
        <p className="text-brand-text font-semibold text-base md:text-lg">Notification Dashboard</p>
        <p className="text-xs md:text-sm text-gray-500 hidden sm:block">Real-time updates</p>
      </div>

      <div className="flex items-center gap-4 md:gap-6">
        <Link href="/notifications" className="relative">
          <BellIcon className="h-5 w-5 md:h-6 md:w-6 text-gray-600 hover:text-brand-green transition" />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-semibold">
              {unreadCount > 9 ? '9+' : unreadCount}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}


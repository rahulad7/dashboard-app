"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BellIcon, ChartBarIcon } from "@heroicons/react/24/outline";

const menu = [
  { name: "Notifications", icon: <BellIcon className="h-5 w-5" />, path: "/notifications" },
  { name: "Analytics", icon: <ChartBarIcon className="h-5 w-5" />, path: "/analytics" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full p-4 md:p-6">
      <div className="flex items-center gap-3 mb-8">
        <div className="h-10 w-10 bg-brand-green/20 rounded-full flex-shrink-0"></div>
        <div className="min-w-0">
          <p className="font-semibold text-brand-text text-sm md:text-base truncate">Notification Dashboard</p>
          <p className="text-xs md:text-sm text-gray-500 truncate">Real-time System</p>
        </div>
      </div>

      <nav className="flex flex-col gap-3">
        {menu.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center gap-3 px-3 py-2 rounded-xl transition ${
                isActive
                  ? "bg-brand-green/10 text-brand-green font-medium"
                  : "hover:bg-brand-green/10"
              }`}
            >
              {item.icon}
              <span className="text-sm font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto text-xs text-gray-400">
        v1.0.0
      </div>
    </div>
  );
}


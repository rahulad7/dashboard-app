import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/src/components/Sidebar";
import Topbar from "@/src/components/Topbar";
import { NotificationsProvider } from "@/src/contexts/NotificationsContext";

export const metadata: Metadata = {
  title: "Notification Dashboard",
  description: "Real-time notification system dashboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-brand-panel flex min-h-screen">
        <NotificationsProvider>
          {/* Sidebar */}
          <aside className="w-64 bg-white shadow-card hidden md:block h-screen">
            <Sidebar />
          </aside>

          {/* Main section */}
          <main className="flex-1">
            {/* Topbar */}
            <Topbar />

            {/* Page content */}
            <div className="p-6">{children}</div>
          </main>
        </NotificationsProvider>
      </body>
    </html>
  );
}

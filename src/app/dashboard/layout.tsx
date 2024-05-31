import Sidebar from "@/components/menu/sidebar";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="flex bg-gray-50">
        <Sidebar />
        {children}
      </div>
    </section>
  );
}

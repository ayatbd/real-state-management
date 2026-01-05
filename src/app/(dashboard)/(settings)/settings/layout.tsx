import SidebarSettings from "@/components/modules/settings/SidebarSettings";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex gap-6 min-h-screen bg-[#f5f3ff] p-6">
      <SidebarSettings />
      <div className="w-full bg-white rounded-sm">{children}</div>
    </div>
  );
};

export default layout;

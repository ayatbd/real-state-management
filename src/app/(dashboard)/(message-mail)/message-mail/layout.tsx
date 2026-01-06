import SidebarMessageMail from "@/components/modules/message-mail/SidebarMessageMail";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex gap-6 min-h-screen bg-[#f5f3ff] p-6">
      <SidebarMessageMail />
      <div className="w-full bg-white rounded-sm">{children}</div>
    </div>
  );
};

export default layout;

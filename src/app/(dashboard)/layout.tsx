import Sidebar from "@/components/dashboard/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative bg-[#f5f3ff] h-full min-h-screen font-[sans-serif]">
      <div className="flex items-start">
        {/* Sidebar Component */}
        <Sidebar />
        {/* Main Content Area */}
        <section className="main-content w-full">{children}</section>
      </div>
    </div>
  );
}

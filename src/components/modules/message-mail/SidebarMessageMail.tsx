import Link from "next/link";

const SidebarMessageMail = () => {
  return (
    <div className="bg-white lg:min-w-[300px] w-max h-full max-lg:min-w-8 rounded-sm overflow-hidden">
      <div className={`shadow-lg lg:min-w-[300px] lg:w-max`}>
        <div className="py-6 px-6">
          <h2 className="text-lg font-medium text-slate-800 mb-3">Settings</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/settings/catalogue"
                className="menu-item text-slate-800 text-[15px] font-medium flex items-center gap-3 cursor-pointer hover:bg-[#eae9f0] rounded-md px-3 py-3 transition-all duration-300"
              >
                Catalogue
              </Link>
            </li>
            <li>
              <Link
                href="/settings/change-password"
                className="menu-item text-slate-800 text-[15px] font-medium flex items-center gap-3 cursor-pointer hover:bg-[#eae9f0] rounded-md px-3 py-3 transition-all duration-300"
              >
                Change Password
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SidebarMessageMail;

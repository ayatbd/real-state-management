import { SquarePen } from "lucide-react";
import Link from "next/link";

const SidebarMessageMail = () => {
  return (
    <div className="bg-white lg:min-w-[270px] w-max h-[-webkit-fill-available] max-lg:min-w-8 rounded-sm overflow-hidden">
      <div className={`lg:min-w-[270px] lg:w-max`}>
        <div className="py-6 px-6">
          <ul className="space-y-2">
            <li>
              <Link
                href="/message-mail/compose"
                className="menu-item block text-center text-white text-[16px] font-medium cursor-pointer bg-primary-violet hover:bg-primary-violet/90 rounded-md py-3 transition-all duration-300"
              >
                <span className="flex items-center justify-center gap-2">
                  <span>
                    <SquarePen />
                  </span>
                  <span>Compose</span>
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/message-mail/inbox"
                className="menu-item text-slate-800 text-[15px] font-medium flex items-center gap-3 cursor-pointer hover:bg-[#eae9f0] active:bg-[#eae9f0] focus:bg-[#eae9f0] rounded-md px-3 py-3 transition-all duration-300"
              >
                Inbox
              </Link>
            </li>
            <li>
              <Link
                href="/message-mail/favorite"
                className="menu-item text-slate-800 text-[15px] font-medium flex items-center gap-3 cursor-pointer hover:bg-[#eae9f0] active:bg-[#eae9f0] focus:bg-[#eae9f0] rounded-md px-3 py-3 transition-all duration-300"
              >
                Favorite
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SidebarMessageMail;

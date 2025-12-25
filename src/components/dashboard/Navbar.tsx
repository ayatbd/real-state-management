import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Bell } from "lucide-react";
import Link from "next/link";
import { Input } from "../ui/input";
import { CiSearch } from "react-icons/ci";

export default function Navbar() {
  return (
    <header className="z-50 bg-[#f7f6f9] sticky top-0">
      <div className="flex flex-wrap items-center w-full relative tracking-wide">
        <div className="w-full bg-white border-b px-6 py-6 flex items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center gap-6">
            {/* Status Tabs */}
            <div className="flex items-center gap-4">
              <Link href="#" className="relative">
                <button className="flex items-center gap-3 bg-[#efeff5] px-6 py-1.5 rounded-full text-gray-700 font-normal text-[18px] cursor-pointer transition all delay-75 hover:bg-violet-50">
                  Submitted
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center justify-center w-7 h-7 rounded-full bg-[#f59e0b] text-white text-xs font-semibold">
                    05
                  </span>
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#9b287b] text-white text-xs font-semibold">
                    24
                  </span>
                </button>
              </Link>
              <Link href="#" className="relative">
                <button className="flex items-center gap-3 bg-[#efeff5] px-6 py-1.5 rounded-full text-gray-700 font-normal text-[18px] cursor-pointer transition all delay-75 hover:bg-violet-50">
                  In Production
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center justify-center w-7 h-7 rounded-full bg-[#f59e0b] text-white text-xs font-semibold">
                    05
                  </span>
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#9b287b] text-white text-xs font-semibold">
                    24
                  </span>
                </button>
              </Link>
              <Link href="#" className="relative">
                <button className="flex items-center gap-3 bg-[#efeff5] px-6 py-1.5 rounded-full text-gray-700 font-normal text-[18px] cursor-pointer transition all delay-75 hover:bg-violet-50">
                  Revision Needed
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center justify-center w-7 h-7 rounded-full bg-[#f59e0b] text-white text-xs font-semibold">
                    05
                  </span>
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#9b287b] text-white text-xs font-semibold">
                    24
                  </span>
                </button>
              </Link>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-7">
            {/* Search Bar */}
            <div className="relative w-[499px] max-w-full">
              <Input
                type="text"
                placeholder="Search"
                className="pl-10 rounded-full border-gray-300"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <CiSearch size={20} />
              </span>
            </div>

            {/* Notification */}
            <button className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition">
              <Bell className="h-5 w-5 text-violet-500" />
            </button>

            {/* Profile */}
            <div className="flex items-center gap-3 cursor-pointer">
              <Avatar>
                <AvatarImage
                  src="/images/dashboard/nav/Ellipse25.png"
                  alt="User"
                />
                <AvatarFallback>RS</AvatarFallback>
              </Avatar>
              <span className="text-[#333333] font-medium text-[18px]">
                Robert Smith
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

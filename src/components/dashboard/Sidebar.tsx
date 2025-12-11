"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineDashboard, MdWorkOutline } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { RiDraftLine } from "react-icons/ri";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {
      name: "Dashboard",
      href: "/",
      icon: <MdOutlineDashboard size={20} />,
    },
    {
      name: "Message/Mail",
      href: "/message",
      icon: <IoMailOutline size={20} />,
    },
    {
      name: "Task Management",
      href: "/task-management",
      icon: <MdWorkOutline size={20} />,
    },
    {
      name: "Order Management",
      href: "/order-management",
      icon: <RiDraftLine size={20} />,
    },
  ];

  return (
    <>
      <nav id="sidebar" className="lg:min-w-[270px] w-max max-lg:min-w-8">
        <div
          id="sidebar-collapse-menu"
          className={`bg-white shadow-lg h-screen fixed top-0 left-0 overflow-auto z-99 lg:min-w-[250px] lg:w-max transition-all duration-500
          ${isOpen ? "w-[250px] visible" : "max-lg:w-0 max-lg:invisible"}`}
        >
          <div className="sticky top-0 bg-white z-100 mt-7">
            <Link href="/" className="outline-0">
              <Image
                width={180}
                height={155}
                src="/images/dashboard/sidebar/logo.png"
                alt="logo"
                className="mx-auto"
              />
            </Link>
          </div>

          <div className="py-6 px-6">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="menu-item text-slate-800 text-[15px] font-medium flex items-center gap-3 cursor-pointer hover:bg-[#d9f3ea] rounded-md px-3 py-3 transition-all duration-300"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}

              {/* <li>
                <Link
                  href="#"
                  className="menu-item text-green-800 text-[15px] font-medium flex items-center cursor-pointer bg-[#d9f3ea] hover:bg-[#d9f3ea] rounded-md px-3 py-3 transition-all duration-300"
                >
                  <MdOutlineDashboard size={20} className="mr-3" />

                  <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="menu-item text-slate-800 text-[15px] font-medium flex items-center cursor-pointer hover:bg-[#d9f3ea] rounded-md px-3 py-3 transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-[18px] h-[18px] mr-3"
                    viewBox="0 0 60.123 60.123"
                  >
                    <path d="M57.124 51.893H16.92a3 3 0 1 1 0-6h40.203a3 3 0 0 1 .001 6zm0-18.831H16.92a3 3 0 1 1 0-6h40.203a3 3 0 0 1 .001 6zm0-18.831H16.92a3 3 0 1 1 0-6h40.203a3 3 0 0 1 .001 6z" />
                    <circle cx="4.029" cy="11.463" r="4.029" />
                    <circle cx="4.029" cy="30.062" r="4.029" />
                    <circle cx="4.029" cy="48.661" r="4.029" />
                  </svg>
                  <span>Order List</span>
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>

      <button
        id="toggle-sidebar"
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden w-8 h-8 z-[100] fixed top-[36px] left-[10px] cursor-pointer bg-[#007bff] flex items-center justify-center rounded-full outline-0 transition-all duration-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#fff"
          className="w-3 h-3"
          viewBox="0 0 55.752 55.752"
        >
          <path d="M43.006 23.916a5.36 5.36 0 0 0-.912-.727L20.485 1.581a5.4 5.4 0 0 0-7.637 7.638l18.611 18.609-18.705 18.707a5.398 5.398 0 1 0 7.634 7.635l21.706-21.703a5.35 5.35 0 0 0 .912-.727 5.373 5.373 0 0 0 1.574-3.912 5.363 5.363 0 0 0-1.574-3.912z" />
        </svg>
      </button>
    </>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineDashboard, MdWorkOutline } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { RiDraftLine } from "react-icons/ri";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const topNavItems = [
    {
      name: "Dashboard",
      href: "/",
      icon: <MdOutlineDashboard size={20} />,
    },
    {
      name: "Message/Mail",
      href: "/message-mail",
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

  const catalogNavItems = [
    {
      name: "Services",
      href: "/services",
      icon: <MdOutlineDashboard size={20} />,
    },
    {
      name: "Packages",
      href: "/sidebar-packages",
      icon: <IoMailOutline size={20} />,
    },
    {
      name: "Service Categories",
      href: "/service-categories",
      icon: <MdWorkOutline size={20} />,
    },
    {
      name: "Pricing Groups",
      href: "/pricing-groups",
      icon: <RiDraftLine size={20} />,
    },
  ];

  return (
    <>
      <nav id="sidebar" className="lg:min-w-[300px] w-max max-lg:min-w-8">
        <div
          id="sidebar-collapse-menu"
          className={`bg-white shadow-lg h-screen fixed top-0 left-0 overflow-auto z-99 lg:min-w-[300px] lg:w-max transition-all duration-500
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
              <li>
                <Link
                  href="/create-order"
                  className="menu-item block text-center text-white text-[16px] font-medium cursor-pointer bg-primary-violet hover:bg-primary-violet/90 rounded-md py-2 transition-all duration-300"
                >
                  <span className="">
                    <span className="text-xl">+</span> Create Order
                  </span>
                </Link>
              </li>
              {topNavItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="menu-item text-slate-800 text-[15px] font-medium flex items-center gap-3 cursor-pointer hover:bg-[#eae9f0] rounded-md px-3 py-3 transition-all duration-300"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
              {/* --------------------------- */}
              <li>
                <span className="menu-item block font-semibold text-start text-[18px] text-[#333333] rounded-md py-2 px-3 transition-all duration-300">
                  Catalogue
                </span>
              </li>
              {catalogNavItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="menu-item text-slate-800 text-[16px] font-medium flex items-center gap-3 cursor-pointer hover:bg-[#eae9f0] rounded-md px-3 py-3 transition-all duration-300"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      <button
        id="toggle-sidebar"
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden w-8 h-8 z-100 fixed top-9 left-2.5 cursor-pointer bg-[#007bff] flex items-center justify-center rounded-full outline-0 transition-all duration-500"
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

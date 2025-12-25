"use client";

import React, { useState } from "react";
import {
  ArrowLeft,
  Search,
  Eye,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";

// --- Types & Mock Data ---

type PaymentStatus = "Invoiced" | "Unpaid" | "Paid";
type OrderStatus = "Completed" | "In Progress";

interface Order {
  id: string;
  date: string;
  companyName: string;
  companyLogo: string;
  address: string;
  services: number;
  total: number;
  appointmentDate: string;
  status: OrderStatus;
  payment: PaymentStatus;
}

const orders: Order[] = [
  {
    id: "#12333",
    date: "12/04/24",
    companyName: "Louis Vuitton",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Gucci_logo.svg/1200px-Gucci_logo.svg.png", // Using a placeholder for fashion brand
    address: "2464 Royal Ln. Mesa, New Jersey",
    services: 2,
    total: 546,
    appointmentDate: "12/04/24 at 3:00 pm",
    status: "Completed",
    payment: "Invoiced",
  },
  {
    id: "#12333",
    date: "12/04/24",
    companyName: "Bank of America",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Bank_of_America_logo.svg/2560px-Bank_of_America_logo.svg.png",
    address: "3517 W. Gray St. Utica, Pennsylvania",
    services: 6,
    total: 783,
    appointmentDate: "08/04/24 at 5:00 pm",
    status: "In Progress",
    payment: "Unpaid",
  },
  {
    id: "#12333",
    date: "12/04/24",
    companyName: "Nintendo",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Nintendo.svg/1024px-Nintendo.svg.png",
    address: "2715 Ash Dr. San Jose, South Dakota",
    services: 3,
    total: 246,
    appointmentDate: "02/04/24 at 4:00 pm",
    status: "Completed",
    payment: "Paid",
  },
  {
    id: "#12333",
    date: "12/04/24",
    companyName: "McDonald's",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1200px-McDonald%27s_Golden_Arches.svg.png",
    address: "2715 Ash Dr. San Jose, South Dakota",
    services: 3,
    total: 246,
    appointmentDate: "02/04/24 at 4:00 pm",
    status: "Completed",
    payment: "Invoiced",
  },
  {
    id: "#12333",
    date: "12/04/24",
    companyName: "Pizza Hut",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/Pizza_Hut_logo.svg/1200px-Pizza_Hut_logo.svg.png",
    address: "2715 Ash Dr. San Jose, South Dakota",
    services: 3,
    total: 246,
    appointmentDate: "02/04/24 at 4:00 pm",
    status: "In Progress",
    payment: "Unpaid",
  },
  {
    id: "#12333",
    date: "12/04/24",
    companyName: "Microsoft",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png",
    address: "2715 Ash Dr. San Jose, South Dakota",
    services: 3,
    total: 246,
    appointmentDate: "02/04/24 at 4:00 pm",
    status: "Completed",
    payment: "Paid",
  },
  {
    id: "#12333",
    date: "12/04/24",
    companyName: "Netflix",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png",
    address: "2715 Ash Dr. San Jose, South Dakota",
    services: 3,
    total: 246,
    appointmentDate: "02/04/24 at 4:00 pm",
    status: "In Progress",
    payment: "Invoiced",
  },
  {
    id: "#12333",
    date: "12/04/24",
    companyName: "Salesforce",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1200px-Salesforce.com_logo.svg.png",
    address: "2715 Ash Dr. San Jose, South Dakota",
    services: 3,
    total: 246,
    appointmentDate: "02/04/24 at 4:00 pm",
    status: "Completed",
    payment: "Unpaid",
  },
];

// --- Components ---

const PaymentBadge = ({ status }: { status: PaymentStatus }) => {
  const styles = {
    Invoiced: "bg-amber-50 text-amber-600",
    Unpaid: "bg-red-50 text-red-600",
    Paid: "bg-green-50 text-green-600",
  };

  return (
    <span
      className={`px-4 py-1.5 rounded-full text-xs font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
};

const StatusBadge = ({ status }: { status: OrderStatus }) => {
  return (
    <span className="px-4 py-1.5 rounded-full text-xs font-medium border border-pink-300 text-pink-700 bg-white">
      {status}
    </span>
  );
};

export default function OrderManagement() {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = [
    { name: "All", count: 548 },
    { name: "In Progress", count: 120 },
    { name: "Completed", count: 48 },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      {/* --- Top Header Section --- */}
      <div className="p-6 pb-0">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-slate-100 rounded-full transition-colors">
              <ArrowLeft className="w-5 h-5 text-[#1e1b4b]" />
            </button>
            <h1 className="text-xl font-bold text-[#1e1b4b]">
              Order Management
            </h1>
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search here..."
              className="w-full pl-10 pr-4 py-2 border border-[#1e1b4b] rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#1e1b4b]"
            />
          </div>
        </div>

        {/* --- Tabs --- */}
        <div className="flex items-center gap-2 border-b border-gray-100">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`
                px-6 py-3 text-sm font-medium transition-colors relative
                ${
                  activeTab === tab.name
                    ? "bg-pink-50 text-pink-700 rounded-t-lg"
                    : "text-slate-500 hover:text-slate-800"
                }
              `}
            >
              {tab.name}({tab.count})
            </button>
          ))}
        </div>
      </div>

      {/* --- Table Section --- */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className="bg-white text-slate-900 font-bold border-b border-slate-100">
            <tr>
              <th className="px-6 py-4">Order ID</th>
              <th className="px-6 py-4">Order Date</th>
              <th className="px-6 py-4">Company/Client</th>
              <th className="px-6 py-4">Address</th>
              <th className="px-6 py-4 text-center">Services</th>
              <th className="px-6 py-4">Total</th>
              <th className="px-6 py-4">Appointments</th>
              <th className="px-6 py-4 text-center">Status</th>
              <th className="px-6 py-4 text-center">Payment</th>
              <th className="px-6 py-4 text-center">Details</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {orders.map((order, index) => (
              <tr key={index} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 font-medium text-slate-600">
                  {order.id}
                </td>
                <td className="px-6 py-4 text-slate-600">{order.date}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 relative shrink-0">
                      <Image
                        src={order.companyLogo}
                        alt={order.companyName}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="font-medium text-slate-700">
                      {order.companyName}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-slate-500 max-w-xs truncate">
                  {order.address}
                </td>
                <td className="px-6 py-4 text-center text-slate-600">
                  {order.services}
                </td>
                <td className="px-6 py-4 text-slate-600">${order.total}</td>
                <td className="px-6 py-4 text-slate-500">
                  {order.appointmentDate}
                </td>
                <td className="px-6 py-4 text-center">
                  <StatusBadge status={order.status} />
                </td>
                <td className="px-6 py-4 text-center">
                  <PaymentBadge status={order.payment} />
                </td>
                <td className="px-6 py-4 text-center">
                  <button className="bg-[#1e1b4b] p-1.5 rounded text-white hover:bg-[#2d2a6e] transition-colors">
                    <Eye className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* --- Pagination --- */}
      <div className="flex justify-center items-center gap-4 py-8">
        <button className="flex items-center text-sm text-slate-600 hover:text-[#1e1b4b] font-medium">
          <ChevronLeft className="w-4 h-4 mr-1" />
          Previous
        </button>

        <div className="flex items-center gap-2">
          <button className="w-8 h-8 rounded-full bg-[#1e1b4b] text-white text-sm font-medium flex items-center justify-center">
            1
          </button>
          <span className="text-slate-400 text-sm">2 , 3 ............ 100</span>
        </div>

        <button className="flex items-center text-sm text-slate-600 hover:text-[#1e1b4b] font-medium">
          Next
          <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>
    </div>
  );
}

"use client";

import React from "react";
import { ArrowLeft, Trash2 } from "lucide-react";

// Sample Data
const notifications = [
  {
    id: 1,
    title: "New Order Received",
    description:
      "Order #3456 has been placed by Mike. Please review and assign it to the appropriate team.",
    time: "Just Now",
  },
  {
    id: 2,
    title: "Payment Confirmation",
    description:
      'Payment of $1,200 for Order #3456 has been successfully processed."',
    time: "5 min ago",
  },
  {
    id: 3,
    title: "Client Message Received",
    description:
      "John has sent a new message regarding Order #3456: 'Can we adjust the delivery date?'",
    time: "30 min ago",
  },
  {
    id: 4,
    title: "Upcoming Appointment Reminder",
    description:
      "Photoshoot for Order #3456 is scheduled for tomorrow at 10:00 AM at.",
    time: "6 hours ago",
  },
  {
    id: 5,
    title: "Order Status Update",
    description:
      "Order #3456 has moved from 'Pending' to 'In Progress.' Ensure all tasks are on schedule.\"",
    time: "8 hours ago",
  },
];

const NotificationsPage = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      {/* Header Section */}
      <header className="p-6 pb-2">
        <div className="flex items-center gap-4 mb-8">
          <button className="hover:bg-slate-100 p-1 rounded-full transition-colors">
            <ArrowLeft className="w-7 h-7 text-[#2d2c6c]" />
          </button>
          <h1 className="text-3xl font-bold text-slate-800">Notifications</h1>
        </div>

        <p className="text-xl text-slate-600 mb-6">Showing 48 Notifications</p>
      </header>

      {/* Notifications List */}
      <div className="w-full">
        {notifications.map((notif, index) => (
          <div
            key={notif.id}
            className={`flex items-center justify-between px-8 py-5 transition-colors group ${
              index % 2 === 0 ? "bg-white" : "bg-[#f8f8ff]" // Zebra striping with light lavender tint
            }`}
          >
            {/* Left side: Content */}
            <div className="flex-1 pr-8">
              <span className="text-lg font-bold text-slate-800">
                {notif.title} -{" "}
              </span>
              <span className="text-lg text-slate-600 font-normal">
                {notif.description}
              </span>
            </div>

            {/* Right side: Time and Action */}
            <div className="flex items-center gap-12 shrink-0">
              <span className="text-lg text-slate-600 font-normal">
                {notif.time}
              </span>
              <button
                className="text-red-500 hover:text-red-700 transition-colors p-1"
                aria-label="Delete notification"
              >
                <Trash2 className="w-6 h-6" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationsPage;

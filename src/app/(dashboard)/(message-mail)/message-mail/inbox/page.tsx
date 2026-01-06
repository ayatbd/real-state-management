"use client";

import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Star, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";

// 1. Define Data Interface
interface EmailItem {
  id: string;
  sender: string;
  subject: string;
  preview: string;
  date: string;
  avatarUrl: string;
  isStarred: boolean;
}

// 2. Mock Data (matching the screenshot)
const initialEmails: EmailItem[] = [
  {
    id: "1",
    sender: "Albert Mike",
    subject: "Request For Information",
    preview:
      "I hope you are doing well. I have a small request. Can you pleas...",
    date: "1:45 AM",
    avatarUrl: "https://i.pravatar.cc/150?u=1",
    isStarred: false,
  },
  {
    id: "2",
    sender: "Leslie Alexander",
    subject: "Invitation For Meeting",
    preview:
      "Good Morning, I hope this email finds you well. I am writing to ext...",
    date: "3:34 AM",
    avatarUrl: "https://i.pravatar.cc/150?u=2",
    isStarred: false,
  },
  {
    id: "3",
    sender: "Bessie Cooper",
    subject: "Holiday Notice",
    preview:
      "Good Evening, I hope you are doing well. I have a small request.Can you p...",
    date: "Apr 2",
    avatarUrl: "https://i.pravatar.cc/150?u=3",
    isStarred: false,
  },
  {
    id: "4",
    sender: "Cody Fisher",
    subject: "Offer Letter",
    preview:
      "Thank you for applying. I hope you are doing well. I have a small request. Can...",
    date: "Mar 31",
    avatarUrl: "https://i.pravatar.cc/150?u=4",
    isStarred: true,
  },
  {
    id: "5",
    sender: "Kathryn Murphy",
    subject: "Apology Letter",
    preview:
      "I hope you are doing well. I have a small request. Can you please provide...",
    date: "Mar 30",
    avatarUrl: "https://i.pravatar.cc/150?u=5",
    isStarred: false,
  },
  {
    id: "6",
    sender: "Albert Flores",
    subject: "Apply For Executive Position",
    preview: "I am writing to express my keen interest in the Executive P...",
    date: "Mar 26",
    avatarUrl: "https://i.pravatar.cc/150?u=6",
    isStarred: false,
  },
  {
    id: "7",
    sender: "Eleanor Pena",
    subject: "Class schedule",
    preview:
      "Your online class will be held on Saturday at 2:30 pm Bangladesh standar...",
    date: "Mar 21",
    avatarUrl: "https://i.pravatar.cc/150?u=7",
    isStarred: true,
  },
  {
    id: "8",
    sender: "Arlene McCoy",
    subject: "Invitation to attend our Exclusive Webinar",
    preview: "An exclusive webinar will be held on 23 Jan...",
    date: "Mar 19",
    avatarUrl: "https://i.pravatar.cc/150?u=8",
    isStarred: false,
  },
  {
    id: "9",
    sender: "Wade Warren",
    subject: "Reschedule the meeting",
    preview:
      "Good mourning, I hope you all are doing well. I have to inform you....",
    date: "Mar 2",
    avatarUrl: "https://i.pravatar.cc/150?u=9",
    isStarred: false,
  },
  {
    id: "10",
    sender: "Devon Lane",
    subject: "Request for feedback",
    preview:
      "Help us to improve our services regarding online shopping for up...",
    date: "Feb 28",
    avatarUrl: "https://i.pravatar.cc/150?u=10",
    isStarred: true,
  },
  {
    id: "11",
    sender: "Jenny Wilson",
    subject: "Jenny sent you a message",
    preview: "Jenney send you a message on 25 January 2024, see more...",
    date: "Feb 24",
    avatarUrl: "https://i.pravatar.cc/150?u=11",
    isStarred: true,
  },
];

export default function Inbox() {
  const [emails, setEmails] = useState<EmailItem[]>(initialEmails);

  // Toggle Star Status
  const toggleStar = (id: string) => {
    setEmails((prev) =>
      prev.map((email) =>
        email.id === id ? { ...email, isStarred: !email.isStarred } : email
      )
    );
  };

  // Delete Email
  const deleteEmail = (id: string) => {
    setEmails((prev) => prev.filter((email) => email.id !== id));
  };

  return (
    <div className="flex flex-col h-screen w-full bg-white text-slate-900">
      {/* Header */}
      <div className="flex items-center gap-4 px-6 py-4 border-b border-gray-100">
        <Button variant="ghost" size="icon" className="-ml-2 hover:bg-gray-100">
          <ArrowLeft className="h-6 w-6 text-slate-700" />
        </Button>
        <h1 className="text-xl font-semibold text-slate-800">Inbox</h1>
      </div>

      {/* Email List Container */}
      <div className="flex-1 overflow-y-auto">
        <ul className="flex flex-col">
          {emails.map((email) => (
            <li
              key={email.id}
              className="group flex items-center gap-4 px-4 py-3 border-b border-gray-100 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              {/* Star Icon */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleStar(email.id);
                }}
                className="focus:outline-none"
              >
                <Star
                  className={cn(
                    "h-5 w-5 transition-colors",
                    email.isStarred
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-slate-400 hover:text-slate-600"
                  )}
                />
              </button>

              {/* Avatar */}
              <Avatar className="h-10 w-10 border border-gray-200">
                <AvatarImage src={email.avatarUrl} alt={email.sender} />
                <AvatarFallback className="bg-slate-100 text-slate-600">
                  {email.sender.charAt(0)}
                </AvatarFallback>
              </Avatar>

              {/* Content Wrapper */}
              <div className="flex flex-1 items-center gap-4 min-w-0">
                {/* Sender Name */}
                <span className="w-40 font-bold text-slate-900 truncate">
                  {email.sender}
                </span>

                {/* Subject & Preview */}
                <div className="flex-1 min-w-0 truncate text-sm">
                  <span className="font-semibold text-slate-900">
                    {email.subject}
                  </span>
                  <span className="mx-1 text-slate-500">-</span>
                  <span className="text-slate-500">{email.preview}</span>
                </div>
              </div>

              {/* Right Side: Date & Actions */}
              <div className="flex items-center gap-4 pl-2">
                <span className="text-sm font-medium text-slate-600 whitespace-nowrap w-[70px] text-right">
                  {email.date}
                </span>

                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-slate-400 hover:text-red-600 hover:bg-red-50"
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteEmail(email.id);
                  }}
                >
                  <Trash2 className="h-5 w-5" />
                </Button>
              </div>
            </li>
          ))}

          {/* Empty State */}
          {emails.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full py-20 text-slate-500">
              <p>Your inbox is empty</p>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
}

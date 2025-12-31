"use client";

import React from "react";
import {
  Plus,
  Link as LinkIcon,
  Upload,
  FileText,
  Calendar,
  RefreshCw,
  FolderCheck,
  Eye,
  CheckCircle2,
  Send,
} from "lucide-react";
import Image from "next/image";

// --- Types ---

type ServiceStatus =
  | "Completed"
  | "In Production"
  | "Revisions"
  | "Scheduled"
  | "Order Placed"
  | "Quality Check";

interface ServiceItem {
  id: string;
  name: string;
  status: ServiceStatus;
}

// --- Mock Data ---

const packageServices: ServiceItem[] = [
  { id: "1", name: "Twilight Photo", status: "Completed" },
  { id: "2", name: "Drone Photo", status: "In Production" },
];

const otherServices: ServiceItem[] = [
  { id: "3", name: "Cinematic Video", status: "Revisions" },
];

const uploadedImages = [
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1000&auto=format&fit=crop",
];

// --- Components ---

// 1. Status Stepper Component
const StatusStepper = ({ status }: { status: ServiceStatus }) => {
  // Define the order of steps and their associated icons
  const steps = [
    { id: "Order Placed", icon: FileText },
    { id: "Scheduled", icon: Calendar },
    { id: "In Production", icon: RefreshCw },
    { id: "Quality Check", icon: FolderCheck },
    { id: "Revisions", icon: Eye }, // Eye represents review/revision
    { id: "Completed", icon: CheckCircle2 },
  ];

  const activeIndex = steps.findIndex((step) => step.id === status);

  return (
    <div className="flex items-center justify-between w-full max-w-md px-2 py-1">
      {steps.map((step, index) => {
        const Icon = step.icon;
        const isActive = index === activeIndex;
        // Simple logic: if the current step matches, it's "active".
        // In a real app, you might want previous steps to also be 'completed' colored.
        // Based on the image, inactive ones are very light gray, active is distinct.

        return (
          <div
            key={step.id}
            className="relative flex flex-col items-center group"
          >
            {/* Floating Badge for Active Status */}
            {isActive && (
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap z-10">
                <div className="bg-white border border-slate-200 text-[#1e1b4b] text-xs font-medium px-3 py-1 rounded-full shadow-sm relative">
                  {status}
                  {/* Little triangle arrow at bottom of badge */}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white border-b border-r border-slate-200 rotate-45"></div>
                </div>
              </div>
            )}

            {/* Icon */}
            <div
              className={`
              p-1 rounded-full transition-colors
              ${isActive ? "text-[#1e1b4b]" : "text-slate-300"}
            `}
            >
              <Icon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

// 2. Service Row Component
const ServiceRow = ({ service }: { service: ServiceItem }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-4 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm mb-4">
      {/* Name */}
      <div className="min-w-[150px]">
        <h4 className="text-slate-800 font-medium text-lg">{service.name}</h4>
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <button className="bg-[#1e1b4b] hover:bg-[#2d2a6e] text-white p-2 rounded transition-colors">
          <LinkIcon className="w-5 h-5" />
        </button>
        <button className="bg-[#1e1b4b] hover:bg-[#2d2a6e] text-white p-2 rounded transition-colors">
          <Upload className="w-5 h-5" />
        </button>
      </div>

      {/* Stepper (takes remaining width) */}
      <div className="flex-grow flex justify-end">
        <div className="w-full md:w-auto md:min-w-[350px] border border-slate-100 rounded-lg p-2 bg-slate-50/50">
          <StatusStepper status={service.status} />
        </div>
      </div>
    </div>
  );
};

// --- Main Page Component ---

export default function TaskDetailsBottom() {
  return (
    <div className="min-h-screen bg-white p-6 md:p-8 font-sans max-w-7xl mx-auto space-y-12">
      {/* ---------------- NOTES SECTION ---------------- */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-slate-900">Notes</h2>
            <span className="text-slate-400 text-sm italic">
              (This notes are internal not visible to client)
            </span>
          </div>
          <button className="flex items-center text-orange-500 font-medium hover:text-orange-600 transition-colors">
            <Plus className="w-4 h-4 mr-1" />
            Add Note
          </button>
        </div>

        <div className="bg-slate-50 p-4 rounded-md border-l-4 border-orange-200">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm">
            <div className="flex flex-row sm:flex-col gap-2 sm:gap-0 min-w-[100px] border-r border-slate-200 pr-4 sm:border-r-0 sm:pr-0">
              <span className="font-bold text-orange-500">Neils</span>
              <span className="text-orange-400">24/01/25 | 16:36</span>
            </div>
            {/* Mobile divider hidden, desktop divider visible via layout logic above or simple border */}
            <div className="hidden sm:block w-px bg-slate-300 mx-2"></div>
            <p className="text-slate-700 leading-relaxed">
              Please call the property owner to make an appointment, take some
              picture and videos of the property location. Please call the
              property owner to make an appointment, take some picture and
              videos of the property location.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- PURCHASED PACKAGES SECTION ---------------- */}
      <section>
        {/* Header Bar */}
        <div className="bg-orange-500 text-white px-6 py-3 rounded-md mb-6 shadow-sm">
          <h2 className="text-lg font-bold">Purchased Package/Services</h2>
        </div>

        <div className="space-y-8">
          {/* Package Services List */}
          <div>
            <h3 className="text-xl font-medium text-slate-800 mb-4">
              Package Services
            </h3>
            {packageServices.map((service) => (
              <ServiceRow key={service.id} service={service} />
            ))}
          </div>

          {/* Other Services List */}
          <div>
            <h3 className="text-xl font-medium text-slate-800 mb-4">
              Other Services
            </h3>
            {otherServices.map((service) => (
              <ServiceRow key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- MESSAGE SECTION ---------------- */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Message</h2>

        <div className="border border-slate-200 rounded-xl p-6 bg-white shadow-sm h-[400px] flex flex-col relative">
          {/* Chat Area */}
          <div className="flex-grow space-y-6 overflow-y-auto mb-6 px-2">
            {/* Incoming Message */}
            <div className="flex items-start gap-3 max-w-[80%]">
              <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border border-slate-200">
                <Image
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
                  alt="Sender"
                  width={40}
                  height={40}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <div className="bg-slate-600 text-white px-4 py-3 rounded-2xl rounded-tl-none shadow-sm">
                  <p className="text-sm">Hi, How are you?</p>
                </div>
                <span className="text-xs text-slate-400 mt-1 block">
                  11:15 AM
                </span>
              </div>
            </div>

            {/* Outgoing Message */}
            <div className="flex items-start gap-3 max-w-[80%] ml-auto justify-end">
              <div className="flex flex-col items-end">
                <div className="bg-[#1e1b4b] text-white px-4 py-3 rounded-2xl rounded-tr-none shadow-sm">
                  <p className="text-sm">
                    Hey! 👋 I saw your post about going on a road trip next
                    week. Where are you headed?
                  </p>
                </div>
                <span className="text-xs text-slate-400 mt-1 block">
                  11:05 AM
                </span>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="relative mt-auto">
            <input
              type="text"
              placeholder="Message..."
              className="w-full border border-slate-300 rounded-lg pl-4 pr-14 py-3 focus:outline-none focus:border-[#1e1b4b] focus:ring-1 focus:ring-[#1e1b4b] transition-all"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#1e1b4b] hover:bg-[#2d2a6e] text-white p-2 rounded-md transition-colors">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* ---------------- UPLOADED FILE SECTION ---------------- */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Uploaded File
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {uploadedImages.map((src, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm group"
            >
              <Image
                src={src}
                alt={`Uploaded file ${index + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

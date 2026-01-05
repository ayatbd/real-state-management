"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

// Mock Data
const userProfile = {
  name: "Robert Smith",
  email: "robertsmith@gmail.com",
  contact: "+99007007007",
  avatarUrl: "https://i.pravatar.cc/300?u=robert", // Placeholder image
};

export default function MyProfile() {
  return (
    <div className="min-h-screen w-full bg-white p-6 md:p-10">
      {/* 1. Header Navigation */}
      <div className="mb-8">
        <button
          className="flex items-center gap-3 text-gray-800 hover:text-gray-600 transition-colors"
          onClick={() => console.log("Go back")} // Replace with router.back()
        >
          <ArrowLeft className="h-6 w-6" />
          <span className="text-xl font-medium text-gray-700">My Profile</span>
        </button>
      </div>

      {/* 2. Main Content Container */}
      <div className="flex flex-col items-center max-w-2xl mx-auto mt-12">
        {/* Page Title */}
        <h1 className="text-3xl text-gray-800 font-normal mb-10">
          Personal Details
        </h1>

        {/* Profile Image */}
        <div className="mb-14">
          <Avatar className="w-40 h-40 border-4 border-white shadow-sm">
            <AvatarImage
              src={userProfile.avatarUrl}
              alt={userProfile.name}
              className="object-cover"
            />
            <AvatarFallback className="text-4xl bg-gray-100 text-gray-400">
              {userProfile.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
        </div>

        {/* Details List */}
        <div className="w-full max-w-lg space-y-6 mb-20">
          {/* Row 1: User Name */}
          <div className="flex justify-between items-start text-lg">
            <span className="text-gray-700 font-medium">User Name:</span>
            <span className="text-gray-600 font-normal text-right">
              {userProfile.name}
            </span>
          </div>

          {/* Row 2: Email */}
          <div className="flex justify-between items-start text-lg">
            <span className="text-gray-700 font-medium">Email:</span>
            <span className="text-gray-600 font-normal text-right">
              {userProfile.email}
            </span>
          </div>

          {/* Row 3: Contact no */}
          <div className="flex justify-between items-start text-lg">
            <span className="text-gray-700 font-medium">Contact no:</span>
            <span className="text-gray-600 font-normal text-right">
              {userProfile.contact}
            </span>
          </div>
        </div>

        {/* Edit Button */}
        <Button className="w-40 h-12 text-base bg-[#2e2a6d] hover:bg-[#232055] text-white rounded-md transition-all">
          Edit
        </Button>
      </div>
    </div>
  );
}

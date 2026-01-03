"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";

// 1. Define the Data Interface
interface TeamMember {
  id: string;
  slNo: string;
  name: string;
  email: string;
  phone: string;
  services: string[];
  role: string;
  avatarUrl: string;
}

// 2. Mock Data (Based on your screenshot)
const teamData: TeamMember[] = [
  {
    id: "1",
    slNo: "#1233",
    name: "Annette Black",
    email: "bockely@att.com",
    phone: "(201) 555-0124",
    services: ["Drone Photo", "Twilight Photos"],
    role: "Photographer",
    avatarUrl: "https://i.pravatar.cc/150?u=1",
  },
  {
    id: "2",
    slNo: "#1233",
    name: "Jerome Bell",
    email: "csilvers@rizon.com",
    phone: "(219) 555-0114",
    services: ["Twilight Photos"],
    role: "Photo Editor",
    avatarUrl: "https://i.pravatar.cc/150?u=2",
  },
  {
    id: "3",
    slNo: "#1233",
    name: "Ronald Richards",
    email: "qamaho@mail.com",
    phone: "(316) 555-0116",
    services: ["Drone Photo"],
    role: "Video Editor",
    avatarUrl: "https://i.pravatar.cc/150?u=3",
  },
  {
    id: "4",
    slNo: "#1233",
    name: "Dianne Russell",
    email: "xterris@gmail.com",
    phone: "(907) 555-0101",
    services: ["3D Matterport", "Twilight Photos"],
    role: "Energy Label Advisor",
    avatarUrl: "https://i.pravatar.cc/150?u=4",
  },
  {
    id: "5",
    slNo: "#1233",
    name: "Albert Flores",
    email: "xterris@gmail.com",
    phone: "(505) 555-0125",
    services: ["Drone Photo", "3D Matterport"],
    role: "Manager",
    avatarUrl: "https://i.pravatar.cc/150?u=5",
  },
  {
    id: "6",
    slNo: "#1233",
    name: "Eleanor Pena",
    email: "xterris@gmail.com",
    phone: "(704) 555-0127",
    services: ["Highlight Video", "Twilight Photos"],
    role: "Admin",
    avatarUrl: "https://i.pravatar.cc/150?u=6",
  },
  {
    id: "7",
    slNo: "#1233",
    name: "Floyd Miles",
    email: "xterris@gmail.com",
    phone: "(219) 555-0114",
    services: ["3D Matterport"],
    role: "Photographer",
    avatarUrl: "https://i.pravatar.cc/150?u=7",
  },
  {
    id: "8",
    slNo: "#1233",
    name: "Cody Fisher",
    email: "xterris@gmail.com",
    phone: "(270) 555-0117",
    services: ["Highlight Video"],
    role: "Manager",
    avatarUrl: "https://i.pravatar.cc/150?u=8",
  },
  {
    id: "9",
    slNo: "#1233",
    name: "Ralph Edwards",
    email: "xterris@gmail.com",
    phone: "(207) 555-0119",
    services: ["Twilight Photos"],
    role: "Photographer",
    avatarUrl: "https://i.pravatar.cc/150?u=9",
  },
  {
    id: "10",
    slNo: "#1233",
    name: "Devon Lane",
    email: "xterris@gmail.com",
    phone: "(225) 555-0118",
    services: ["Drone Photo", "Twilight Photos"],
    role: "Photo Editor",
    avatarUrl: "https://i.pravatar.cc/150?u=10",
  },
];

export default function TeamMemberTable() {
  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-sm">
      {/* Responsive Wrapper */}
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent border-b border-gray-100">
              <TableHead className="w-[100px] text-gray-900 font-semibold">
                SL No.
              </TableHead>
              <TableHead className="text-gray-900 font-semibold">
                Team Member Name
              </TableHead>
              <TableHead className="text-gray-900 font-semibold">
                Email
              </TableHead>
              <TableHead className="text-gray-900 font-semibold">
                Phone Number
              </TableHead>
              <TableHead className="text-gray-900 font-semibold">
                Services
              </TableHead>
              <TableHead className="text-gray-900 font-semibold">
                Role
              </TableHead>
              <TableHead className="text-right text-gray-900 font-semibold pr-6">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {teamData.map((member) => (
              <TableRow
                key={member.id}
                className="hover:bg-gray-50 border-b border-gray-50 h-16"
              >
                {/* SL No */}
                <TableCell className="font-medium text-gray-600">
                  {member.slNo}
                </TableCell>

                {/* Team Member Name + Avatar */}
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10 border border-gray-200">
                      <AvatarImage src={member.avatarUrl} alt={member.name} />
                      <AvatarFallback className="bg-gray-100 text-gray-600">
                        {member.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <span className="font-medium text-gray-800 whitespace-nowrap">
                      {member.name}
                    </span>
                  </div>
                </TableCell>

                {/* Email */}
                <TableCell className="text-gray-600">{member.email}</TableCell>

                {/* Phone */}
                <TableCell className="text-gray-600 whitespace-nowrap">
                  {member.phone}
                </TableCell>

                {/* Services */}
                <TableCell className="text-gray-600 max-w-[200px]">
                  {member.services.join(", ")}
                </TableCell>

                {/* Role */}
                <TableCell className="text-gray-600">{member.role}</TableCell>

                {/* Action Buttons */}
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    {/* Edit Button - Custom Dark Blue */}
                    <Button
                      size="icon"
                      className="h-9 w-9 bg-[#2e2a6d] hover:bg-[#232055] text-white rounded-md transition-colors"
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>

                    {/* Delete Button - Destructive Red */}
                    <Button
                      size="icon"
                      className="h-9 w-9 bg-[#e11d48] hover:bg-[#be123c] text-white rounded-md transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

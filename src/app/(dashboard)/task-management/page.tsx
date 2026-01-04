"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Eye, FileX } from "lucide-react";

// Mock Data based on the image
const taskData = [
  {
    date: "Sunday, 18 January, 2025",
    tasks: [
      {
        id: 1,
        type: "Photography",
        address: "Westheimer Rd. Santa Ana, Illinois 85",
      },
      {
        id: 2,
        type: "Video",
        address: "Gray St. Utica, Pennsylvania 57867",
      },
      {
        id: 3,
        type: "Floorplans",
        address: "Westheimer Rd. Santa Ana, Illinois 85",
      },
      {
        id: 4,
        type: "Photography",
        address: "Elgin St. Celina, Delaware 10299",
      },
    ],
  },
  {
    date: "Monday, 19 January, 2025", // Changed date slightly for realism
    tasks: [
      {
        id: 5,
        type: "Video",
        address: "Elgin St. Celina, Delaware 10299",
      },
      {
        id: 6,
        type: "Floorplans",
        address: "Gray St. Utica, Pennsylvania 57867",
      },
      {
        id: 7,
        type: "Photography",
        address: "Westheimer Rd. Santa Ana, Illinois 85",
      },
    ],
  },
];

export default function AssignedTaskList() {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-6 font-sans">
      {/* Top Heading Box */}
      <div className="w-full border-2 border-[#a33b87] bg-white rounded-lg py-3 text-center shadow-sm">
        <h1 className="text-xl md:text-2xl font-bold text-[#a33b87]">
          Assigned To Me
        </h1>
      </div>

      {/* Main Content Card */}
      <Card className="border border-gray-200 shadow-sm bg-white rounded-xl">
        <CardContent className="p-6">
          <div className="space-y-8">
            {taskData.map((group, index) => (
              <div key={index} className="flex flex-col items-center w-full">
                {/* Date Pill */}
                <div className="bg-[#ea9215] text-white px-8 py-2.5 rounded-full mb-8 font-medium text-base md:text-lg shadow-sm w-full md:w-auto text-center">
                  {group.date}
                </div>

                {/* List Items */}
                <div className="w-full space-y-6">
                  {group.tasks.map((task) => (
                    <div
                      key={task.id}
                      className="flex flex-col md:flex-row md:items-center justify-between gap-4 w-full"
                    >
                      {/* Left: Task Type */}
                      <div className="md:w-1/4">
                        <span className="text-lg font-semibold text-slate-700">
                          {task.type}
                        </span>
                      </div>

                      {/* Middle: Address */}
                      <div className="md:w-2/4">
                        <span className="text-base text-slate-600">
                          {task.address}
                        </span>
                      </div>

                      {/* Right: Action Buttons */}
                      <div className="md:w-1/4 flex items-center justify-end gap-3">
                        {/* Green Check Button */}
                        <Button
                          size="icon"
                          className="bg-[#0fab3c] hover:bg-[#0c8a30] rounded-md w-10 h-10 shadow-none"
                        >
                          <Check
                            className="h-6 w-6 text-white"
                            strokeWidth={3}
                          />
                        </Button>

                        {/* Purple Eye Button */}
                        <Button
                          size="icon"
                          className="bg-[#2c2275] hover:bg-[#201955] rounded-md w-10 h-10 shadow-none"
                        >
                          <Eye className="h-6 w-6 text-white" />
                        </Button>

                        {/* Red File/Delete Button */}
                        <Button
                          size="icon"
                          className="bg-[#d70a25] hover:bg-[#b0081e] rounded-md w-10 h-10 shadow-none"
                        >
                          <FileX className="h-5 w-5 text-white" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

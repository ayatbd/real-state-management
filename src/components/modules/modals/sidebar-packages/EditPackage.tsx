"use client";

import React from "react";
import { Search, Camera, Plus, Pencil } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Image from "next/image";

export default function EditPackage() {
  return (
    <Dialog>
      {/* 1. The Trigger Button */}
      <DialogTrigger asChild>
        <Button size="icon" className="bg-[#2A206A] hover:bg-[#1e174d] w-9 h-8">
          <Pencil className="w-4 h-4 text-white" />
        </Button>
      </DialogTrigger>

      {/* 2. The Dialog Content */}
      <DialogContent className="max-w-[95vw] md:max-w-2xl p-0 overflow-hidden border-none gap-0">
        {/* Custom Header to match the image exactly */}
        <DialogHeader className="p-6 pb-2 relative">
          <DialogTitle className="text-xl font-semibold text-center text-slate-800">
            Edit
          </DialogTitle>
          {/* Shadcn provides a default close button, but we can style the DialogClose specifically if needed */}
        </DialogHeader>

        <div className="p-6 pt-0 space-y-6 overflow-y-auto max-h-[85vh]">
          {/* Package Name */}
          <div className="space-y-2">
            <Label
              htmlFor="package-name"
              className="text-sm font-medium text-slate-700"
            >
              Package Name
            </Label>
            <Input
              id="package-name"
              defaultValue="Premium Packages"
              className="h-11 border-slate-300 focus-visible:ring-[#2d2c6c]"
            />
          </div>

          {/* Price */}
          <div className="space-y-2">
            <Label
              htmlFor="price"
              className="text-sm font-medium text-slate-700"
            >
              Price
            </Label>
            <Input
              id="price"
              defaultValue="$1050"
              className="h-11 border-slate-300 focus-visible:ring-[#2d2c6c]"
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label
              htmlFor="description"
              className="text-sm font-medium text-slate-700"
            >
              Description
            </Label>
            <Textarea
              id="description"
              defaultValue="Our most popular package including our most popular service."
              className="min-h-[100px] border-slate-300 focus-visible:ring-[#2d2c6c] resize-none"
            />
          </div>

          {/* Add Services/Products */}
          <div className="space-y-3">
            <Label className="text-sm font-medium text-slate-700">
              Add Services/Products
            </Label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input
                  placeholder="Search services/products"
                  className="pl-10 h-11 border-slate-300 focus-visible:ring-[#2d2c6c]"
                />
              </div>
              <Button
                type="button"
                className="bg-[#2d2c6c] hover:bg-[#25245a] h-11 px-8"
              >
                Add
              </Button>
            </div>

            {/* Service List Box */}
            <div className="border border-slate-300 rounded-md p-4 bg-white">
              <ul className="space-y-1.5 list-disc list-inside text-sm text-slate-600">
                <li>Twilight Photos</li>
                <li>3D Matterport</li>
                <li>Drone Photo</li>
                <li>Floor plan</li>
              </ul>
            </div>
          </div>

          {/* Photos Section */}
          <div className="space-y-3">
            <Label className="text-sm font-medium text-slate-700">Photos</Label>
            <div className="grid grid-cols-4 gap-3">
              {[
                "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=300",
                "https://images.unsplash.com/photo-1600607687940-477a63bd39d8?auto=format&fit=crop&w=300",
                "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=300",
              ].map((src, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-lg overflow-hidden border border-slate-200"
                >
                  <Image
                    width={120}
                    height={120}
                    src={src}
                    alt="House"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              <button className="aspect-square rounded-lg border-2 border-dashed border-slate-300 flex flex-col items-center justify-center hover:bg-slate-50 transition-colors group">
                <Camera className="w-6 h-6 text-slate-400 group-hover:text-slate-600" />
              </button>
            </div>
          </div>

          {/* Footer Buttons */}
          <div className="flex gap-4 pt-2">
            <DialogClose asChild>
              <Button
                variant="outline"
                className="flex-1 h-12 border-slate-200 text-slate-600 hover:bg-slate-50"
              >
                Cancel
              </Button>
            </DialogClose>
            <Button
              className="flex-1 h-12 bg-[#2d2c6c] hover:bg-[#25245a]"
              onClick={() => {
                // Handle update logic here
                console.log("Updated");
              }}
            >
              Update
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

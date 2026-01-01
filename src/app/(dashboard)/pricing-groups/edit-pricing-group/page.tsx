"use client";

import React from "react";
import { ArrowLeft, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

const NewPricingGroupPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-8 font-sans text-slate-900">
      {/* Top Navigation Bar */}
      <header className="flex justify-between items-center mb-12 max-w-7xl mx-auto">
        <button className="flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors font-medium">
          <Link href="/pricing-groups">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          Edit Pricing Group
        </button>
        <div className="relative w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <Input
            placeholder="Search here..."
            className="pl-10 bg-white border-slate-300 rounded-md focus-visible:ring-[#2d2c6c]"
          />
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-slate-100 p-12 space-y-12">
        <h1 className="text-4xl font-semibold text-center text-slate-800 mb-10">
          Pricing Group
        </h1>

        {/* 1. Pricing Group Name */}
        <section className="space-y-3">
          <Label className="text-sm font-medium text-slate-600">
            Pricing Group Name
          </Label>
          <Input
            placeholder="Input here"
            className="h-12 border-slate-300 focus-visible:ring-[#2d2c6c]"
          />
        </section>

        {/* 2. Associated Customers */}
        <section className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Associated Customers</h2>
            <div className="space-y-2">
              <Label className="text-sm font-medium text-slate-600">
                Client/Company
              </Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input
                  placeholder="Search for a client/company"
                  className="pl-10 h-12 border-slate-300"
                />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-[#2d2c6c] font-semibold text-sm">
                  Add
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            {[
              { name: "Horizon Land Ventures", color: "bg-yellow-400" },
              { name: "True North Homes", color: "bg-orange-400" },
            ].map((client, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-10 h-10 rounded-md ${client.color} flex items-center justify-center text-[10px] font-bold text-white uppercase`}
                  >
                    Logo
                  </div>
                  <span className="font-medium text-slate-700">
                    {client.name}
                  </span>
                </div>
                <button className="text-red-500 hover:text-red-600 text-sm font-medium transition-colors">
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="flex justify-end">
            <Button className="bg-[#2d2c6c] hover:bg-[#25245a] px-10 h-11 rounded-md">
              Save Customers
            </Button>
          </div>
        </section>

        {/* 3. Add Services/Products */}
        <section className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Add Services/Products</h2>
            <div className="space-y-2">
              <Label className="text-sm font-medium text-slate-600">
                Services/Products
              </Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input
                  placeholder="Search for a services/products"
                  className="pl-10 h-12 border-slate-300"
                />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-[#2d2c6c] font-semibold text-sm">
                  Add
                </button>
              </div>
            </div>
          </div>

          <div className="divide-y divide-slate-100">
            {["HD Photos", "Twilight Video", "Floor Plan", "HD Videos"].map(
              (item) => (
                <div
                  key={item}
                  className="flex justify-between py-4 items-center first:pt-0"
                >
                  <span className="text-slate-700 font-medium">{item}</span>
                  <button className="text-red-500 hover:text-red-600 text-sm font-medium transition-colors">
                    Remove
                  </button>
                </div>
              )
            )}
          </div>

          <div className="flex justify-end pt-2">
            <Button className="bg-[#2d2c6c] hover:bg-[#25245a] px-10 h-11 rounded-md">
              Save Services
            </Button>
          </div>
        </section>

        {/* 4. Pricing Table */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Pricing Table</h2>
          <div className="border border-slate-200 rounded-lg overflow-hidden">
            <Table>
              <TableHeader className="bg-white border-b border-slate-200">
                <TableRow className="hover:bg-transparent">
                  <TableHead className="py-4 text-slate-600 font-medium w-1/3">
                    Product
                  </TableHead>
                  <TableHead className="py-4 text-slate-600 font-medium text-center w-1/3">
                    Default Price
                  </TableHead>
                  <TableHead className="py-4 text-slate-600 font-medium text-center w-1/3">
                    Pricing Group Price
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { name: "HD Photos", default: "$580", group: "520" },
                  { name: "HD Videos", default: "$1080", group: "950" },
                  { name: "Drone Photo", default: "$750", group: "660" },
                  { name: "Twilight Video", default: "$950", group: "880" },
                  { name: "Floor Plan", default: "$1280", group: "1150" },
                  { name: "Floor Plan", default: "$1280", group: "1150" },
                ].map((row, i) => (
                  <TableRow
                    key={i}
                    className="hover:bg-slate-50 transition-colors"
                  >
                    <TableCell className="py-4 font-medium text-slate-700">
                      {row.name}
                    </TableCell>
                    <TableCell className="py-4 text-center text-slate-700 font-medium">
                      {row.default}
                    </TableCell>
                    <TableCell className="py-4">
                      <div className="flex justify-center">
                        <div className="relative w-32">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm">
                            $
                          </span>
                          <Input
                            defaultValue={row.group}
                            className="pl-7 h-10 border-slate-300 focus-visible:ring-[#2d2c6c]"
                          />
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="flex justify-end pt-4">
            <Button className="bg-[#2d2c6c] hover:bg-[#25245a] px-10 h-11 rounded-md">
              Save Pricing Table
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default NewPricingGroupPage;

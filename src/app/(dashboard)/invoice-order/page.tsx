"use client";

import { ArrowLeft, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Sample Data
const invoiceData = [
  { id: "#1233", company: "Louis Vuitton", orderCount: 4, logo: "LV" },
  { id: "#1233", company: "Bank of America", orderCount: 3, logo: "BA" },
  { id: "#1233", company: "Nintendo", orderCount: 6, logo: "N" },
  { id: "#1233", company: "Louis Vuitton", orderCount: 8, logo: "LV" },
  { id: "#1233", company: "Pizza Hut", orderCount: 2, logo: "PH" },
  { id: "#1233", company: "Johnson & Johnson", orderCount: 1, logo: "JJ" },
  { id: "#1233", company: "McDonald's", orderCount: 3, logo: "M" },
  { id: "#1233", company: "McDonald's", orderCount: 5, logo: "M" },
  { id: "#1233", company: "Sony", orderCount: 8, logo: "S" },
  { id: "#1233", company: "Louis Vuitton", orderCount: 2, logo: "LV" },
  { id: "#1233", company: "Bank of America", orderCount: 1, logo: "BA" },
];

const InvoiceOrderPage = () => {
  return (
    <div className="w-full min-h-screen bg-white p-8 font-sans">
      {/* Header Section */}
      <header className="flex justify-between items-center mb-10">
        <div className="flex items-center gap-3">
          <ArrowLeft className="w-6 h-6 text-[#2d2c6c] cursor-pointer" />
          <h1 className="text-2xl font-bold text-slate-800">Invoice Order</h1>
        </div>
        <div className="relative w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <Input
            placeholder="Search here..."
            className="pl-11 h-12 border-slate-300 rounded-lg focus-visible:ring-[#2d2c6c]"
          />
        </div>
      </header>

      {/* Table Section */}
      <div className="mb-8">
        <Table className="table-fixed">
          <TableHeader>
            <TableRow className="border-none hover:bg-transparent">
              <TableHead className="w-1/4 text-slate-900 font-bold text-lg">
                SL No.
              </TableHead>
              <TableHead className="w-1/3 text-slate-900 font-bold text-lg">
                Company/Client
              </TableHead>
              <TableHead className="w-1/6 text-slate-900 font-bold text-lg text-center">
                Total Order
              </TableHead>
              <TableHead className="w-1/4 text-slate-900 font-bold text-lg text-right pr-4">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoiceData.map((row, index) => (
              <TableRow
                key={index}
                className="border-none hover:bg-slate-50 transition-colors"
              >
                <TableCell className="py-5 text-slate-600 font-medium text-base">
                  {row.id}
                </TableCell>
                <TableCell className="py-5">
                  <div className="flex items-center gap-4">
                    {/* Placeholder for Logos */}
                    <div className="w-10 h-10 rounded bg-slate-100 flex items-center justify-center font-bold text-[#2d2c6c] text-xs">
                      {row.logo}
                    </div>
                    <span className="text-slate-700 font-medium text-base">
                      {row.company}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="py-5 text-center text-slate-600 font-medium text-base">
                  {row.orderCount}
                </TableCell>
                <TableCell className="py-5 text-right pr-4">
                  <Button className="bg-[#2d2c6c] hover:bg-[#25245a] text-white rounded-full px-8 py-2 font-medium">
                    Invoice
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination Section */}
      <footer className="flex justify-center items-center gap-6 mt-12 py-4">
        <button className="flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium transition-colors">
          <ChevronLeft className="w-5 h-5" />
          Previous
        </button>

        <div className="flex items-center gap-1">
          <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#2d2c6c] text-white font-medium cursor-pointer">
            1
          </span>
          <span className="w-8 h-8 flex items-center justify-center text-slate-600 hover:text-slate-900 cursor-pointer">
            2
          </span>
          <span className="w-8 h-8 flex items-center justify-center text-slate-600 hover:text-slate-900 cursor-pointer">
            3
          </span>
          <span className="px-2 text-slate-400">............</span>
          <span className="w-8 h-8 flex items-center justify-center text-slate-600 hover:text-slate-900 cursor-pointer">
            100
          </span>
        </div>

        <button className="flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium transition-colors">
          Next
          <ChevronRight className="w-5 h-5" />
        </button>
      </footer>
    </div>
  );
};

export default InvoiceOrderPage;

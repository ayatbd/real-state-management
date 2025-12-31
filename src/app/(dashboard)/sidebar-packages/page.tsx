import {
  ArrowLeft,
  Plus,
  Search,
  Eye,
  Pencil,
  Trash2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { packages } from "@/components/data/ArrayDatas";
import Link from "next/link";

// Using the mock data defined above

export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-white p-8">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <ArrowLeft className="w-6 h-6 cursor-pointer text-slate-700" />
          <Link href="/" className="text-2xl font-bold text-slate-900">
            Packages
          </Link>
        </div>
        <div className="relative w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <Input
            placeholder="Search here..."
            className="pl-10 border-slate-300 rounded-lg focus-visible:ring-indigo-600"
          />
        </div>
      </div>

      {/* Action Button */}
      <div className="mb-6">
        <Button className="cursor-pointer! bg-[#2A206A] hover:bg-[#1e174d] text-white px-6 py-5 rounded-md flex gap-2">
          <Plus className="w-5 h-5" />
          New Package
        </Button>
      </div>

      {/* Table Section */}
      <div className="rounded-md border-none">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent border-none">
              <TableHead className="font-bold text-slate-900">SL No.</TableHead>
              <TableHead className="font-bold text-slate-900">
                Package Name
              </TableHead>
              <TableHead className="font-bold text-slate-900">Price</TableHead>
              <TableHead className="font-bold text-slate-900">
                Description
              </TableHead>
              <TableHead className="font-bold text-slate-900 text-center">
                Details
              </TableHead>
              <TableHead className="font-bold text-slate-900 text-center">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {packages.map((pkg, index) => (
              <TableRow key={index} className="border-none hover:bg-slate-50">
                <TableCell className="py-4 text-slate-600">{pkg.id}</TableCell>
                <TableCell className="py-4 text-slate-600">
                  {pkg.name}
                </TableCell>
                <TableCell className="py-4 text-slate-600">
                  {pkg.price}
                </TableCell>
                <TableCell className="py-4 text-slate-500 max-w-xs truncate">
                  {pkg.description}
                </TableCell>

                {/* Details Icon */}
                <TableCell className="py-4 text-center">
                  <div className="flex justify-center">
                    <Button
                      size="icon"
                      className="bg-[#2A206A] hover:bg-[#1e174d] w-9 h-8"
                    >
                      <Eye className="w-4 h-4 text-white" />
                    </Button>
                  </div>
                </TableCell>

                {/* Action Icons */}
                <TableCell className="py-4">
                  <div className="flex justify-center gap-2">
                    <Button
                      size="icon"
                      className="bg-[#2A206A] hover:bg-[#1e174d] w-9 h-8"
                    >
                      <Pencil className="w-4 h-4 text-white" />
                    </Button>
                    <Button
                      size="icon"
                      className="bg-[#E11D48] hover:bg-[#be123c] w-9 h-8"
                    >
                      <Trash2 className="w-4 h-4 text-white" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination Footer */}
      <div className="mt-10 flex justify-center">
        <Pagination>
          <PaginationContent className="flex items-center gap-1">
            <PaginationItem>
              <PaginationPrevious
                href="#"
                className="border-none hover:bg-transparent text-slate-600 flex items-center gap-1"
              >
                <ChevronLeft className="w-4 h-4" /> Previous
              </PaginationPrevious>
            </PaginationItem>

            <PaginationItem>
              <PaginationLink
                href="#"
                isActive
                className="bg-[#2A206A] text-white rounded-full w-8 h-8 hover:bg-[#2A206A]"
              >
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className="border-none text-slate-600">
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className="border-none text-slate-600">
                3
              </PaginationLink>
            </PaginationItem>

            <PaginationEllipsis className="text-slate-400" />

            <PaginationItem>
              <PaginationLink href="#" className="border-none text-slate-600">
                100
              </PaginationLink>
            </PaginationItem>

            <PaginationItem>
              <PaginationNext
                href="#"
                className="border-none hover:bg-transparent text-slate-600 flex items-center gap-1"
              >
                Next <ChevronRight className="w-4 h-4" />
              </PaginationNext>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}

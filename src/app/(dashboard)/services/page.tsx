"use client";

import { ArrowLeft, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Table, TableBody } from "@/components/ui/table";
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
import AddNewPackage from "@/components/modules/modals/sidebar-packages/AddNewPackage";
import Swal from "sweetalert2";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PhotoTableHeader from "@/components/modules/services/PhotoTableHeader";
import PhotoTableRow from "@/components/modules/services/PhotoTableRow";
import VideoTableHeader from "@/components/modules/services/VideoTableHeader";
import VideoTableRow from "@/components/modules/services/VideoTableRow";
const page = () => {
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  return (
    <div className="min-h-screen bg-white p-8">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <ArrowLeft className="w-6 h-6 cursor-pointer text-slate-700" />
          <Link href="/" className="text-2xl font-bold text-slate-900">
            Services
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
      <div>
        <Tabs defaultValue="account" className="w-full">
          <div className="mb-6 flex items-center justify-between">
            <TabsList className="h-auto p-0 bg-transparent space-x-2">
              <TabsTrigger
                value="account"
                className="bg-primary-violet text-white py-2 px-8 rounded-sm hover:border-primary-violet hover:text-gray-900 hover:bg-transparent hover:shadow-none data-[state=active]:border-primary-violet data-[state=active]:text-gray-900 data-[state=active]:bg-transparent data-[state=active]:shadow-none text-base transition-all ease-in-out duration-300 cursor-pointer"
              >
                Photos
              </TabsTrigger>
              <TabsTrigger
                value="profile"
                className="bg-primary-violet text-white py-2 px-8 rounded-sm hover:border-primary-violet hover:text-gray-900 hover:bg-transparent hover:shadow-none data-[state=active]:border-primary-violet data-[state=active]:text-gray-900 data-[state=active]:bg-transparent data-[state=active]:shadow-none text-base transition-all ease-in-out duration-300 cursor-pointer"
              >
                Videos
              </TabsTrigger>
            </TabsList>
            <AddNewPackage />
          </div>
          {/* Table Section for Photos */}
          <TabsContent value="account" className="w-full">
            {/* Table Section */}
            <div className="rounded-md border-none">
              <Table>
                {/* Table Header */}
                <PhotoTableHeader />
                <TableBody>
                  {packages.map((pkg, index) => (
                    <PhotoTableRow
                      key={index}
                      pkg={pkg}
                      index={index}
                      handleDelete={handleDelete}
                    />
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
                    <PaginationLink
                      href="#"
                      className="border-none text-slate-600"
                    >
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#"
                      className="border-none text-slate-600"
                    >
                      3
                    </PaginationLink>
                  </PaginationItem>

                  <PaginationEllipsis className="text-slate-400" />

                  <PaginationItem>
                    <PaginationLink
                      href="#"
                      className="border-none text-slate-600"
                    >
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
          </TabsContent>
          {/* Table Section for Videos */}
          <TabsContent value="profile" className="w-full">
            {/* Table Section */}
            <div className="rounded-md border-none">
              <Table>
                {/* Table Header */}
                <VideoTableHeader />
                <TableBody>
                  {packages.map((pkg, index) => (
                    <VideoTableRow
                      key={index}
                      pkg={pkg}
                      index={index}
                      handleDelete={handleDelete}
                    />
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
                    <PaginationLink
                      href="#"
                      className="border-none text-slate-600"
                    >
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#"
                      className="border-none text-slate-600"
                    >
                      3
                    </PaginationLink>
                  </PaginationItem>

                  <PaginationEllipsis className="text-slate-400" />

                  <PaginationItem>
                    <PaginationLink
                      href="#"
                      className="border-none text-slate-600"
                    >
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
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default page;

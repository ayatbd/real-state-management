"use client";

import { ArrowLeft, Search, Trash2 } from "lucide-react";

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
import Link from "next/link";
import AddNewPackage from "@/components/modules/modals/sidebar-packages/AddNewPackage";
import Swal from "sweetalert2";
import EditCategory from "@/components/modules/modals/sevice-categories/EditCategory";
import AddCategory from "@/components/modules/modals/sevice-categories/AddCategory";
// Using the mock data defined above
const categories = [
  { id: "01", name: "Photos" },
  { id: "02", name: "Videos" },
  { id: "03", name: "Floorplans" },
  { id: "04", name: "Artist Impressions" },
  { id: "05", name: "Energy Labels" },
  { id: "06", name: "Virtual Tour" },
];
export default function SidebarPackagesPage() {
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
          <Link href="/">
            <ArrowLeft className="w-6 h-6 cursor-pointer text-slate-700" />
          </Link>
          <p className="text-2xl font-bold text-slate-900">Packages</p>
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
        <AddCategory />
      </div>
      <div className="w-full bg-white p-4 rounded-lg">
        <Table className="table-fixed w-full">
          <TableHeader>
            <TableRow className="border-none hover:bg-transparent">
              {/* Split into 3 equal parts using w-1/3 */}
              <TableHead className="w-1/3 text-slate-900 font-bold text-lg">
                SL No.
              </TableHead>
              <TableHead className="w-1/3 text-slate-900 font-bold text-lg">
                Category Name
              </TableHead>
              <TableHead className="w-1/3 text-right text-slate-900 font-bold text-lg pr-8">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categories.map((item) => (
              <TableRow key={item.id} className="border-none hover:bg-slate-50">
                {/* Rows will inherit the width defined in the header because of table-fixed */}
                <TableCell className="py-6 text-slate-700 font-medium">
                  {item.id}
                </TableCell>
                <TableCell className="py-6 text-slate-700 font-medium">
                  {item.name}
                </TableCell>
                <TableCell className="py-6 text-right">
                  <div className="flex justify-end gap-2 pr-4">
                    <EditCategory />
                    <Button
                      onClick={handleDelete}
                      size="icon"
                      variant="destructive"
                      className="bg-[#e11d48] hover:bg-red-700 w-9 h-9"
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
    </div>
  );
}

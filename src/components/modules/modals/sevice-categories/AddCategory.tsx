import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Pencil, Plus } from "lucide-react";

const AddCategory = () => {
  return (
    <Dialog>
      {/* 1. The Trigger Button */}
      <DialogTrigger asChild>
        <Button className="cursor-pointer! bg-[#2A206A] hover:bg-[#1e174d] text-white px-6 py-5 rounded-md flex gap-2">
          <Plus className="w-5 h-5" />
          New Category
        </Button>
      </DialogTrigger>

      {/* 2. The Dialog Content */}
      <DialogContent className="max-w-[95vw] md:max-w-2xl p-0 overflow-hidden border-none gap-0">
        {/* Custom Header to match the image exactly */}
        <DialogHeader className="p-6 pb-2 relative">
          <DialogTitle className="text-xl font-semibold text-center text-slate-800">
            Edit Category
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
              Category Name
            </Label>
            <Input
              id="package-name"
              placeholder="Enter category name"
              className="h-11 border-slate-300 focus-visible:ring-[#2d2c6c]"
            />
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
};

export default AddCategory;

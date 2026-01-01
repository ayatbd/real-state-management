import React from "react";
import { Eye, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";

// interface PackageDetailsModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

const ViewDetails = () => {
  const services = [
    "Twilight Photos",
    "3D Matterport",
    "Drone Photo",
    "Floor plan",
  ];

  const photos = [
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
  ];
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon" className="bg-[#2A206A] hover:bg-[#1e174d] w-9 h-8">
          <Eye className="w-4 h-4 text-white" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl p-8 bg-white border-none rounded-2xl">
        {/* Custom Header */}
        <DialogHeader className="relative">
          <DialogTitle className="text-2xl font-semibold text-center text-[#2d3748] mt-2">
            Package Details
          </DialogTitle>
          <DialogClose className="absolute right-0 top-0 opacity-70 hover:opacity-100 transition-opacity">
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogHeader>

        <div className="mt-8 space-y-6 text-[#4a5568]">
          {/* Package Name & Price */}
          <div className="flex justify-between items-center text-lg">
            <span className="font-semibold text-[#2d3748]">Package Name:</span>
            <span className="text-[#4a5568]">Premium Packages</span>
          </div>

          <div className="flex justify-between items-center text-lg">
            <span className="font-semibold text-[#2d3748]">Price:</span>
            <span className="text-[#4a5568]">$1050</span>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-[#2d3748]">
              Description:
            </h3>
            <p className="leading-relaxed text-[#4a5568]">
              Our most popular package including our most popular service and
              best-selling package featuring our top-rated service.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-[#2d3748]">
              Services/Products:
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              {services.map((service, index) => (
                <li key={index} className="text-[#4a5568]">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Photos */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#2d3748]">Photos</h3>
            <div className="grid grid-cols-4 gap-3">
              {photos.map((src, index) => (
                <div
                  key={index}
                  className="aspect-square rounded-xl overflow-hidden border border-slate-200 shadow-sm"
                >
                  <img
                    src={src}
                    alt={`Real estate sample ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ViewDetails;

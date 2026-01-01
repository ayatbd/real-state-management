import { X, Search, Camera, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

const AddNewPackage = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="cursor-pointer! bg-[#2A206A] hover:bg-[#1e174d] text-white px-6 py-5 rounded-md flex gap-2">
          <Plus className="w-5 h-5" />
          New Package
        </Button>
      </DialogTrigger>
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-sm border relative">
        {/* Header */}
        <div className="flex justify-center items-center mb-8">
          <h1 className="text-xl font-semibold text-slate-800">Edit</h1>
          <button className="absolute right-6 top-6 text-slate-400 hover:text-slate-600 transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-6">
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
              className="h-12 border-slate-300 focus-visible:ring-indigo-500"
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
              className="h-12 border-slate-300 focus-visible:ring-indigo-500"
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
              className="min-h-[120px] border-slate-300 focus-visible:ring-indigo-500 resize-none"
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
                  className="pl-10 h-11 border-slate-300"
                />
              </div>
              <Button className="bg-[#2d2c6c] hover:bg-[#25245a] h-11 px-8 rounded-md">
                Add
              </Button>
            </div>

            {/* Service List Box */}
            <div className="border border-slate-300 rounded-md p-4 bg-white">
              <ul className="space-y-1 list-disc list-inside text-sm text-slate-700">
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
              {/* Image 1 */}
              <div className="aspect-square rounded-lg overflow-hidden border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=300"
                  alt="House exterior"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Image 2 */}
              <div className="aspect-square rounded-lg overflow-hidden border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1600607687940-477a63bd39d8?auto=format&fit=crop&q=80&w=300"
                  alt="Modern pool house"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Image 3 */}
              <div className="aspect-square rounded-lg overflow-hidden border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=300"
                  alt="Cabin style home"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Upload Placeholder */}
              <button className="aspect-square rounded-lg border-2 border-dashed border-slate-300 flex flex-col items-center justify-center hover:bg-slate-50 transition-colors group">
                <Camera className="w-6 h-6 text-slate-400 group-hover:text-slate-600" />
              </button>
            </div>
          </div>

          {/* Footer Buttons */}
          <div className="flex gap-4 pt-4">
            <Button
              variant="outline"
              className="flex-1 h-12 border-slate-200 text-slate-600 hover:bg-slate-50 font-medium"
            >
              Cancel
            </Button>
            <Button className="flex-1 h-12 bg-[#2d2c6c] hover:bg-[#25245a] font-medium">
              Update
            </Button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default AddNewPackage;

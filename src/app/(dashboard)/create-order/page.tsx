"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";

const companiesData = [
  {
    id: 1,
    name: "Summit Realty Group",
    logo: "/images/dashboard/content/create-order/image1.png",
  },
  {
    id: 2,
    name: "Golden Key Properties",
    logo: "/images/dashboard/content/create-order/image2.png",
  },
  {
    id: 3,
    name: "Pinnacle Estates Co.",
    logo: "/images/dashboard/content/create-order/image3.png",
  },
  {
    id: 4,
    name: "Urban Oasis Realty",
    logo: "/images/dashboard/content/create-order/image4.png",
  },
  {
    id: 5,
    name: "Horizon Land Ventures",
    logo: "/images/dashboard/content/create-order/image5.png",
  },
  {
    id: 6,
    name: "True North Homes",
    logo: "/images/dashboard/content/create-order/image6.png",
  },
  {
    id: 7,
    name: "Evergreen Property Partners",
    logo: "/images/dashboard/content/create-order/image7.png",
  },
  {
    id: 8,
    name: "Cornerstone Realty Solutions",
    logo: "/images/dashboard/content/create-order/image8.png",
  },
  {
    id: 9,
    name: "Skyline Real Estate Group",
    logo: "/images/dashboard/content/create-order/image9.png",
  }, // Approximation for the star logo
  {
    id: 10,
    name: "Blue Ridge Realty Co.",
    logo: "/images/dashboard/content/create-order/image10.png",
  },
  {
    id: 11,
    name: "Landmark Living Co.",
    logo: "/images/dashboard/content/create-order/image11.png",
  },
];
const CreateOrderPage = () => {
  return (
    <div className="grid grid-cols-2 items-center">
      <div className="text-center">
        <h1 className="text-[28px] text-primary-violet font-semibold">
          Create A New Order
        </h1>
        <p className="text-[22px] text-gray-700">Select a client/company</p>
      </div>
      <div className="min-h-screen flex items-center justify-center p-4 font-sans">
        <Card className="w-full max-w-md shadow-lg border-gray-100 bg-white">
          <CardContent className="p-6 pt-8">
            <div className="flex flex-col gap-6">
              {companiesData.map((company) => {
                return (
                  <div
                    key={company.id}
                    className="flex items-center gap-4 group cursor-pointer"
                  >
                    {/* Custom Checkbox Style to match image */}
                    <div className="relative flex items-center justify-center">
                      <Checkbox
                        className={`h-6 w-6 border-2 cursor-pointer border-indigo-900 data-[state=checked]:bg-indigo-900 data-[state=checked]:text-white transition-all
                        }`}
                      />
                    </div>

                    {/* Logo */}
                    <div className="shrink-0 flex items-center justify-center overflow-hidden">
                      <Image
                        width={8}
                        height={8}
                        src={company.logo}
                        alt={`${company.name} logo`}
                        className="object-contain h-8 w-8 "
                        // Fallback for missing images
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          e.currentTarget.parentElement!.style.backgroundColor =
                            "#f3f4f6";
                          e.currentTarget.parentElement!.innerText =
                            company.name.charAt(0);
                        }}
                      />
                    </div>

                    {/* Company Name */}
                    <span className="text-lg font-medium text-gray-800 leading-none pt-1">
                      {company.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </CardContent>

          <CardFooter className="p-6 pt-2">
            <Button className="w-full h-12 text-lg font-normal bg-indigo-900 hover:bg-indigo-800 text-white rounded-md shadow-sm transition-colors">
              Continue
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default CreateOrderPage;

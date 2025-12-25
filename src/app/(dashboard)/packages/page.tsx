"use client";

import React from "react";
import { Search, ChevronLeft, ArrowRight, ArrowLeft } from "lucide-react";
import Image from "next/image";

// --- Mock Data ---

type Package = {
  id: string;
  title: string;
  description: string;
  features: string[];
  price: number;
  image: string;
  category: "popular" | "regular";
};

const popularPackages: Package[] = [
  {
    id: "p1",
    title: "Luxury Packages",
    description: "Our most popular package including our most popular service",
    features: ["Photos", "Videos", "Floor Plan"],
    price: 25,
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1000&auto=format&fit=crop",
    category: "popular",
  },
  {
    id: "p2",
    title: "Premium Packages",
    description: "Our most popular package including our most popular service",
    features: ["Photos", "Cinematic Video", "Floor Plan"],
    price: 45,
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1000&auto=format&fit=crop",
    category: "popular",
  },
  {
    id: "p3",
    title: "Luxury Packages",
    description: "Our most popular package including our most popular service",
    features: ["Photos", "Highlight Video", "Cinematic Video"],
    price: 50,
    image:
      "https://images.unsplash.com/photo-1600596542815-2495db98dada?q=80&w=1000&auto=format&fit=crop",
    category: "popular",
  },
  {
    id: "p4",
    title: "Premium Packages",
    description: "Our most popular package including our most popular service",
    features: ["Photos", "Videos", "Cinematic Video"],
    price: 35,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop",
    category: "popular",
  },
];

const regularPackages: Package[] = [
  {
    id: "r1",
    title: "Luxury Packages",
    description: "Our most popular package including our most popular service",
    features: ["Photos", "Videos", "Floor Plan"],
    price: 25,
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop",
    category: "regular",
  },
  {
    id: "r2",
    title: "Premium Packages",
    description: "Our most popular package including our most popular service",
    features: ["Photos", "Videos", "Floor Plan"],
    price: 25,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
    category: "regular",
  },
  {
    id: "r3",
    title: "Luxury Packages",
    description: "Our most popular package including our most popular service",
    features: ["Photos", "Videos", "Floor Plan"],
    price: 25,
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1000&auto=format&fit=crop",
    category: "regular",
  },
  {
    id: "r4",
    title: "Premium Packages",
    description: "Our most popular package including our most popular service",
    features: ["Photos", "Videos", "Floor Plan"],
    price: 25,
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1000&auto=format&fit=crop",
    category: "regular",
  },
];

// --- Components ---

const Stepper = () => {
  const steps = ["1. Services", "2. Address", "3. Contact Info", "4. Confirm"];

  return (
    <div className="flex justify-center items-center gap-2 mb-12 text-sm md:text-base">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div
            className={`px-6 py-2 rounded-full border ${
              index === 0
                ? "bg-pink-100 border-pink-500 text-pink-900 font-medium"
                : "bg-white border-pink-200 border-dashed text-gray-500"
            }`}
          >
            {step}
          </div>
          {index < steps.length - 1 && (
            <div className="flex space-x-1">
              <div className="w-1 h-1 bg-pink-200 rounded-full"></div>
              <div className="w-1 h-1 bg-pink-200 rounded-full"></div>
              <div className="w-1 h-1 bg-pink-200 rounded-full"></div>
              <div className="w-1 h-1 bg-pink-200 rounded-full"></div>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

const FilterBar = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
      <div className="flex gap-3">
        <button className="px-6 py-2 rounded-full bg-[#1e1b4b] text-white font-medium shadow-md">
          Packages
        </button>
        <button className="px-6 py-2 rounded-full bg-white border border-[#1e1b4b] text-[#1e1b4b] font-medium hover:bg-slate-50">
          Photos
        </button>
        <button className="px-6 py-2 rounded-full bg-white border border-[#1e1b4b] text-[#1e1b4b] font-medium hover:bg-slate-50">
          Videos
        </button>
      </div>

      <div className="relative w-full md:w-80">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
        <input
          type="text"
          placeholder="Search here..."
          className="w-full pl-10 pr-4 py-2 border border-[#1e1b4b] rounded-md focus:outline-none focus:ring-1 focus:ring-[#1e1b4b]"
        />
      </div>
    </div>
  );
};

const PackageCard = ({ data }: { data: Package }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow">
      {/* Image Section */}
      <div className="relative h-48 w-full group">
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover"
        />
        {/* Carousel Dots Simulation */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
          <div className="w-1.5 h-1.5 bg-white/50 rounded-full"></div>
          <div className="w-1.5 h-1.5 bg-white/50 rounded-full"></div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col grow">
        <h3 className="text-lg font-bold text-gray-900 mb-2">{data.title}</h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {data.description}
        </p>

        {/* Feature List */}
        <ul className="space-y-2 mb-6 grow">
          {data.features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-sm text-gray-800">
              <span className="w-1 h-1 bg-gray-800 rounded-full mr-2"></span>
              {feature}
            </li>
          ))}
        </ul>

        {/* Footer Section */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
          <div className="text-pink-700 font-bold text-lg">
            Price: ${data.price}
          </div>
          <button className="bg-[#1e1b4b] text-white px-8 py-2 rounded text-sm font-medium hover:bg-[#2d2a6e] transition-colors">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Main Page ---

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-8 lg:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Stepper Navigation */}
        <Stepper />

        {/* Filter and Search */}
        <FilterBar />

        {/* Popular Packages Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Popular Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularPackages.map((pkg) => (
              <PackageCard key={pkg.id} data={pkg} />
            ))}
          </div>
        </section>

        {/* Regular Packages Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Regular Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regularPackages.map((pkg) => (
              <PackageCard key={pkg.id} data={pkg} />
            ))}
          </div>
        </section>

        {/* Pagination Controls */}
        <div className="flex justify-center gap-4 mt-8">
          <button className="flex items-center justify-center min-w-[135px] py-2 border border-[#1e1b4b] text-[#1e1b4b] rounded hover:bg-slate-50 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous
          </button>
          <button className="flex items-center justify-center min-w-[135px] py-2 border border-[#1e1b4b] text-[#1e1b4b] rounded hover:bg-slate-50 transition-colors">
            Next
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}

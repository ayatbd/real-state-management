"use client";

import TaskDetailsBottom from "@/components/modules/task-management/TaskDetailsBottom";
import { ArrowLeft, MoreVertical } from "lucide-react";
import Image from "next/image";

// --- Components ---

const SectionHeader = ({ title }: { title: string }) => (
  <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
);

const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2 mb-3">
    <span className="text-gray-900 font-medium min-w-[140px]">{label}:</span>
    <span className="text-gray-600">{value}</span>
  </div>
);

const UserProfile = ({
  name,
  role,
  image,
}: {
  name: string;
  role?: string;
  image: string;
}) => (
  <div className="flex items-center gap-3 mt-2">
    <div className="relative w-10 h-10 rounded-full overflow-hidden">
      <Image src={image} alt={name} fill className="object-cover" />
    </div>
    <div>
      <p className="font-medium text-gray-900">{name}</p>
      {role && <p className="text-sm text-gray-500">{role}</p>}
    </div>
  </div>
);

export default function OrderDetailsPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-8 font-sans">
      {/* --- Header --- */}
      <header className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <button className="p-2 -ml-2 hover:bg-gray-200 rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6 text-[#1e1b4b]" />
          </button>
          <h1 className="text-2xl font-bold text-[#1e1b4b]">Order Details</h1>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full font-medium hover:bg-white transition-colors text-gray-700">
          Actions
          <MoreVertical className="w-4 h-4" />
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* --- Left Column (Main Details) --- */}
        <div className="lg:col-span-2 space-y-8">
          {/* Client & Price Card */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 flex justify-between items-start shadow-sm">
            <div>
              <p className="text-lg font-medium text-gray-900 mb-4">
                Client Name
              </p>
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10">
                  {/* Placeholder for Client Logo */}
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Gucci_logo.svg/1200px-Gucci_logo.svg.png"
                    alt="Client Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-lg text-gray-700">Louis Vuitton</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-medium text-gray-900 mb-4">
                Total Price
              </p>
              <p className="text-2xl font-bold text-[#1e1b4b]">$450</p>
            </div>
          </div>

          {/* Appointment Card */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col sm:flex-row justify-between items-center gap-4 shadow-sm">
            <span className="text-xl font-medium text-gray-900">
              Appointment
            </span>
            <button className="px-6 py-2.5 border border-orange-400 text-orange-500 rounded font-medium hover:bg-orange-50 transition-colors w-full sm:w-auto">
              Schedule An Appointment
            </button>
          </div>

          {/* Description */}
          <div>
            <SectionHeader title="Description" />
            <p className="text-gray-600 leading-relaxed">
              Please call the property owner to make an appointment, take some
              picture and videos of the property location. Please call the
              property owner to make an appointment, take some picture and
              videos of the property location.
            </p>
          </div>

          {/* Property Information */}
          <div>
            <SectionHeader title="Property information" />
            <div className="space-y-1">
              <InfoRow label="Zip Code" value="3535" />
              <InfoRow label="Street Number" value="12/4" />
              <InfoRow
                label="Street Address"
                value="1901 Thornridge Cir. Shiloh, Hawaii 81063"
              />
              <InfoRow label="City" value="Hawaii" />
              <InfoRow label="State" value="California" />
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2 mb-3">
                <span className="text-gray-900 font-medium min-w-[140px]">
                  Pickup keys at real state office?
                </span>
              </div>
              <ul className="list-disc list-inside ml-2 text-gray-600">
                <li>Yes</li>
              </ul>
            </div>
          </div>

          {/* Order Placed By */}
          <div className="flex items-center gap-2 pt-4">
            <span className="text-xl font-bold text-gray-900">
              Order Placed By:
            </span>
            <UserProfile
              name="Robert Smith"
              image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
            />
          </div>
        </div>

        {/* --- Right Column (Map & Owner Info) --- */}
        <div className="lg:col-span-1 space-y-8">
          {/* Map Section */}
          <div className="rounded-xl overflow-hidden border border-gray-200 h-64 relative shadow-sm">
            <Image
              src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=1000&auto=format&fit=crop"
              alt="Map Location"
              fill
              className="object-cover"
            />
            {/* Map Overlay Badge simulation if needed, or just static image */}
          </div>

          {/* Property Owner Section */}
          <div>
            <SectionHeader title="Property owner" />

            <div className="mb-6">
              <p className="font-bold text-gray-800 mb-2">Owner Details-1</p>
              <div className="space-y-1 text-sm">
                <p>
                  <span className="font-medium text-gray-900">
                    Name Property Owner:
                  </span>{" "}
                  <span className="text-gray-600">Robert Smith</span>
                </p>
                <p>
                  <span className="font-medium text-gray-900">Email:</span>{" "}
                  <span className="text-gray-600">smith24@gmail.com</span>
                </p>
                <p>
                  <span className="font-medium text-gray-900">
                    Phone Number:
                  </span>{" "}
                  <span className="text-gray-600">+456636646004</span>
                </p>
              </div>
            </div>

            <div className="mb-6">
              <p className="font-bold text-gray-800 mb-2">Owner Details-2</p>
              <div className="space-y-1 text-sm">
                <p>
                  <span className="font-medium text-gray-900">
                    Name Property Owner:
                  </span>{" "}
                  <span className="text-gray-600">Robert Smith</span>
                </p>
                <p>
                  <span className="font-medium text-gray-900">Email:</span>{" "}
                  <span className="text-gray-600">smith24@gmail.com</span>
                </p>
                <p>
                  <span className="font-medium text-gray-900">
                    Phone Number:
                  </span>{" "}
                  <span className="text-gray-600">+456636646004</span>
                </p>
              </div>
            </div>
          </div>

          {/* Real Estate Agent */}
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Real State Agent</h4>
            <UserProfile
              name="Ronald Richards"
              image="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop"
            />
          </div>
        </div>
      </div>
      <TaskDetailsBottom />
    </div>
  );
}

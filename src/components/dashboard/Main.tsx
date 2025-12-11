"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Eye, CheckCircle2, FileClock, MoreHorizontal } from "lucide-react";

// --- Mock Data ---

const chartData = [
  { name: "Jan", total: 850 },
  { name: "Feb", total: 380 },
  { name: "Mar", total: 690 },
  { name: "Apr", total: 480 },
  { name: "May", total: 730 },
  { name: "Jun", total: 310 },
  { name: "Jul", total: 920 },
  { name: "Aug", total: 600 },
  { name: "Sep", total: 310 },
  { name: "Oct", total: 820 },
  { name: "Nov", total: 600 },
  { name: "Dec", total: 650 },
];

const deliveryData = [
  {
    id: "#12333",
    address: "Royal Ln. Mesa, New Jersey",
    services: 2,
    appointment: "12/04/24 at 3:00 pm",
    status: "Submitted",
  },
  {
    id: "#12333", // ID from image repeated
    address: "W. Gray Utica, Pennsylvania",
    services: 6,
    appointment: "08/04/24 at 5:00 pm",
    status: "Submitted",
  },
  {
    id: "#12333",
    address: "Ash San Jose, South Dakota",
    services: 3,
    appointment: "02/04/24 at 4:00 pm",
    status: "Submitted",
  },
];

const messages = [
  {
    name: "Jacob Jones",
    subject: "Request For Information",
    preview: "I hope you are doing well...",
    avatar: "https://i.pravatar.cc/150?u=jacob",
  },
  {
    name: "Dianne Russell",
    subject: "Invitation For Meeting",
    preview: "Good Morning, I hope this e...",
    avatar: "https://i.pravatar.cc/150?u=dianne",
  },
  {
    name: "Robert Fox",
    subject: "Request for feedback",
    preview: "Help us to improve our servi...",
    avatar: "https://i.pravatar.cc/150?u=robert",
  },
  {
    name: "Esther Howard",
    subject: "Reschedule the meeting",
    preview: "Good mourning, I hope y...",
    avatar: "https://i.pravatar.cc/150?u=esther",
  },
];

const recentOrders = [
  {
    id: "#12333",
    company: "Louis Vuitton",
    logo: "LV",
    logoColor: "text-green-600",
    address: "Royal Ln. Mesa, New Jersey",
    services: 2,
    status: "Submitted",
  },
  {
    id: "#12333",
    company: "Bank of America",
    logo: "BA",
    logoColor: "text-black",
    address: "W. Gray Utica, Pennsylvania",
    services: 6,
    status: "Submitted",
  },
  {
    id: "#12333",
    company: "Sony",
    logo: "S",
    logoColor: "text-blue-500",
    address: "Ash San Jose, South Dakota",
    services: 3,
    status: "Submitted",
  },
];

// --- Components ---

const TaskCircle = ({
  count,
  label,
  colorClass,
}: {
  count: number;
  label: string;
  colorClass: string;
}) => (
  <div className="flex flex-col items-center gap-2">
    <div
      className={`flex h-12 w-12 items-center justify-center rounded-full text-white font-bold text-lg ${colorClass}`}
    >
      {count}
    </div>
    <span className="text-gray-600 text-sm font-medium">{label}</span>
  </div>
);

const StatusBadge = ({ status }: { status: string }) => (
  <Badge
    variant="outline"
    className="border-pink-200 bg-pink-50 text-pink-600 hover:bg-pink-100 px-4 py-1 font-normal rounded-full"
  >
    {status}
  </Badge>
);

export default function Main() {
  return (
    <div className="min-h-screen bg-gray-50/50 p-6 font-sans">
      <div className="mx-auto max-w-[1400px] grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {/* --- Top Row: Welcome & Tasks (Spans 2 cols on XL) --- */}
        <Card className="col-span-1 md:col-span-2 xl:col-span-2 border-none shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-8">
              <Avatar className="h-16 w-16 border-2 border-white shadow-sm">
                <AvatarImage src="https://i.pravatar.cc/150?u=mainUser" />
                <AvatarFallback>RB</AvatarFallback>
              </Avatar>
              <h1 className="text-2xl font-bold text-gray-800">
                Good Morning, Robert!
              </h1>
            </div>

            <div className="mb-2 text-lg font-semibold text-gray-700">
              Assign Tasks:
            </div>

            <div className="flex flex-wrap gap-8 md:gap-24 pt-4">
              <TaskCircle
                count={25}
                label="Total Tasks"
                colorClass="bg-orange-400"
              />
              <TaskCircle
                count={15}
                label="Production Tasks"
                colorClass="bg-orange-400"
              />
              <TaskCircle
                count={5}
                label="Other Tasks"
                colorClass="bg-orange-400"
              />
            </div>
          </CardContent>
        </Card>

        {/* --- Top Row: Orders Today --- */}
        <Card className="col-span-1 border-none shadow-sm flex flex-col justify-center items-center py-6">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium text-gray-700">
              Orders Today
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <div className="mb-4 rounded-full bg-blue-100 p-3">
              <CheckCircle2 className="h-8 w-8 text-blue-500" />
            </div>
            <span className="text-3xl font-bold text-gray-900">82,902</span>
          </CardContent>
        </Card>

        {/* --- Top Row: Pending Orders --- */}
        <Card className="col-span-1 border-none shadow-sm flex flex-col justify-center items-center py-6">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium text-gray-700">
              Pending Orders
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <div className="mb-4 rounded-full bg-indigo-100 p-3">
              <FileClock className="h-8 w-8 text-indigo-900" />
            </div>
            <span className="text-3xl font-bold text-gray-900">45,782</span>
          </CardContent>
        </Card>

        {/* --- Middle Row: Deliver Today (Spans 2 cols) --- */}
        <Card className="col-span-1 md:col-span-2 border-none shadow-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-lg font-bold text-gray-800">
              Need to Deliver Today
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent border-none">
                  <TableHead className="font-bold text-gray-900">
                    Order ID
                  </TableHead>
                  <TableHead className="font-bold text-gray-900">
                    Address
                  </TableHead>
                  <TableHead className="font-bold text-gray-900 text-center">
                    Services
                  </TableHead>
                  <TableHead className="font-bold text-gray-900">
                    Appointments
                  </TableHead>
                  <TableHead className="font-bold text-gray-900 text-center">
                    Status
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {deliveryData.map((item, index) => (
                  <TableRow
                    key={index}
                    className="border-gray-100 hover:bg-gray-50/50"
                  >
                    <TableCell className="font-medium text-gray-600">
                      {item.id}
                    </TableCell>
                    <TableCell className="text-gray-600">
                      {item.address}
                    </TableCell>
                    <TableCell className="text-center text-gray-600">
                      {item.services}
                    </TableCell>
                    <TableCell className="text-gray-600">
                      {item.appointment}
                    </TableCell>
                    <TableCell className="text-center">
                      <StatusBadge status={item.status} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* --- Middle Row: Order Trends Chart (Spans 2 cols) --- */}
        <Card className="col-span-1 md:col-span-2 border-none shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-bold text-gray-800">
              Order Trends
            </CardTitle>
            <Select defaultValue="2024">
              <SelectTrigger className="w-[100px] h-8 text-xs">
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
              </SelectContent>
            </Select>
          </CardHeader>
          <CardContent className="h-[300px] w-full pl-0">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} barSize={12}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#E5E7EB"
                />
                <XAxis
                  dataKey="name"
                  stroke="#888888"
                  fontSize={10}
                  tickLine={false}
                  axisLine={false}
                  dy={10}
                />
                <YAxis
                  stroke="#888888"
                  fontSize={10}
                  tickLine={false}
                  axisLine={false}
                  tickCount={6}
                />
                <Tooltip
                  cursor={{ fill: "#f3f4f6" }}
                  contentStyle={{
                    borderRadius: "8px",
                    border: "none",
                    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                  }}
                />
                <Bar dataKey="total" fill="#2e2a78" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* --- Bottom Row: Unread Messages (Spans 2 cols) --- */}
        <Card className="col-span-1 md:col-span-2 border-none shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-bold text-gray-800">
              Unread Messages
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {messages.map((msg, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={msg.avatar} />
                  <AvatarFallback>{msg.name.charAt(0)}</AvatarFallback>
                </Avatar>

                <div className="flex-1 overflow-hidden">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <span className="font-medium text-gray-700 whitespace-nowrap">
                      {msg.name}
                    </span>
                    <span className="hidden sm:inline text-gray-300">|</span>
                    <span className="font-semibold text-gray-800 text-sm truncate">
                      {msg.subject}{" "}
                      <span className="font-normal text-gray-500">
                        - {msg.preview}
                      </span>
                    </span>
                  </div>
                </div>

                <Button
                  size="icon"
                  className="h-8 w-8 rounded-md bg-indigo-900 hover:bg-indigo-800 shrink-0"
                >
                  <Eye className="h-4 w-4 text-white" />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* --- Bottom Row: Recent Order (Spans 2 cols) --- */}
        <Card className="col-span-1 md:col-span-2 border-none shadow-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-lg font-bold text-gray-800">
              Recent Order
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent border-none">
                  <TableHead className="font-bold text-gray-900 w-[100px]">
                    Order ID
                  </TableHead>
                  <TableHead className="font-bold text-gray-900">
                    Company/Client
                  </TableHead>
                  <TableHead className="font-bold text-gray-900">
                    Address
                  </TableHead>
                  <TableHead className="font-bold text-gray-900 text-center">
                    Services
                  </TableHead>
                  <TableHead className="font-bold text-gray-900 text-center">
                    Status
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentOrders.map((order, index) => (
                  <TableRow
                    key={index}
                    className="border-gray-100 hover:bg-gray-50/50"
                  >
                    <TableCell className="font-medium text-gray-600 align-middle">
                      {order.id}
                    </TableCell>
                    <TableCell className="align-middle">
                      <div className="flex items-center gap-3">
                        {/* Mock Logo Placeholder */}
                        <div className="h-8 w-8 flex items-center justify-center rounded bg-gray-100">
                          <span
                            className={`font-bold text-xs ${order.logoColor}`}
                          >
                            {order.logo}
                          </span>
                        </div>
                        <span className="text-gray-700">{order.company}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-gray-600 align-middle">
                      {order.address}
                    </TableCell>
                    <TableCell className="text-center text-gray-600 align-middle">
                      {order.services}
                    </TableCell>
                    <TableCell className="text-center align-middle">
                      <StatusBadge status={order.status} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

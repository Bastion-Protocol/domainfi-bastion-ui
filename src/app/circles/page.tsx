"use client";

import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Users,
  Plus,
  TrendingUp,
  DollarSign,
  Calendar,
  User,
} from "lucide-react";
import { useAccount } from "wagmi";

const myCircles = [
  {
    id: 1,
    name: "Alpha Domains",
    description:
      "Premium domain investment circle focusing on .eth and .com domains",
    members: 24,
    totalInvested: "$125,000",
    monthlyReturn: "12.5%",
    role: "Admin",
    status: "active",
    created: "2024-01-15",
  },
  {
    id: 2,
    name: "DeFi Domains",
    description: "Investing in DeFi-related domain names and Web3 brands",
    members: 18,
    totalInvested: "$89,000",
    monthlyReturn: "8.3%",
    role: "Member",
    status: "active",
    created: "2024-02-20",
  },
  {
    id: 3,
    name: "Tech Startups",
    description: "Early-stage domain investments for emerging tech companies",
    members: 31,
    totalInvested: "$67,500",
    monthlyReturn: "15.7%",
    role: "Member",
    status: "active",
    created: "2024-03-05",
  },
];

const availableCircles = [
  {
    id: 4,
    name: "Crypto Gaming",
    description: "Gaming and metaverse domain investments",
    members: 45,
    totalInvested: "$198,000",
    monthlyReturn: "18.2%",
    minimumInvestment: "$5,000",
    openSpots: 5,
  },
  {
    id: 5,
    name: "Enterprise Domains",
    description: "High-value enterprise and corporate domain portfolio",
    members: 12,
    totalInvested: "$456,000",
    monthlyReturn: "6.8%",
    minimumInvestment: "$25,000",
    openSpots: 3,
  },
  {
    id: 6,
    name: "AI & Blockchain",
    description: "Artificial intelligence and blockchain domain investments",
    members: 28,
    totalInvested: "$134,000",
    monthlyReturn: "14.1%",
    minimumInvestment: "$10,000",
    openSpots: 7,
  },
];

export default function CirclesPage() {
  const { isConnected } = useAccount();

  if (!isConnected) {
    return (
      <Layout>
        <div className="flex-1 overflow-hidden space-y-10 p-6 md:p-12 bg-gradient-to-b from-black via-gray-950 to-gray-900 min-h-screen text-white  pt-6">
          <div className="flex items-center justify-center  flex-col  md:flex-row md:items-center md:justify-between">

          <div className="max-w-[1200px]">
            <h2 className="text-3xl  sm:text-4xl md:text-5xl  lg:text-5xl xl:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              Investment Circles
            </h2>
            <p className="text-gray-400 mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl">
              Connect your wallet to view and join investment circles.
            </p>
            </div>
          <div className="max-w-[650px] h-auto w-full">
            <video
              src="/hero.mp4"
              className="w-full  h-full"
              autoPlay
              loop
              muted
              playsInline
              />
          </div>
              </div>

          <Card className="col-span-full  hover:scale-105  bg-black/70 backdrop-blur-md border border-red-500/30   hover:shadow-red-500/50 hover:shadow-2xl  transform transition-transform duration-300 shadow-xl rounded-2xl p-6 pl-1 pr-1 mt-10">
            <CardHeader className="pb-5 ">
              <CardTitle className=" text-xl  sm:text-2xl md:text-2xl lg:text-3xl   font-extrabold tracking-tight bg-gradient-to-r from-red-400 to-red-900 bg-clip-text text-transparent ">
                 Investment Circles
              </CardTitle>
              <CardDescription className="text-gray-300 text-base sm:text-xl md:text-xl lg:text-xl">
                Collaborate with other investors to build diverse domain
                portfolios and share returns.
              </CardDescription>
            </CardHeader>
            </Card>
            <Card className="col-span-full  hover:scale-105  bg-black/70 backdrop-blur-md border border-red-500/30   hover:shadow-red-500/50 hover:shadow-2xl  transform transition-transform duration-300 shadow-xl rounded-2xl p-6 pl-1 pr-1 mt-10">
            <CardContent>

              <div className="space-y-4">
                <h3 className=" text-xl  sm:text-2xl md:text-2xl lg:text-3xl   font-extrabold tracking-tight bg-gradient-to-r from-red-400 to-red-900 bg-clip-text text-transparent ">
                  What are Investment Circles?
                </h3>
                <ul className="space-y-2 text-base text-gray-300">
                  <li>
                    • Pool resources with other investors to access premium
                    domains
                  </li>
                  <li>• Share expertise and research with circle members</li>
                  <li>• Diversify risk across multiple domain investments</li>
                  <li>
                    • Benefit from collective decision-making and due diligence
                  </li>
                  <li>• Transparent profit sharing based on contribution</li>
                </ul>
                <Button className="mt-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:scale-105 transition-transform">
                  Connect Wallet to Continue
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="flex-1  overflow-hidden space-y-6 p-4 md:p-8 pt-6 ">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
          <div>
            <h2 className="text-3xl  sm:text-4xl md:text-4xl  lg:text-4xl xl:text-5xl font-bold tracking-tight bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              Investment Circles
            </h2>
            <p className="text-gray-400 mt-1 text-base sm:text-lg md:text-xl lg:text-xl">
              Manage your circles and discover new investment opportunities.
            </p>
          </div>
          <Button className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:scale-105 transition-transform flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Create Circle
          </Button>
        </div>

        {/* My Circles */}

        <div className="space-y-4 mt-12 items-center">
          <Card className="text-center justify-center py-3 bg-gray-800/30 border-2 border-red-500">
            <h3 className="text-3xl  sm:text-4xl md:text-3xl  lg:text-3xl xl:text-3xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent inline">
              My Circles
            </h3>
          </Card>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-7">
            {myCircles.map((circle) => (
              <Card
                key={circle.id}
                className="cursor-pointer bg-gray-800/30 backdrop-blur-md border  hover:shadow-red-500 hover:shadow-4xl border-gray-700/50 hover:scale-105 transition-transform shadow-lg "
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="bg-gradient-to-r from-red-200 to-red-700 bg-clip-text text-transparent text-lg">
                      {circle.name}
                    </CardTitle>

                    <span
                      className={`px-2 py-1 text-xs  rounded-full ${
                        circle.role === "Admin"
                          ? "bg-purple-500/20 text-purple-400"
                          : "bg-gray-600/20 text-gray-300"
                      }`}
                    >
                      {circle.role}
                    </span>
                  </div>
                  <CardDescription className="line-clamp-2 text-gray-300">
                    {circle.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {circle.members} members
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(circle.created).toLocaleDateString()}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-2 border-t border-gray-700/50">
                    <div>
                      <p className="text-xs text-gray-400">Total Invested</p>
                      <p className="font-semibold text-white">
                        {circle.totalInvested}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Monthly Return</p>
                      <p className="font-semibold text-green-400">
                        {circle.monthlyReturn}
                      </p>
                    </div>
                  </div>

                  <Button
                    className="w-full border border-gray-600/40  text-white hover:scale-105 transition-all hover:bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500"
                    variant="outline"
                    size="sm"
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Available Circles */}
        <div className="space-y-4 ">
           <Card className="text-center justify-center py-3 bg-gray-800/30 border-2 border-red-500">
            <h3 className="text-3xl  sm:text-4xl md:text-3xl  lg:text-3xl xl:text-3xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent inline">
              Available Circles
            </h3>
          </Card>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {availableCircles.map((circle) => (
              <Card
                key={circle.id}
                className="cursor-pointer bg-gray-800/30  hover:shadow-blue-500 hover:shadow-4xl backdrop-blur-md border border-gray-700/50 hover:scale-105 transition-transform shadow-lg "
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="bg-gradient-to-r from-red-200 to-red-700 bg-clip-text text-transparent text-lg">
                      {circle.name}
                    </CardTitle>
                    <span className="px-2 py-1 text-xs rounded-full text-black font-medium bg-green-500 ">
                      {circle.openSpots} spots left
                    </span>
                  </div>
                  <CardDescription className="line-clamp-2 text-gray-300">
                    {circle.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {circle.members} members
                    </span>
                    <span className="flex items-center gap-1">
                      <DollarSign className="h-3 w-3" />
                      Min: {circle.minimumInvestment}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-2 border-t border-gray-700/50">
                    <div>
                      <p className="text-xs text-gray-400">Total Invested</p>
                      <p className="font-semibold text-white">
                        {circle.totalInvested}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Monthly Return</p>
                      <p className="font-semibold text-green-400">
                        {circle.monthlyReturn}
                      </p>
                    </div>
                  </div>

                  <Button
                    className="w-full  bg-black hover:bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:scale-105 transition-transform text-white"
                    size="sm"
                  >
                    Join Circle
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Statistics Overview */}
        <div className="grid gap-4 md:grid-cols-4 pt-6">
          {[
            { label: "Circles Joined", value: 3, icon: Users },
            { label: "Total Invested", value: "$45,200", icon: DollarSign },
            {
              label: "Avg. Return",
              value: "12.2%",
              icon: TrendingUp,
              color: "text-green-400",
            },
            { label: "Admin Circles", value: 1, icon: User },
          ].map((stat, idx) => (
            <Card
              key={idx}
              className="bg-gray-800/30  border hover:shadow-green-500 hover:shadow-4xl backdrop-blur-md border-gray-700/50 hover:scale-105 transition-transform shadow-lg "
            >
              <CardContent className="p-4 flex items-center gap-3">
                <stat.icon className={`h-5 w-5 text-gray-400`} />
                <div>
                  <p className="text-xs text-gray-400">{stat.label}</p>
                  <p
                    className={`text-lg font-semibold ${
                      stat.color ? stat.color : "text-white"
                    }`}
                  >
                    {stat.value}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}

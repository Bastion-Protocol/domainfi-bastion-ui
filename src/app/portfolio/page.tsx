"use client";

import { useState } from "react";
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
  Wallet,
  TrendingUp,
  Calendar,
  Globe,
  DollarSign,
  BarChart3,
  PieChart,
} from "lucide-react";
import { useAccount } from "wagmi";

const portfolioStats = {
  totalValue: "$124,350",
  totalValueChange: "+$8,420",
  totalValueChangePercent: "+7.3%",
  monthlyReturn: "$3,240",
  monthlyReturnPercent: "+2.6%",
  totalDomains: 23,
  activeListings: 8,
  totalRevenue: "$45,680",
};

const domains = [
  {
    id: 1,
    name: "crypto-exchange.eth",
    purchasePrice: "$12,000",
    currentValue: "$18,500",
    change: "+$6,500",
    changePercent: "+54.2%",
    purchaseDate: "2024-01-15",
    category: "Finance",
    status: "holding",
    monthlyRevenue: "$450",
    source: "Circle Alpha",
  },
  {
    id: 2,
    name: "defi-protocol.com",
    purchasePrice: "$8,500",
    currentValue: "$11,200",
    change: "+$2,700",
    changePercent: "+31.8%",
    purchaseDate: "2024-02-03",
    category: "DeFi",
    status: "listed",
    monthlyRevenue: "$320",
    source: "Personal",
  },
  {
    id: 3,
    name: "nft-marketplace.org",
    purchasePrice: "$15,000",
    currentValue: "$22,800",
    change: "+$7,800",
    changePercent: "+52.0%",
    purchaseDate: "2024-01-28",
    category: "NFT",
    status: "holding",
    monthlyRevenue: "$680",
    source: "Circle Beta",
  },
  {
    id: 4,
    name: "web3-gaming.io",
    purchasePrice: "$6,200",
    currentValue: "$5,800",
    change: "-$400",
    changePercent: "-6.5%",
    purchaseDate: "2024-03-12",
    category: "Gaming",
    status: "holding",
    monthlyRevenue: "$150",
    source: "Personal",
  },
  {
    id: 5,
    name: "dao-governance.eth",
    purchasePrice: "$9,800",
    currentValue: "$13,400",
    change: "+$3,600",
    changePercent: "+36.7%",
    purchaseDate: "2024-02-20",
    category: "DAO",
    status: "listed",
    monthlyRevenue: "$420",
    source: "Circle Alpha",
  },
  {
    id: 6,
    name: "metaverse-land.com",
    purchasePrice: "$20,000",
    currentValue: "$28,500",
    change: "+$8,500",
    changePercent: "+42.5%",
    purchaseDate: "2024-01-08",
    category: "Metaverse",
    status: "holding",
    monthlyRevenue: "$850",
    source: "Personal",
  },
];

const categories = [
  "All",
  "Finance",
  "DeFi",
  "NFT",
  "Gaming",
  "DAO",
  "Metaverse",
];
const statusOptions = ["All", "holding", "listed", "sold"];

export default function PortfolioPage() {
  const { isConnected } = useAccount();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredDomains = domains.filter((domain) => {
    const matchesCategory =
      selectedCategory === "All" || domain.category === selectedCategory;
    const matchesStatus =
      selectedStatus === "All" || domain.status === selectedStatus;
    return matchesCategory && matchesStatus;
  });

  if (!isConnected) {
    return (
     <Layout>
        <div className="flex-1 space-y-10 overflow-hidden p-6 md:p-12 bg-gradient-to-b from-black via-gray-950 to-gray-900 min-h-screen text-white  pt-6">
          <div className="flex items-center justify-center  flex-col  md:flex-row md:items-center md:justify-between">

          <div className="max-w-[1200px]">
            <h2 className="text-3xl  sm:text-4xl md:text-5xl  lg:text-5xl xl:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              Portfolio
            </h2>
            <p className="text-gray-400 mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl">
              Connect your wallet to view your domain portfolio.
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
               Track Your Domain Investments
              </CardTitle>
              <CardDescription className="text-gray-300 text-base sm:text-xl md:text-xl lg:text-xl">
                Monitor performance, track returns, and manage your domain portfolio.
              </CardDescription>
            </CardHeader>
            </Card>
          <Card className="col-span-full  hover:scale-105  bg-black/70 backdrop-blur-md border border-red-500/30   hover:shadow-red-500/50 hover:shadow-2xl  transform transition-transform duration-300 shadow-xl rounded-2xl p-6 pl-1 pr-1 mt-10">
            <CardContent>
              <div className="space-y-4">
                <h3 className=" text-xl  sm:text-2xl md:text-2xl lg:text-3xl   font-extrabold tracking-tight bg-gradient-to-r from-red-400 to-red-900 bg-clip-text text-transparent ">
                  Portfolio Features:
                </h3>
                <ul className="space-y-2 text-base text-gray-300">
                  <li>
                    • Real-time domain valuations and market data
                  </li>
                  <li>• Performance tracking with detailed analytics</li>
                  <li>• Revenue tracking from domain leasing</li>
                  <li>
                    • Portfolio diversification insights
                  </li>
                  <li>• Export data for tax reporting</li>
                </ul>
                <Button className="mt-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:scale-105 transition-transform">
                  Connect Wallet to View Portfolio
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
      <div className="flex-1 overflow-hidden space-y-4 p-4 md:p-8 pt-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-4xl  sm:text-4xl md:text-5xl  lg:text-5xl xl:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-red-300 to-red-700 bg-clip-text text-transparent">
              Portfolio
            </h2>
            <p className=" mt-4 text-lg sm:text-xl md:text-2xl lg:text-2xl text-muted-foreground">
              Track and manage your domain investments.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button variant="outline" className="w-full sm:w-auto">
              <BarChart3 className="mr-2 h-4 w-4" />
              Analytics
            </Button>
            <Button className="w-full sm:w-auto">
              <DollarSign className="mr-2 h-4 w-4" />
              Sell Domain
            </Button>
          </div>
        </div>

        {/* Portfolio Overview */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="hover:scale-105">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Value</CardTitle>
              <Wallet className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {portfolioStats.totalValue}
              </div>
              <div className="flex items-center text-xs text-green-600">
                <TrendingUp className="mr-1 h-3 w-3" />
                {portfolioStats.totalValueChange} (
                {portfolioStats.totalValueChangePercent})
              </div>
            </CardContent>
          </Card>

          <Card className="hover:scale-105">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Monthly Return
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {portfolioStats.monthlyReturn}
              </div>
              <div className="flex items-center text-xs text-green-600">
                <TrendingUp className="mr-1 h-3 w-3" />
                {portfolioStats.monthlyReturnPercent} from last month
              </div>
            </CardContent>
          </Card>

          <Card className="hover:scale-105">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Domains
              </CardTitle>
              <Globe className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {portfolioStats.totalDomains}
              </div>
              <div className="text-xs text-muted-foreground">
                {portfolioStats.activeListings} active listings
              </div>
            </CardContent>
          </Card>

          <Card className="hover:scale-105">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Revenue
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {portfolioStats.totalRevenue}
              </div>
              <div className="text-xs text-muted-foreground">
                From leasing and sales
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Dropdowns */}
          <div className="flex flex-col sm:flex-row gap-2">
            <select
              className="px-3 py-2 border border-input rounded-md bg-background text-foreground text-sm
                 focus:outline-none focus:ring-2 focus:ring-ring hover:bg-gradient-to-r from-red-300 to-blue-600 hover:text-white"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            <select
              className="px-3 py-2 border border-input rounded-md bg-background text-foreground text-sm
                 focus:outline-none focus:ring-2 focus:ring-ring hover:bg-gradient-to-r from-red-300 to-blue-600 hover:text-white"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              {statusOptions.map((status) => (
                <option key={status} value={status}>
                  {status === "All"
                    ? "All Status"
                    : status.charAt(0).toUpperCase() + status.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Buttons */}
          <div className="flex gap-2">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className="w-full sm:w-auto"
            >
              <PieChart className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("list")}
              className="w-full sm:w-auto"
            >
              <BarChart3 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Domains Grid/List */}
        <div
          className={
            viewMode === "grid"
              ? "grid gap-4 md:grid-cols-2 lg:grid-cols-3"
              : "space-y-4"
          }
        >
          {filteredDomains.map((domain) => (
            <Card
              key={domain.id}
              className="cursor-pointer  hover:shadow-blue-400 hover:shadow-3xl hover:scale-105 transition-shadow"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg font-bold">
                      {domain.name}
                    </CardTitle>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">
                        {domain.category}
                      </span>
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          domain.status === "holding"
                            ? "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                            : domain.status === "listed"
                            ? "bg-orange-100 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400"
                            : "bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400"
                        }`}
                      >
                        {domain.status}
                      </span>
                    </div>
                  </div>
                  <div
                    className={`text-right ${
                      domain.change.startsWith("+")
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    <p className="text-sm font-semibold">
                      {domain.changePercent}
                    </p>
                    <p className="text-xs">{domain.change}</p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-muted-foreground">
                      Purchase Price
                    </p>
                    <p className="font-semibold">{domain.purchasePrice}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">
                      Current Value
                    </p>
                    <p className="font-semibold">{domain.currentValue}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">
                      Monthly Revenue
                    </p>
                    <p className="font-semibold">{domain.monthlyRevenue}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Source</p>
                    <p className="font-semibold">{domain.source}</p>
                  </div>
                </div>

                <div className="pt-2 border-t">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(domain.purchaseDate).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button
                    className="flex-1 hover:bg-green-400   bg-gradient-to-r from-purple-500 via-pink-500 to-orange-200"
                    size="sm"
                  >
                    View Details
                  </Button>
                  <Button
                    variant={domain.status === "listed" ? "default" : "outline"}
                    size="sm"
                  >
                    {domain.status === "listed"
                      ? "Edit Listing"
                      : "List for Sale"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Performance Chart Placeholder */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>
              <span className=" bg-gradient-to-r from-red-300 to-red-700 bg-clip-text text-transparent text-xl  sm:text-2xl md:text-3xl  lg:text-3xl xl:text-4xl">
                Portfolio Performance
              </span>
            </CardTitle>
            <CardDescription>
              <span className="text-lg sm:text-lg md:text-lg lg:text-xl text-muted-foreground">Track your portfolio value over time</span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-muted/20 rounded-lg">
              <div className="text-center">
                <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                <p className="text-muted-foreground">
                  Portfolio performance chart would go here
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Integration with charting library coming soon
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}

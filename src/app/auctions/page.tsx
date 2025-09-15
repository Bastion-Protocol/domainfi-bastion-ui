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
import { Gavel, Clock, TrendingUp, Search, Eye, Heart } from "lucide-react";
import { useAccount } from "wagmi";

const activeAuctions = [
  {
    id: 1,
    domain: "crypto-exchange.eth",
    description: "Premium domain perfect for cryptocurrency exchange platforms",
    currentBid: "15.5 ETH",
    currentBidUSD: "$37,200",
    timeLeft: "2h 34m",
    bidCount: 12,
    category: "Finance",
    startingBid: "5 ETH",
    reservePrice: "20 ETH",
    seller: "0x742d...4f21",
    verified: true,
    image: "/api/placeholder/400/200",
    status: "active",
  },
  {
    id: 2,
    domain: "defi-protocol.com",
    description: "Professional domain for DeFi protocols and platforms",
    currentBid: "8.2 ETH",
    currentBidUSD: "$19,680",
    timeLeft: "5h 17m",
    bidCount: 8,
    category: "DeFi",
    startingBid: "3 ETH",
    reservePrice: "12 ETH",
    seller: "0x391b...8c33",
    verified: true,
    image: "/api/placeholder/400/200",
    status: "active",
  },
  {
    id: 3,
    domain: "nft-marketplace.org",
    description: "Perfect for NFT marketplaces and digital art platforms",
    currentBid: "12.8 ETH",
    currentBidUSD: "$30,720",
    timeLeft: "1d 3h",
    bidCount: 24,
    category: "NFT",
    startingBid: "4 ETH",
    reservePrice: "15 ETH",
    seller: "0x8f1a...2d9b",
    verified: true,
    image: "/api/placeholder/400/200",
    status: "active",
  },
  {
    id: 4,
    domain: "web3-gaming.io",
    description: "Gaming domain for blockchain-based games and metaverse",
    currentBid: "6.7 ETH",
    currentBidUSD: "$16,080",
    timeLeft: "4h 52m",
    bidCount: 15,
    category: "Gaming",
    startingBid: "2 ETH",
    reservePrice: "10 ETH",
    seller: "0x5c2d...7a48",
    verified: false,
    image: "/api/placeholder/400/200",
    status: "active",
  },
  {
    id: 5,
    domain: "dao-governance.eth",
    description: "Professional domain for DAO governance platforms",
    currentBid: "9.3 ETH",
    currentBidUSD: "$22,320",
    timeLeft: "8h 15m",
    bidCount: 18,
    category: "DAO",
    startingBid: "3.5 ETH",
    reservePrice: "12 ETH",
    seller: "0xa7b3...9f12",
    verified: true,
    image: "/api/placeholder/400/200",
    status: "active",
  },
  {
    id: 6,
    domain: "metaverse-land.com",
    description: "Premium domain for metaverse and virtual real estate",
    currentBid: "18.9 ETH",
    currentBidUSD: "$45,360",
    timeLeft: "6h 28m",
    bidCount: 31,
    category: "Metaverse",
    startingBid: "7 ETH",
    reservePrice: "25 ETH",
    seller: "0x1e4f...5c78",
    verified: true,
    image: "/api/placeholder/400/200",
    status: "active",
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
const sortOptions = [
  "Ending Soon",
  "Highest Bid",
  "Most Bids",
  "Recently Added",
];

export default function AuctionsPage() {
  const { isConnected } = useAccount();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Ending Soon");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAuctions = activeAuctions.filter((auction) => {
    const matchesCategory =
      selectedCategory === "All" || auction.category === selectedCategory;
    const matchesSearch =
      auction.domain.toLowerCase().includes(searchTerm.toLowerCase()) ||
      auction.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (!isConnected) {
    return (
      <Layout>
        <div className="flex-1 overflow-hidden space-y-10 p-6 md:p-12 bg-gradient-to-b from-black via-gray-950 to-gray-900 min-h-screen text-white  pt-6">
          <div className="flex items-center justify-center  flex-col  md:flex-row md:items-center md:justify-between">
            <div className="max-w-[1200px]">
              <h2 className="text-3xl  sm:text-4xl md:text-5xl  lg:text-5xl xl:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                Domain Auction
              </h2>
              <p className="text-gray-400 mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl">
                Connect your wallet to participate in domain auctions.
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
                Premium Domain Aucitons
              </CardTitle>
              <CardDescription className="text-gray-300 text-base sm:text-xl md:text-xl lg:text-xl">
                Bid on high-value domains and build your digital asset
                portfolio.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="col-span-full  hover:scale-105  bg-black/70 backdrop-blur-md border border-red-500/30   hover:shadow-red-500/50 hover:shadow-2xl  transform transition-transform duration-300 shadow-xl rounded-2xl p-6 pl-1 pr-1 mt-10">
            <CardContent>
              <div className="space-y-4">
                <h3 className=" text-xl  sm:text-2xl md:text-2xl lg:text-3xl   font-extrabold tracking-tight bg-gradient-to-r from-red-400 to-red-900 bg-clip-text text-transparent ">
                  Why Invest in Premium Domains?
                </h3>
                <ul className="space-y-2 text-base text-gray-300">
                  <li>• Premium domains appreciate in value over time</li>
                  <li>
                    • Generate passive income through leasing and development
                  </li>
                  <li>
                    • Essential digital real estate for businesses and projects
                  </li>
                  <li>• Limited supply creates scarcity and value</li>
                  <li>• Liquid assets that can be easily traded or sold</li>
                </ul>
                <Button className="mt-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:scale-105 transition-transform">
                  Connect Wallet to Start Bidding
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
        <div className="flex items-center justify-between  space-y-2">
          <div>
            <h2 className="text-2xl  sm:text-3xl  md:text-3xl  lg:text-4xl xl:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              Domain Auctions
            </h2>
            <p className="text-muted-foreground  md:text-lg text-sm">
              Discover and bid on premium domain names.
            </p>
          </div>
          <Button className="px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 text-sm sm:text-base md:text-lg">
            <Gavel className="mr-2 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
            <span className="hidden sm:inline">Create Auction</span>
          </Button>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search domains..."
                className="w-full pl-10 pr-4 py-2 border border-input rounded-md bg-background text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0 w-full max-w-md">
            {/* Category Select */}
            <div className="relative w-full">
              <select
                className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground shadow-sm 
                 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500
                 hover:border-purple-400 transition duration-200"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              
            </div>

            {/* Sort Select */}
            <div className="relative w-full">
              <select
                className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground shadow-sm 
                 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500
                 hover:border-pink-400 transition duration-200"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                {sortOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
             
            </div>
          </div>
        </div>

        {/* Auctions Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredAuctions.map((auction) => (
            <Card
              key={auction.id}
              className="cursor-pointer hover:shadow-red-400 hover:shadow-3xl hover:scale-105  transition-all duration-300 group"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <CardTitle className="text-lg font-bold ">
                        {auction.domain}
                      </CardTitle>
                      {auction.verified && (
                        <div className="h-4 w-4 rounded-full bg-green-500 flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      )}
                    </div>
                    <span className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">
                      {auction.category}
                    </span>
                  </div>
                  <div className="flex space-x-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="link" size="icon" className="h-8 w-8">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardDescription className="line-clamp-2 text-sm">
                  {auction.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Current Bid */}
                <div className="bg-muted/50 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground">
                        Current Bid
                      </p>
                      <p className="text-lg font-bold">{auction.currentBid}</p>
                      <p className="text-xs text-muted-foreground">
                        {auction.currentBidUSD}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">Time Left</p>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3 text-orange-500" />
                        <p className="text-sm font-semibold text-orange-600 dark:text-orange-400">
                          {auction.timeLeft}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Auction Details */}
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <p className="text-muted-foreground">Starting Bid</p>
                    <p className="font-semibold">{auction.startingBid}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Reserve Price</p>
                    <p className="font-semibold">{auction.reservePrice}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Total Bids</p>
                    <p className="font-semibold">{auction.bidCount}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Seller</p>
                    <p className="font-semibold font-mono">{auction.seller}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2 pt-2">
                  <Button className="flex-1 text-white border-2 hover:bg-green-400 hover:border-0 " size="sm">
                    Place Bid
                  </Button>
                  <Button variant="outline" size="sm">
                    Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Summary */}
        <div className="grid gap-4 md:grid-cols-4 pt-6 border-t ">
          <Card className="hover:shadow-red-700 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 ">
                <Gavel className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">
                    Active Auctions
                  </p>
                  <p className="text-lg font-semibold">
                    {activeAuctions.length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-red-700 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Total Volume</p>
                  <p className="text-lg font-semibold">$2.1M</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-red-700 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Avg. Duration</p>
                  <p className="text-lg font-semibold">7 days</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-red-700 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Success Rate</p>
                  <p className="text-lg font-semibold">94%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}

"use client";

import { Layout } from "@/components/layout";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  TrendingUp,
  DollarSign,
  Users,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import { useAccount } from "wagmi";

const stats = [
  {
    name: "Total Portfolio Value",
    value: "$24,531.00",
    change: "+12.34%",
    changeType: "positive" as const,
    icon: DollarSign,
  },
  {
    name: "Active Investments",
    value: "47",
    change: "+3",
    changeType: "positive" as const,
    icon: TrendingUp,
  },
  {
    name: "Circle Members",
    value: "1,284",
    change: "+24",
    changeType: "positive" as const,
    icon: Users,
  },
  {
    name: "Monthly Returns",
    value: "8.2%",
    change: "-0.4%",
    changeType: "negative" as const,
    icon: Activity,
  },
];

const recentActivity = [
  {
    id: 1,
    type: "investment",
    description: "Purchased domain: crypto-tokens.eth",
    amount: "$2,400",
    time: "2 hours ago",
  },
  {
    id: 2,
    type: "auction",
    description: "Won auction for defi-protocol.com",
    amount: "$5,200",
    time: "5 hours ago",
  },
  {
    id: 3,
    type: "lending",
    description: "Lent ETH to Circle Alpha",
    amount: "$3,100",
    time: "1 day ago",
  },
  {
    id: 4,
    type: "return",
    description: "Received returns from web3-domains.eth",
    amount: "$890",
    time: "2 days ago",
  },
];

export default function HomePage() {
  const { isConnected } = useAccount();
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!typedRef.current) return;

    const typed = new Typed(typedRef.current, {
      strings: ["Portfolio."],
      typeSpeed: 120,
      backSpeed: 120,
      loop: true,
    });

    return () => {
      typed.destroy(); 
    };
  }, []);

  return (
    <Layout>
      <div className="flex-1 overflow-hidden space-y-10 p-6 md:p-12 bg-gradient-to-b from-black via-gray-950 to-gray-900 min-h-screen text-white">
        {/* Welcome Section */}
        <div className="flex flex-col  md:flex-row md:items-center md:justify-between">
          <div className="max-w-[1200px]">
            <h2 className="text-4xl  sm:text-4xl md:text-5xl  lg:text-6xl xl:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              Dashboard
            </h2>

            <p className="text-gray-400 mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl">
              {isConnected ? (
                "Welcome back! Here's your portfolio overview."
              ) : (
                <>
                  Connect your wallet to access your
                  <span className="inline-block ml-1" ref={typedRef}></span>
                </>
              )}
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
          {isConnected && (
            <div className="flex items-center gap-4 mt-6 md:mt-0">
              <Button className="px-6 py-3 text-lg bg-red-600 hover:bg-red-700 text-white rounded-xl">
                Invest Now
              </Button>
              <Button
                variant="outline"
                className="px-6 py-3 text-lg border-red-700 text-red-400 hover:bg-red-900/30 rounded-xl"
              >
                View Portfolio
              </Button>
            </div>
          )}
        </div>

        {!isConnected ? (
          /* Not Connected State */
          <Card className="col-span-full transform transition-transform duration-300 hover:scale-105  bg-black/70 backdrop-blur-md border border-red-500/30 shadow-xl rounded-2xl p-6 pl-1 pr-1 mt-8">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl  sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                Welcome to Bastion Protocol
              </CardTitle>
              <CardDescription className="text-gray-400 text-lg sm:text-xl lg:text-xl md:text-xl">
                Connect your wallet to start investing in premium domains and
                manage your portfolio.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid w-full gap-8 md:grid-cols-2">
                {/* Key Features Card */}
                <Card className="bg-gradient-to-b from-gray-950 to-gray-900 border border-red-900/40 rounded-xl hover:shadow-red-500/50 hover:shadow-2xl  transform transition-transform duration-300 hover:scale-105 ">
                  <CardHeader>
                    <CardTitle className="text-red-400 text-2xl">
                      Key Features
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-base text-gray-300">
                      <li>• Professional domain investment platform</li>
                      <li>• Circle-based collaborative investing</li>
                      <li>• Domain auction marketplace</li>
                      <li>• Portfolio tracking and analytics</li>
                      <li>• Lending and borrowing services</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Get Started Card */}
                <Card className="bg-gradient-to-b from-gray-950 to-gray-900 border border-red-900/40 rounded-xl hover:shadow-red-500/50 hover:shadow-2xl  transform transition-transform duration-300 hover:scale-105 ">
                  <CardHeader>
                    <CardTitle className="text-red-400 text-2xl">
                      Get Started
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="space-y-3 text-base text-gray-300 list-decimal list-inside">
                      <li>Connect your Web3 wallet</li>
                      <li>Join or create investment circles</li>
                      <li>Browse domain auctions</li>
                      <li>Start building your portfolio</li>
                    </ol>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        ) : (
          /* Connected State - Dashboard */
          <>
            {/* Stats Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <Card
                  key={stat.name}
                  className="bg-gray-900/80 border border-red-900/40 rounded-2xl hover:shadow-red-500/20 hover:scale-[1.03] transition-transform duration-300 p-6"
                >
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                    <CardTitle className="text-lg font-medium text-gray-400">
                      {stat.name}
                    </CardTitle>
                    <stat.icon className="h-7 w-7 text-red-400" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="flex items-center text-sm mt-2">
                      {stat.changeType === "positive" ? (
                        <ArrowUpRight className="mr-1 h-4 w-4 text-green-400" />
                      ) : (
                        <ArrowDownRight className="mr-1 h-4 w-4 text-red-400" />
                      )}
                      <span
                        className={
                          stat.changeType === "positive"
                            ? "text-green-400 font-semibold"
                            : "text-red-400 font-semibold"
                        }
                      >
                        {stat.change}
                      </span>
                      <span className="ml-2 text-gray-500">
                        from last month
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Activity + Quick Actions */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4 bg-gray-900/80 border border-red-900/40 rounded-2xl shadow-lg hover:shadow-red-500/20 transition p-6">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white">
                    Recent Activity
                  </CardTitle>
                  <CardDescription className="text-gray-400 text-base">
                    Your latest investments and transactions.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {recentActivity.map((activity) => (
                      <div
                        key={activity.id}
                        className="flex items-center justify-between border-b border-gray-800 pb-5 last:border-0 last:pb-0"
                      >
                        <div className="flex flex-col">
                          <p className="text-base font-medium text-white">
                            {activity.description}
                          </p>
                          <p className="text-sm text-gray-500">
                            {activity.time}
                          </p>
                        </div>
                        <div className="text-base font-semibold text-red-400">
                          {activity.amount}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="col-span-3 bg-gray-900/80 border border-red-900/40 rounded-2xl shadow-lg hover:shadow-red-500/20 transition p-6">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white">
                    Quick Actions
                  </CardTitle>
                  <CardDescription className="text-gray-400 text-base">
                    Manage your investments and portfolio.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full justify-start py-3 text-lg bg-gray-800 hover:bg-red-900/30 text-white border border-red-900/40 rounded-xl">
                    <TrendingUp className="mr-3 h-5 w-5 text-red-400" />
                    Browse Auctions
                  </Button>
                  <Button className="w-full justify-start py-3 text-lg bg-gray-800 hover:bg-red-900/30 text-white border border-red-900/40 rounded-xl">
                    <Users className="mr-3 h-5 w-5 text-red-400" />
                    Join Circle
                  </Button>
                  <Button className="w-full justify-start py-3 text-lg bg-gray-800 hover:bg-red-900/30 text-white border border-red-900/40 rounded-xl">
                    <DollarSign className="mr-3 h-5 w-5 text-red-400" />
                    Lend Assets
                  </Button>
                  <Button className="w-full justify-start py-3 text-lg bg-gray-800 hover:bg-red-900/30 text-white border border-red-900/40 rounded-xl">
                    <Activity className="mr-3 h-5 w-5 text-red-400" />
                    View Analytics
                  </Button>
                </CardContent>
              </Card>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}

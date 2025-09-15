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
  User,
  Bell,
  Shield,
  Palette,
  Globe,
  Mail,
  Smartphone,
} from "lucide-react";
import { useAccount } from "wagmi";
import { ThemeToggle } from "@/components/theme-toggle";

export default function SettingsPage() {
  const { isConnected, address } = useAccount();
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    auctions: true,
    portfolio: true,
    circles: false,
  });

  const [profile, setProfile] = useState({
    displayName: "Domain Investor",
    email: "investor@example.com",
    bio: "Professional domain investor focused on Web3 and crypto domains",
    website: "https://example.com",
    twitter: "@domaininvestor",
  });

  if (!isConnected) {
    return (
      <Layout>
        <div className="flex-1 space-y-10 overflow-hidden p-6 md:p-12 bg-gradient-to-b from-black via-gray-950 to-gray-900 min-h-screen text-white  ">
          <div className="flex items-center justify-center  flex-col  md:flex-row md:items-center md:justify-between">
            <div className="max-w-[1200px]">
              <h2 className="text-3xl  sm:text-4xl md:text-5xl  lg:text-5xl xl:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                Settings
              </h2>
              <p className="text-gray-400 mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl">
                Connect your wallet to access settings and preferences.
              </p>
            </div>
          </div>

          <Card className="col-span-full  hover:scale-105  bg-black/70 backdrop-blur-md border border-red-500/30   hover:shadow-red-500/50 hover:shadow-2xl  transform transition-transform duration-300 shadow-xl rounded-2xl p-6 pl-1 pr-1 mt-10">
            <CardHeader className="pb-5 ">
              <CardTitle className=" text-xl  sm:text-2xl md:text-2xl lg:text-3xl   font-extrabold tracking-tight bg-gradient-to-r from-red-400 to-red-900 bg-clip-text text-transparent ">
                Account Settings
              </CardTitle>
              <CardDescription className="text-gray-300 text-base sm:text-xl md:text-xl lg:text-xl">
                Manage your account preferences, notifications, and security
                settings.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="col-span-full  hover:scale-105  bg-black/70 backdrop-blur-md border border-red-500/30   hover:shadow-red-500/50 hover:shadow-2xl  transform transition-transform duration-300 shadow-xl rounded-2xl p-6 pl-1 pr-1 mt-10">
            <CardContent>
              <div className="space-y-4">
                <h3 className=" text-xl  sm:text-2xl md:text-2xl lg:text-3xl   font-extrabold tracking-tight bg-gradient-to-r from-red-400 to-red-900 bg-clip-text text-transparent ">
                  Available Settings:
                </h3>
                <ul className="space-y-2 text-base text-gray-300">
                  <li>• Profile and display preferences</li>
                  <li>• Notification settings for auctions and portfolio</li>
                  <li>• Security and privacy controls</li>
                  <li>• Theme and appearance customization</li>
                  <li>• connected wallets and accounts</li>
                </ul>

                <Button className="mt-4 bg-gradient-to-r  from-purple-500 via-pink-500 to-orange-500 hover:scale-105 transition-transform    ">
                  Connect Wallet to Access Settings
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
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-3xl  sm:text-4xl md:text-4xl  lg:text-4xl xl:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              Settings
            </h2>
            <p className="text-gray-400 mt-4 text-sm sm:text-lg md:text-lg lg:text-xl">
              Manage your account and application preferences.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Profile Settings */}
          <Card className="hover:shadow-red-500/50 hover:shadow-2xl">
            <CardHeader>
              <CardTitle className="flex items-center  gap-2">
                <User className="h-5 w-5" />
                <span className="text-lg sm:text-lg md:text-lg lg:text-xl">
                  Profile Settings
                </span>
              </CardTitle>
              <CardDescription>
                <span className="text-sm sm:text-sm md:text-sm lg:text-base">
                  Update your profile information and public details.
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">Display Name</label>
                <input
                  type="text"
                  className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  value={profile.displayName}
                  onChange={(e) =>
                    setProfile({ ...profile, displayName: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  value={profile.email}
                  onChange={(e) =>
                    setProfile({ ...profile, email: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="text-sm font-medium">Bio</label>
                <textarea
                  className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  rows={3}
                  value={profile.bio}
                  onChange={(e) =>
                    setProfile({ ...profile, bio: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="text-sm font-medium">Website</label>
                <input
                  type="url"
                  className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  value={profile.website}
                  onChange={(e) =>
                    setProfile({ ...profile, website: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="text-sm font-medium">Twitter</label>
                <input
                  type="text"
                  className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  value={profile.twitter}
                  onChange={(e) =>
                    setProfile({ ...profile, twitter: e.target.value })
                  }
                />
              </div>

              <Button className="w-full text-white bg-red-600 font-medium hover:bg-green-400 hover:text-black hover:font-bold">
                Update Profile
              </Button>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card className="hover:shadow-red-500/50 hover:shadow-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                <span className="text-lg sm:text-lg md:text-lg lg:text-xl">
                  Notifications
                </span>
              </CardTitle>
              <CardDescription>
                <span className="text-sm sm:text-sm md:text-sm lg:text-base">
                  Configure your notification preferences.
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">
                      Email Notifications
                    </span>
                  </div>
                  <input
                    type="checkbox"
                    checked={notifications.email}
                    onChange={(e) =>
                      setNotifications({
                        ...notifications,
                        email: e.target.checked,
                      })
                    }
                    className="rounded "
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Smartphone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">
                      Push Notifications
                    </span>
                  </div>
                  <input
                    type="checkbox"
                    checked={notifications.push}
                    onChange={(e) =>
                      setNotifications({
                        ...notifications,
                        push: e.target.checked,
                      })
                    }
                    className="rounded"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">Auction Updates</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={notifications.auctions}
                    onChange={(e) =>
                      setNotifications({
                        ...notifications,
                        auctions: e.target.checked,
                      })
                    }
                    className="rounded"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">
                      Portfolio Changes
                    </span>
                  </div>
                  <input
                    type="checkbox"
                    checked={notifications.portfolio}
                    onChange={(e) =>
                      setNotifications({
                        ...notifications,
                        portfolio: e.target.checked,
                      })
                    }
                    className="rounded"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">
                      Circle Activities
                    </span>
                  </div>
                  <input
                    type="checkbox"
                    checked={notifications.circles}
                    onChange={(e) =>
                      setNotifications({
                        ...notifications,
                        circles: e.target.checked,
                      })
                    }
                    className="rounded"
                  />
                </div>
              </div>

              <Button className="w-full" variant="outline">
                Save Notifications
              </Button>
            </CardContent>
          </Card>

          {/* Appearance Settings */}
          <Card className="hover:shadow-red-500/50 hover:shadow-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5" />
                <span className="text-lg sm:text-lg md:text-lg lg:text-xl">
                  Appearance
                </span>
              </CardTitle>
              <CardDescription>
                <span className="text-sm sm:text-sm md:text-sm lg:text-base">
                  Customize the look and feel of the application.
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Theme</p>
                  <p className="text-xs text-muted-foreground">
                    Choose your preferred theme
                  </p>
                </div>
                <ThemeToggle />
              </div>

              <div>
                <label className="text-sm font-medium">Language</label>
                <select className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="fr">Français</option>
                  <option value="de">Deutsch</option>
                  <option value="zh">中文</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium">Currency</label>
                <select className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                  <option value="usd">USD ($)</option>
                  <option value="eur">EUR (€)</option>
                  <option value="gbp">GBP (£)</option>
                  <option value="eth">ETH (Ξ)</option>
                </select>
              </div>

              <Button className="w-full" variant="outline">
                Save Preferences
              </Button>
            </CardContent>
          </Card>

          {/* Security Settings */}
          <Card className="hover:shadow-red-500/50 hover:shadow-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />

                <span className="text-lg sm:text-lg md:text-lg lg:text-xl">
                  Security & Privacy
                </span>
              </CardTitle>
              <CardDescription>
                <span className="text-sm sm:text-sm md:text-sm lg:text-base">
                  Manage your security settings and connected accounts.
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted/50 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span className="text-sm font-medium">Connected Wallet</span>
                </div>
                <p className="text-xs text-muted-foreground font-mono">
                  {address}
                </p>
              </div>

              <div className="space-y-2">
                <Button className="w-full" variant="outline">
                  Change Connected Wallet
                </Button>
                <Button className="w-full" variant="outline">
                  Enable Two-Factor Authentication
                </Button>
                <Button className="w-full" variant="outline">
                  Download Data Export
                </Button>
                <Button
                  className="w-full font-medium hover:bg-red-900 hover:text-white hover:font-bold"
                  variant="destructive"
                >
                  Disconnect Account
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* API & Integration Settings */}
        <Card className="hover:shadow-blue-500/50 hover:shadow-2xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              <span className="text-lg sm:text-lg md:text-lg lg:text-xl">
                API & Integrations
              </span>
            </CardTitle>
            <CardDescription>
              <span className="text-sm sm:text-sm md:text-sm lg:text-base">
                Manage API keys and third-party integrations.
              </span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="font-medium mb-2">API Access</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Generate API keys to access your portfolio data
                  programmatically.
                </p>
                <Button
                  variant="default"
                  className="text-white bg-gradient-to-r from-blue-400 via-pink-400 to-yellow-500 "
                >
                  Generate API Key
                </Button>
              </div>

              <div>
                <h4 className="font-medium mb-2">Connected Services</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 border rounded">
                    <span className="text-sm">Domain Valuation Service</span>
                    <span className="text-sm text-green-600">Connected</span>
                  </div>
                  <div className="flex items-center justify-between p-2 border rounded">
                    <span className="text-sm">Price Analytics API</span>
                    <span className="text-sm text-muted-foreground">
                      Not connected
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}

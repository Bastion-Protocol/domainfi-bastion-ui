"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import {
  Menu,
  X,
  TrendingUp,
  Circle,
  Gavel,
  Wallet,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Dashboard", href: "/", icon: TrendingUp },
  { name: "Circles", href: "/circles", icon: Circle },
  { name: "Auctions", href: "/auctions", icon: Gavel },
  { name: "Portfolio", href: "/portfolio", icon: Wallet },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-red-900 bg-black/80 backdrop-blur-xl shadow-lg">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex w-full items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-2xl bg-gradient-to-r from-red-700 via-red-600 to-black flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg">B</span>
              </div>

              <span className="hidden font-bold text-xl bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent sm:block">
                Bastion Protocol
              </span>
              <span className="font-bold text-xl bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent sm:hidden">
                Bastion
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center  space-x-2">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300  ",
                      isActive
                        ? "bg-gradient-to-r from-red-600 to-red-800 text-white shadow-md"
                        : "text-gray-400 hover:text-white hover:bg-red-900/40"
                    )}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <div className="hidden sm:block">
              <ConnectButton />
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="h-9 w-9 text-gray-300 hover:text-red-400"
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-black/95 rounded-lg  mt-2 shadow-lg">
            <div className="space-y-1 pb-4 pt-2">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 text-base font-medium rounded-lg transition-all duration-300",
                      isActive
                        ? "bg-gradient-to-r from-red-600 to-red-800 text-white shadow-md"
                        : "text-gray-400 hover:text-white hover:bg-red-900/40"
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.name}
                  </Link>
                );
              })}
              <div className="px-4 pt-3  sm:hidden">
            
                  <ConnectButton />
              
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

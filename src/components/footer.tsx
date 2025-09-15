import Link from "next/link";
import { Github, Twitter, Globe, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-tr from-gray-900/80 via-gray-800/50 to-gray-900/80 backdrop-blur-md border-t border-gray-700/50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-4">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-10 w-10 rounded-2xl bg-gradient-to-r from-red-700 via-red-600 to-black flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="font-bold text-2xl text-white">Bastion Protocol</span>
            </div>
            <p className="text-sm text-gray-300 mb-5">
              Professional Web3 domain investment platform enabling collaborative investing and portfolio management.
            </p>
            <div className="flex space-x-4 mt-5">
              <Link
                href="https://twitter.com/bastionprotocol"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Twitter className="h-6 w-6 hover:scale-110 transition-transform duration-300" />
              </Link>
              <Link
                href="https://github.com/bastion-protocol"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Github className="h-6 w-6 hover:scale-110 transition-transform duration-300" />
              </Link>
              <Link
                href="https://bastionprotocol.com"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Globe className="h-6 w-6 hover:scale-110 transition-transform duration-300" />
              </Link>
              <Link
                href="mailto:hello@bastionprotocol.com"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Mail className="h-6 w-6 hover:scale-110 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 text-gray-300">
              <div>
                <h3 className="text-sm font-semibold mb-4 text-white">Platform</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/" className="text-sm hover:text-purple-400 transition-colors duration-200">
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link href="/circles" className="text-sm hover:text-purple-400 transition-colors duration-200">
                      Investment Circles
                    </Link>
                  </li>
                  <li>
                    <Link href="/auctions" className="text-sm hover:text-purple-400 transition-colors duration-200">
                      Domain Auctions
                    </Link>
                  </li>
                  <li>
                    <Link href="/portfolio" className="text-sm hover:text-purple-400 transition-colors duration-200">
                      Portfolio
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold mb-4 text-white">Resources</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/docs" className="text-sm hover:text-purple-400 transition-colors duration-200">
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link href="/api" className="text-sm hover:text-purple-400 transition-colors duration-200">
                      API Reference
                    </Link>
                  </li>
                  <li>
                    <Link href="/help" className="text-sm hover:text-purple-400 transition-colors duration-200">
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-sm hover:text-purple-400 transition-colors duration-200">
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold mb-4 text-white">Legal</h3>
                <ul className="space-y-3">
                  <li>
                  <Link href="/privacy" className="text-sm hover:text-purple-400 transition-colors duration-200">
                      Privacy Policy
                    </Link>  
                  </li>
                  <li>
                    <Link href="/terms" className="text-sm hover:text-purple-400 transition-colors duration-200">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link href="/security" className="text-sm hover:text-purple-400 transition-colors duration-200">
                      Security
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-sm hover:text-purple-400 transition-colors duration-200">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:mt-12 sm:mt-12 md:mt-12 mt-5 border-t border-gray-700/50 pt-6 flex flex-col sm:flex-row justify-between items-center text-gray-400 text-xs">
          <p>© 2024 Bastion Protocol. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Built with Next.js, Tailwind CSS, and Wagmi</p>
        </div>
      </div>
    </footer>
  );
}

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wallet, Menu } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-purple-100/95 backdrop-blur supports-[backdrop-filter]:bg-purple-100/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo with animation */}
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div
              initial={{ rotate: -15, opacity: 0, scale: 0.8 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
              whileHover={{ scale: 1.15, rotate: 5 }}
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r from-green-400 to-green-600 shadow-md group-hover:shadow-lg transition-shadow"
            >
              <Wallet className="h-6 w-6 text-white" />
            </motion.div>

            <motion.span
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
              whileHover={{ scale: 1.1 }}
              className="text-xl font-bold bg-gradient-to-r from-green-600 to-purple-700 bg-clip-text text-transparent"
            >
              PayFlow
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {["Home", "About", "Features", "Pricing", "Contact"].map((item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="relative text-foreground hover:text-purple-700 font-medium transition-all duration-200 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-purple-600 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/login">
              <Button variant="ghost" className="hover:scale-105 transition-transform">
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button variant="accent" className="hover:scale-105 transition-transform">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-purple-200 transition"
          >
            <Menu className="h-6 w-6 text-purple-800" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden py-4 space-y-3 border-t animate-slide-up"
          >
            {["Home", "About", "Features", "Pricing", "Contact"].map((item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="block py-2 text-foreground hover:text-purple-700 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-2">
              <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" className="w-full hover:scale-105 transition-transform">
                  Login
                </Button>
              </Link>
              <Link to="/register" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="accent" className="w-full hover:scale-105 transition-transform">
                  Get Started
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

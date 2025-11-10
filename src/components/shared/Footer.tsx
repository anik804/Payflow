import { Link } from "react-router-dom";
import {
  Wallet,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="bg-purple-100/95 border-t backdrop-blur supports-[backdrop-filter]:bg-purple-100/60 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section with Animation */}
          <div className="space-y-4">
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

            <p className="text-muted-foreground text-sm">
              Your trusted digital wallet for seamless transactions, secure
              payments, and financial freedom.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-md bg-purple-200 text-purple-800 hover:bg-green-500 hover:text-white transition-all shadow-sm"
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {["About", "Features", "Pricing", "Contact"].map((item) => (
                <motion.li key={item} whileHover={{ scale: 1.05 }}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-purple-700 transition-colors text-sm"
                  >
                    {item} Us
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-3">
              {[
                { name: "FAQ", link: "/faq" },
                { name: "Help Center", link: "#" },
                { name: "Privacy Policy", link: "#" },
                { name: "Terms of Service", link: "#" },
              ].map((item) => (
                <motion.li key={item.name} whileHover={{ scale: 1.05 }}>
                  <Link
                    to={item.link}
                    className="text-muted-foreground hover:text-purple-700 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <motion.li
                className="flex items-start gap-2 text-sm text-muted-foreground hover:scale-105 transition-transform"
                whileHover={{ scale: 1.05 }}
              >
                <Mail className="h-4 w-4 mt-0.5 text-green-600" />
                <span>support@payflow.com</span>
              </motion.li>
              <motion.li
                className="flex items-start gap-2 text-sm text-muted-foreground hover:scale-105 transition-transform"
                whileHover={{ scale: 1.05 }}
              >
                <Phone className="h-4 w-4 mt-0.5 text-green-600" />
                <span>+1 (555) 123-4567</span>
              </motion.li>
              <motion.li
                className="flex items-start gap-2 text-sm text-muted-foreground hover:scale-105 transition-transform"
                whileHover={{ scale: 1.05 }}
              >
                <MapPin className="h-4 w-4 mt-0.5 text-green-600" />
                <span>123 Finance Street, New York, NY 10001</span>
              </motion.li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} PayFlow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

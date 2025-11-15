"use client";

import Logo from "@/assets/icons/Logo";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { Link, useNavigate } from "react-router";
import {
  authApi,
  useLogoutMutation,
  useUserInfoQuery,
} from "@/redux/features/auth/auth.api";
import { useAppDispatch } from "@/redux/hook";
import { ModeToggle } from "../layout/ModeToggle";
import { role } from "@/constant/role";

import { motion } from "framer-motion";

const navigationLinks = [
  { href: "/", label: "Home", role: "PUBLIC" },
  { href: "/feature", label: "Feature", role: "PUBLIC" },
  { href: "/contact", label: "Contact", role: "PUBLIC" },
  { href: "/about", label: "About", role: "PUBLIC" },
  { href: "/faq", label: "FAQ", role: "PUBLIC" },
  { href: "/admin", label: "Dashboard", role: role.admin },
  { href: "/agent", label: "Dashboard", role: role.agent },
  { href: "/user", label: "Dashboard", role: role.user },
];

export default function Navbar() {
  const { data } = useUserInfoQuery(undefined);
  const [logout] = useLogoutMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout(undefined);
    dispatch(authApi.util.resetApiState());
    navigate("/");
  };

  // Filter links based on role
  const filteredLinks = navigationLinks.filter(
    (l) => l.role === "PUBLIC" || l.role === data?.data?.role
  );

  return (
    <motion.header
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="nav-menu border-b backdrop-blur-md bg-background/70 sticky top-0 z-50"
    >
      <div className="container mx-auto px-4 flex h-16 items-center justify-between gap-4">
        {/* Left side - Logo */}
        <div className="flex items-center gap-6">
          <Link to="/" className="text-primary hover:text-primary/90">
            <Logo />
          </Link>
        </div>

        {/* CENTER NAVIGATION */}
        <NavigationMenu className="max-md:hidden flex-1">
          <NavigationMenuList className="flex justify-center gap-6">
            {filteredLinks.map((link, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink asChild>
                  <motion.div
                    whileHover={{ scale: 1.07 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative cursor-pointer font-medium text-muted-foreground hover:text-primary"
                  >
                    <Link to={link.href} className="py-1.5">
                      {link.label}
                    </Link>

                    {/* UNDERLINE ANIMATION */}
                    <motion.span
                      className="absolute left-0 bottom-0 h-[2px] w-full bg-primary"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.25 }}
                    />
                  </motion.div>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right side buttons */}
        <div className="flex items-center gap-2">
          <ModeToggle />

          {data?.data?.email ? (
            <Button onClick={handleLogout} variant="outline" className="text-sm">
              logout
            </Button>
          ) : (
            <Button asChild className="text-sm">
              <Link to="/login">login</Link>
            </Button>
          )}
        </div>
      </div>
    </motion.header>
  );
}

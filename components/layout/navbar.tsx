"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import logo from "@/assets/images/logo.png";
import ProfileComp from "./components/profileComp";
import LangSelector from "./components/langSelector";
import searchIcon from "@/assets/images/search.png";
import notificationIcon from "@/assets/images/notification.png";
import NotificationComp from "./components/notificationComp";

// Define navigation links
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/universities", label: "Universities" },
  { href: "/programs", label: "Programs" },
  { href: "/tracker", label: "Tracker" },
  { href: "/blogs", label: "Blog" },
];

export default function Navbar() {
  const pathname = usePathname?.() || "/";

  return (
    <header className="bg-white border-b border-gray-100 py-2 px-4 h-[var(--navbar-height)]">
      <div className="max-w-[var(--app-max-width)] mx-auto flex items-center justify-between">
        {/* Logo and brand */}
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="Edulink.net" width={100} height={100} className="object-contain" />
        </Link>

        {/* Main navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-gray-600 hover:text-primary ${
                pathname === link.href ? "text-primary border-b-2 border-primary font-medium" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side controls */}
        <div className="flex items-center gap-4">
          {/* Language selector */}
          <LangSelector />

          {/* Search button */}
          <Image src={searchIcon} alt="Search" width={20} height={20} className="cursor-pointer" />

          {/* Notifications */}
          <NotificationComp />

          {/* User profile */}
          <ProfileComp />
        </div>
      </div>
    </header>
  );
}

"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useScroll } from "@/hooks/useScroll";

import logo from "@/assets/images/logo.png";
import ProfileComp from "./components/profileComp";
import LangSelector from "./components/langSelector";
import searchIcon from "@/assets/images/search.png";
import NotificationComp from "./components/notificationComp";
import ButtonComp from "../functional/buttonComp";
import { useAppSelector } from "@/app/store/store";
import MobileMenu from "./components/mobileMenu";

export default function Navbar() {
  const pathname = usePathname?.() || "/";
  const locale = useLocale();
  const router = useRouter();
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  const t = useTranslations("general");

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/universities", label: t("universities") },
    { href: "/programs", label: t("programs") },
    { href: "/tracker", label: t("tracker") },
    { href: "/blogs", label: t("blog") },
  ];

  const isActiveLink = (href: string) => {
    // Special case for home route
    if (href === "/") return pathname === `/${locale}` || pathname === "/";

    // Remove locale prefix from current pathname
    const pathWithoutLocale = pathname.replace(`/${locale}`, "");
    return pathWithoutLocale === href;
  };

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  useScroll({
    callback: () => {
      if (isMenuOpen) setIsMenuOpen(false);
    },
    enabled: isMenuOpen,
  });

  return (
    <header className="bg-white border-b border-gray-100 py-2 px-4 h-[var(--navbar-height)] flex items-center">
      <div className="max-w-[var(--app-max-width)] mx-auto flex items-center justify-between w-full relative">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-2">
          <Image src={logo} alt="Edulink.net" width={100} height={100} className="object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={`/${locale}${link.href}`}
              className={`text-gray-600 hover:text-primary ${
                isActiveLink(link.href) ? "text-primary border-b-2 border-primary font-medium" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Right Controls */}
        <div className="hidden md:flex items-center gap-4">
          <LangSelector />
          <Image
            src={searchIcon}
            alt="Search"
            width={20}
            height={20}
            className="cursor-pointer"
            onClick={() => router.push("/search")}
          />
          {isAuthenticated && (
            <>
              <NotificationComp />
              <ProfileComp />
            </>
          )}
          {!isAuthenticated && (
            <ButtonComp onClick={() => router.push("/auth")} className="rounded-lg">
              {t("login")}
            </ButtonComp>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <button className="md:hidden p-2 flex flex-col gap-1.5" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className={`block w-6 h-0.5 bg-gray-600 transition-transform ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-600 ${isMenuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-600 transition-transform ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>

        {/* Mobile Menu Component */}
        <MobileMenu
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          navLinks={navLinks}
          isActiveLink={isActiveLink}
          isAuthenticated={isAuthenticated}
          onLoginClick={() => router.push("/auth")}
        />
      </div>
    </header>
  );
}

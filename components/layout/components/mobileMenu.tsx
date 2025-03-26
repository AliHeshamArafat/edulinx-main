import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import LangSelector from "./langSelector";
import ButtonComp from "../../functional/buttonComp";

interface MobileMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
  navLinks: Array<{ href: string; label: string }>;
  isActiveLink: (href: string) => boolean;
  isAuthenticated: boolean;
  onLoginClick: () => void;
}

export default function MobileMenu({
  isMenuOpen,
  setIsMenuOpen,
  navLinks,
  isActiveLink,
  isAuthenticated,
  onLoginClick,
}: MobileMenuProps) {
  const t = useTranslations("general");

  return (
    <div
      className={`
        md:hidden fixed inset-0 top-[var(--navbar-height)] bg-white z-50 transition-transform duration-300
        ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
      `}
    >
      <div className="p-4 flex flex-col h-full">
        {/* Navigation Links */}
        <nav className="space-y-4 mb-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={`/${link.href}`}
              className={`block py-2 px-4 text-lg ${
                isActiveLink(link.href) ? "text-primary font-medium bg-primary/5 rounded-lg" : "text-gray-600"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <Link href={`/search`} className="block py-2 px-4 text-lg text-gray-600" onClick={() => setIsMenuOpen(false)}>
            {t("search")}
          </Link>
          {isAuthenticated && (
            <Link href={`/profile`} className="block py-2 px-4 text-lg text-gray-600" onClick={() => setIsMenuOpen(false)}>
              {t("profile")}
            </Link>
          )}
        </nav>

        {/* Mobile Controls */}
        <div className="border-t border-gray-100 pt-4 space-y-4">
          <div className="px-4">
            <LangSelector />
          </div>

          {!isAuthenticated && (
            <div className="px-4">
              <ButtonComp
                onClick={() => {
                  onLoginClick();
                  setIsMenuOpen(false);
                }}
                className="w-full rounded-lg"
              >
                Login
              </ButtonComp>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

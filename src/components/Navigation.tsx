"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "./Button";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center px-4 mx-auto">
        <div className="mr-4 flex">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">Your App</span>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="#features"
              className="text-sm font-medium transition-colors hover:text-blue-600"
            >
              Features
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium transition-colors hover:text-blue-600"
            >
              Testimonials
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium transition-colors hover:text-blue-600"
            >
              Pricing
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium transition-colors hover:text-blue-600"
            >
              Blog
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              Log In
            </Button>
            <Button size="sm">Sign Up</Button>
          </div>

          <button
            className="flex items-center space-x-2 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <span className="sr-only">Toggle Menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container flex flex-col space-y-3 py-4">
            <Link
              href="#features"
              className="text-sm font-medium transition-colors hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium transition-colors hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium transition-colors hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium transition-colors hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <div className="flex flex-col space-y-2 pt-2 border-t">
              <Button
                variant="ghost"
                className="justify-start"
                onClick={() => setIsMenuOpen(false)}
              >
                Log In
              </Button>
              <Button className="w-full" onClick={() => setIsMenuOpen(false)}>
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

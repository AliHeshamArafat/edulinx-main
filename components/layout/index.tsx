import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-var(--navbar-height))]">{children}</div>
      <Footer />
    </div>
  );
}

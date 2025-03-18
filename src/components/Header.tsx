"use client";
import Link from "next/link";
import styles from "./Header.module.css";
import logo from "../../logo.png";
import { useState } from "react";

interface HeaderProps {
  transparent?: boolean;
}

export default function Header({ transparent = false }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className={`${styles.header} ${transparent ? styles.transparent : ""}`}
    >
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <img src={logo.src} alt="Edulinx Logo" />
          </Link>
        </div>

        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/" className={styles.navLink}>
                Home
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/courses" className={styles.navLink}>
                Courses
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/about" className={styles.navLink}>
                About Us
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/contact" className={styles.navLink}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.auth}>
          <Link href="/login" className={styles.loginBtn}>
            Log in
          </Link>
          <Link href="/signup" className={styles.signupBtn}>
            Sign up
          </Link>
        </div>

        <button
          className={styles.mobileMenuBtn}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          <ul className={styles.mobileNavList}>
            <li className={styles.mobileNavItem}>
              <Link
                href="/"
                className={styles.mobileNavLink}
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li className={styles.mobileNavItem}>
              <Link
                href="/courses"
                className={styles.mobileNavLink}
                onClick={toggleMenu}
              >
                Courses
              </Link>
            </li>
            <li className={styles.mobileNavItem}>
              <Link
                href="/about"
                className={styles.mobileNavLink}
                onClick={toggleMenu}
              >
                About Us
              </Link>
            </li>
            <li className={styles.mobileNavItem}>
              <Link
                href="/contact"
                className={styles.mobileNavLink}
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className={styles.mobileAuth}>
            <Link
              href="/login"
              className={styles.mobileLoginBtn}
              onClick={toggleMenu}
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className={styles.mobileSignupBtn}
              onClick={toggleMenu}
            >
              Sign up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

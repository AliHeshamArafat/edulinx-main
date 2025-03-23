import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import instagramIcon from '@/assets/images/instagram.png';
import telegramIcon from '@/assets/images/telegram.png';
import tiktokIcon from '@/assets/images/tiktok.png';
import youtubeIcon from '@/assets/images/youtube.png';

// Define social media links as an array
const socialLinks = [
  { href: "https://instagram.com", icon: instagramIcon, alt: "Instagram" },
  { href: "https://telegram.org", icon: telegramIcon, alt: "Telegram" },
  { href: "https://tiktok.com", icon: tiktokIcon, alt: "TikTok" },
  { href: "https://youtube.com", icon: youtubeIcon, alt: "YouTube" }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white py-4 h-[116px] flex items-center justify-center">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div>
          <p>©{currentYear} All rights reserved</p>
        </div>
        
        <div className="flex space-x-6">
          {socialLinks.map((link, index) => (
            <Link key={index} href={link.href} aria-label={link.alt}>
              <Image 
                src={link.icon} 
                alt={link.alt} 
                width={24} 
                height={24}
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

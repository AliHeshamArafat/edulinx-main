'use client';

import Image from "next/image";
import { RightOutlined } from "@ant-design/icons";
import Breadcrumb from "@/assets/images/Home.png";
import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <div className="flex items-center gap-2 my-6">
      <Link href="/">
        <Image src={Breadcrumb} alt="breadcrumb" width={10} height={10} />
      </Link>
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <RightOutlined className="w-2 h-2" style={{ color: "#999" }} />
          {item.href ? (
            <Link href={item.href} className="text-sm text-gray-600 hover:text-primary">
              {item.label}
            </Link>
          ) : (
            <span className="text-sm text-gray-600">{item.label}</span>
          )}
        </div>
      ))}
    </div>
  );
} 
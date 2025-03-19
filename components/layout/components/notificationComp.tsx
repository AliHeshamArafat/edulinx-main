"use client";
import notificationIcon from "@/assets/images/notification.png";
import Image from "next/image";

export default function NotificationComp() {
  return <Image src={notificationIcon} alt="Notifications" width={20} height={20} className="cursor-pointer" />;
}

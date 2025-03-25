"use client";

import { useGetProfile } from "@/hooks/apis";
import power from "@/assets/images/power.png";
import Image from "next/image";
import ProfileHeader from "./profileHeader";
import { ProfileData } from "@/types/auth";
import lock from "@/assets/images/lock.png";
import avatar from "@/assets/images/avatar.png";
import graduation from "@/assets/images/grad.png";
import heart from "@/assets/images/heart.png";
import clock from "@/assets/images/clock.png";
import guard from "@/assets/images/guard.png";
import bell from "@/assets/images/bell.png";
import { logoutAction } from "@/app/store/actions/authActions";

interface ProfileSidebarProps {
  activeSection: string;
  onSectionChange: (section: any) => void;
}

export default function ProfileSidebar({ activeSection, onSectionChange }: ProfileSidebarProps) {
  const { data: profile, isLoading, refetch } = useGetProfile();

  const menuItems = [
    {
      title: "General",
      items: [
        { id: "personal", label: "Personal Data", icon: avatar },
        { id: "password", label: "Change Password", icon: lock },
        { id: "preferences", label: "Preferences and Interests", icon: graduation },
        { id: "favorites", label: "Favorite", icon: heart },
        { id: "history", label: "Activity History", icon: clock },
      ],
    },
    {
      title: "Settings",
      items: [
        { id: "privacy", label: "Privacy & Policy", icon: guard },
        { id: "notifications", label: "Notification", icon: bell },
      ],
    },
  ];

  // if (!profile?.data) return null;

  return (
    <div className="bg-white rounded-lg p-6">
      {/* Profile Header */}
      <ProfileHeader profile={profile?.data as ProfileData} loading={isLoading} refetch={refetch} />

      {/* Menu Items */}
      <div className="space-y-6">
        {menuItems.map((section) => (
          <div key={section.title}>
            <h3 className="text-sm text-gray-500 mb-2">{section.title}</h3>
            <div className="space-y-1">
              {section.items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onSectionChange(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg text-left transition-colors text-sm cursor-pointer ${
                    activeSection === item.id ? "bg-primary text-white" : "hover:bg-gray-50 text-primary"
                  }`}
                >
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={35}
                    height={35}
                    className={activeSection === item.id ? "" : ""}
                  />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        ))}

        {/* Logout Button */}
        <button
          onClick={() => logoutAction(true)}
          className="w-full flex items-center gap-3 px-4 py-2 text-primary hover:bg-gray-50 rounded-lg cursor-pointer"
        >
          <Image src={power} alt="Logout" width={30} height={30} className="text-primary" />
          <span>Log Out</span>
        </button>
      </div>
    </div>
  );
}

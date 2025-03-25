"use client";

import { useAppSelector } from "@/app/store/store";
import lock from "@/assets/images/lock.png";
import power from "@/assets/images/power.png";
import Image from "next/image";

interface ProfileSidebarProps {
  activeSection: string;
  onSectionChange: (section: any) => void;
}

export default function ProfileSidebar({ activeSection, onSectionChange }: ProfileSidebarProps) {
  const { user } = useAppSelector((state) => state.auth);

  const menuItems = [
    {
      title: "General",
      items: [
        { id: "personal", label: "Personal Data", icon: lock },
        { id: "password", label: "Change Password", icon: lock },
        { id: "preferences", label: "Preferences and Interests", icon: lock },
        { id: "favorites", label: "Favorite", icon: lock },
        { id: "history", label: "Activity History", icon: lock },
      ],
    },
    {
      title: "Settings",
      items: [
        { id: "privacy", label: "Privacy & Policy", icon: lock },
        { id: "notifications", label: "Notification", icon: lock },
      ],
    },
  ];

  return (
    <div className="bg-white rounded-lg p-6">
      {/* Profile Header */}
      <div className="flex flex-col items-center mb-6">
        <div className="relative w-24 h-24 mb-3">
          <Image src={user?.photo || "/placeholder-avatar.png"} alt={user?.fullName} fill className="rounded-full object-cover" />
        </div>
        <h2 className="text-lg font-semibold">{user?.fullName}</h2>
      </div>

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
                  className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg text-left transition-colors ${
                    activeSection === item.id ? "bg-primary text-white" : "hover:bg-gray-50"
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
          onClick={() => {
            /* Add logout logic */
          }}
          className="w-full flex items-center gap-3 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg"
        >
          <Image src={power} alt="Logout" width={30} height={30} className="text-red-600" />
          <span>Log Out</span>
        </button>
      </div>
    </div>
  );
}

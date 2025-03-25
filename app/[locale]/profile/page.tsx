"use client";

import ProfileSidebar from "./components/profileSidebar";
import ChangePassword from "./components/tabs/changePassword";
import PersonalData from "./components/tabs/personalData";
import { useState } from "react";

type ProfileSection = "personal" | "password" | "preferences" | "favorites" | "history" | "privacy" | "notifications";

export default function Profile() {
  const [activeSection, setActiveSection] = useState<ProfileSection>("personal");

  return (
    <div className="main-container !py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="md:col-span-1">
          <ProfileSidebar activeSection={activeSection} onSectionChange={setActiveSection} />
        </div>

        {/* Main Content */}
        <div className="md:col-span-3">
          {activeSection === "personal" && <PersonalData />}
          {activeSection === "password" && <ChangePassword />}
          {/* Add other sections as needed */}
        </div>
      </div>
    </div>
  );
}

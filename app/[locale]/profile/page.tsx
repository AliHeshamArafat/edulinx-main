"use client";

import ProfileSidebar from "./components/profileSidebar";
import ChangePassword from "./components/tabs/changePassword";
import PersonalData from "./components/tabs/personalData";
import { useState } from "react";
import Preferences from "./components/tabs/preferences";
import Favourites from "./components/tabs/favourites";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PrivacyPolicy from "./components/tabs/privacyPolicy";
import Notifications from "./components/tabs/notifications";
type ProfileSection = "personal" | "password" | "preferences" | "favorites" | "history" | "privacy" | "notifications";

export default function Profile() {
  const [activeSection, setActiveSection] = useState<ProfileSection>("personal");

  const breadcrumb = [{ label: "Profile", href: "" }];

  return (
    <div className="main-container !py-8">
      <div className="ml-6 -mt-8">
        <Breadcrumbs items={breadcrumb} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="md:col-span-1">
          <ProfileSidebar activeSection={activeSection} onSectionChange={setActiveSection} />
        </div>

        {/* Main Content */}
        <div className="md:col-span-3">
          {activeSection === "personal" && <PersonalData />}
          {activeSection === "password" && <ChangePassword />}
          {activeSection === "preferences" && <Preferences />}
          {activeSection === "favorites" && <Favourites />}
          {activeSection === "privacy" && <PrivacyPolicy />}
          {activeSection === "notifications" && <Notifications />}
          {/* Add other sections as needed */}
        </div>
      </div>
    </div>
  );
}

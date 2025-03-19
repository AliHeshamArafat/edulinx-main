"use client";
import { Avatar, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

export default function ProfileComp() {
  const items = [
    {
      key: "profile",
      label: "Profile",
    },
    {
      key: "settings",
      label: "Settings",
    },
    {
      key: "logout",
      label: "Logout",
      onClick: () => {
        // logout();
      },
    },
  ];

  return (
    <Dropdown menu={{ items }}>
      <div className="flex items-center gap-2 cursor-pointer">
        <Avatar size="small" src="/avatar.jpg" />
        <span className="text-sm hidden md:inline">Hi, Biarly</span>
        <DownOutlined className="text-xs" />
      </div>
    </Dropdown>
  );
}

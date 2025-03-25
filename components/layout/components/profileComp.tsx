"use client";
import { Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { logoutAction } from "@/app/store/actions/authActions";
import { useAppSelector } from "@/app/store/store";
import { useRouter } from "next/navigation";

export default function ProfileComp() {
  const { user } = useAppSelector((state) => state.auth);
  const router = useRouter();

  const items = [
    {
      key: "profile",
      label: "Profile",
      onClick: () => router.push("/profile"),
    },
    {
      key: "logout",
      label: "Logout",
      onClick: () => {
        logoutAction();
        router.push("/");
      },
    },
  ];

  return (
    <Dropdown menu={{ items }}>
      <div className="flex items-center gap-2 cursor-pointer">
        {/* <Avatar size="small" src="/avatar.jpg" /> */}
        <span className="text-sm hidden md:inline">Hi, {user?.fullName}</span>
        <DownOutlined className="text-xs" />
      </div>
    </Dropdown>
  );
}

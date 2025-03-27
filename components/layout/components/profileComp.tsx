"use client";
import { Dropdown, Avatar } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { logoutAction } from "@/app/store/actions/authActions";
import { useAppSelector } from "@/app/store/store";
import { useRouter } from "next/navigation";
import { getImageUrl } from "@/services/general";
import { useTranslations } from "next-intl";
export default function ProfileComp() {
  const { user } = useAppSelector((state) => state.auth);
  const router = useRouter();
  const t = useTranslations("general");

  const items = [
    {
      key: "profile",
      label: t("profile"),
      onClick: () => router.push("/profile"),
    },
    {
      key: "logout",
      label: t("logout"),
      onClick: () => {
        logoutAction();
        router.push("/");
      },
    },
  ];

  return (
    <Dropdown menu={{ items }}>
      <div className="flex items-center gap-2 cursor-pointer">
        <Avatar size="default" src={getImageUrl(user?.profilePicturePath)} />
        <span className="text-sm hidden md:inline">{t("hi")}, {user?.fullName}</span>
        <DownOutlined className="text-xs" />
      </div>
    </Dropdown>
  );
}

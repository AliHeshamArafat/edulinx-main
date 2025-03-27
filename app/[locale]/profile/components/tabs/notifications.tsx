"use client";

import { Switch } from "antd";
import { useState } from "react";
import { UPDATE_PROFILE } from "@/apis";
import { useGetProfile } from "@/hooks/apis";
import { useTranslations } from "next-intl";

export default function Notifications() {
  const t = useTranslations("general");
  const { data: profile, refetch } = useGetProfile();

  const [loading, setLoading] = useState({
    status: false,
    deadlines: false,
    recommendations: false,
  });

  const handleToggle = async (key: string, checked: boolean) => {
    setLoading((prev) => ({ ...prev, [key]: true }));

    UPDATE_PROFILE({
      data: {
        ...profile?.data,
        [key]: checked,
      },
    })
      .then(() => refetch())
      .finally(() => setLoading((prev) => ({ ...prev, [key]: false })));
  };

  const notificationItems = [
    {
      key: "notificationStatus",
      title: t("receive_notifications_for_status_updates"),
      description: t("receive_notifications_for_status_updates_description"),
      checked: profile?.data?.notificationStatus,
    },
    {
      key: "notificationDdl",
      title: t("receive_notifications_for_deadlines"),
      description: t("receive_notifications_for_deadlines_description"),
      checked: profile?.data?.notificationDdl,
    },
    {
      key: "notificationRecommendation",
      title: t("receive_notifications_for_program_recommendations"),
      description: t("receive_notifications_for_program_recommendations_description"),
      checked: profile?.data?.notificationRecommendation,
    },
  ];

  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-6">{t("preferences")}</h2>

      <div className="space-y-6">
        {notificationItems.map((item) => (
          <div key={item.key} className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
            <Switch
              checked={item.checked}
              onChange={(checked) => handleToggle(item.key, checked)}
              loading={loading[item.key as keyof typeof loading]}
              className={item.checked ? "bg-primary" : ""}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

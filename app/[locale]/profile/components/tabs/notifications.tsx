"use client";

import { Switch } from "antd";
import { useState } from "react";
import { UPDATE_PROFILE } from "@/apis";
import { useGetProfile } from "@/hooks/apis";

export default function Notifications() {
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
      title: "Receive notifications for status updates",
      description: "Receive notifications for status updates, deadlines, or program recommendations.",
      checked: profile?.data?.notificationStatus,
    },
    {
      key: "notificationDdl",
      title: "Receive notifications for deadlines",
      description: "Receive notifications for status updates, deadlines, or program recommendations.",
      checked: profile?.data?.notificationDdl,
    },
    {
      key: "notificationRecommendation",
      title: "Receive notifications for program recommendations",
      description: "Receive notifications for status updates, deadlines, or program recommendations.",
      checked: profile?.data?.notificationRecommendation,
    },
  ];

  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-6">Preferences</h2>

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

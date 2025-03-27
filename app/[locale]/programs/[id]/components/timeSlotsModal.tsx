"use client";

import { useGetTimeSlots } from "@/hooks/apis";
import React, { useState } from "react";
import dayjs from "dayjs";
import ButtonComp from "@/components/functional/buttonComp";
import { CREATE_STUDENT_APPLICATION } from "@/apis";
import { useAppSelector } from "@/app/store/store";
import SuccessModal from "./successModal";
import CalendarSection from "./calendarSection";
import { useTranslations, useLocale } from "next-intl";
import 'dayjs/locale/ar'; // Import any additional locales you need

interface TimeSlot {
  uuid: string;
  dateCreated: string;
  startTime: string;
  endTime: string;
  occupied: boolean;
}

interface TimeSlotsModalProps {
  programUuid: string;
  hideModal: () => void;
}

type ModalType = "TIME_SLOTS" | "SUCCESS";

export default function TimeSlotsModal({ programUuid, hideModal }: TimeSlotsModalProps) {
  const locale = useLocale();
  const { data } = useGetTimeSlots();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const [modalType, setModalType] = useState<ModalType>("TIME_SLOTS");
  const t = useTranslations("general");

  const { user } = useAppSelector((state) => state.auth);
  const timeSlots = data?.data?.result || [];

  // Set dayjs locale
  dayjs.locale(locale);

  const getAvailableTimeSlotsForDate = (date: Date) => {
    return timeSlots.filter((slot: TimeSlot) => {
      const slotDate = dayjs(slot.startTime);
      return slotDate.format("YYYY-MM-DD") === dayjs(date).format("YYYY-MM-DD") && !slot.occupied;
    });
  };

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
    setSelectedTimeSlot(null);
  };

  const handleConfirm = () => {
    if (!selectedTimeSlot || !programUuid) return;

    CREATE_STUDENT_APPLICATION({
      programUuid: programUuid,
      timeSlotUuid: selectedTimeSlot,
      studentUuid: user?.uuid,
    }).then((res) => {
      if (!res?.success) return;
      setModalType("SUCCESS");
    });
  };

  const handleDone = () => {
    hideModal();
    // setModalType("TIME_SLOTS");
  };

  if (modalType === "SUCCESS") return <SuccessModal onDone={handleDone} />;

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-6">{t("available_time_slots")}</h2> 

      <div className="grid md:grid-cols-2 gap-6">
        {/* Calendar */}
        <div>
          <h3 className="text-sm font-medium mb-2">{t("select_date")}</h3>
          <CalendarSection timeSlots={timeSlots} handleChange={handleDateChange} />
        </div>

        {/* Time Slots */}
        <div>
          <h3 className="text-sm font-medium mb-2">{t("select_time")}</h3>
          {selectedDate && (
            <div className="space-y-2">
              <p className="text-sm text-gray-600 mb-4">{dayjs(selectedDate).format("MMMM D, YYYY")}</p>
              <div className="space-y-2">
                {getAvailableTimeSlotsForDate(selectedDate).map((slot: TimeSlot) => (
                  <div
                    key={slot.uuid}
                    className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                      selectedTimeSlot === slot.uuid
                        ? "bg-primary text-white border-primary"
                        : "bg-white border-gray-200 hover:border-primary"
                    }`}
                    onClick={() => setSelectedTimeSlot(slot.uuid)}
                  >
                    <div className="flex items-center justify-between">
                      <span>
                        {dayjs(slot.startTime).format("hh:mm a")} - {dayjs(slot.endTime).format("hh:mm a")}
                      </span>
                      <span className="text-sm">{t("available")}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <ButtonComp disabled={!selectedTimeSlot} className="rounded-lg md:w-[350px]" onClick={handleConfirm}>
          {t("confirm")}
        </ButtonComp>
      </div>
    </div>
  );
}

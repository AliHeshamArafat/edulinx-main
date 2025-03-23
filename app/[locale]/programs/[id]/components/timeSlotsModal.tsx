"use client";

import { useGetTimeSlots } from "@/hooks/apis";
import React, { useState } from "react";
import { Calendar, TimePicker, Button } from "antd";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import ButtonComp from "@/components/functional/buttonComp";
import { CREATE_STUDENT_APPLICATION } from "@/apis";

interface TimeSlot {
  uuid: string;
  dateCreated: string;
  startTime: string;
  endTime: string;
  occupied: boolean;
}

interface TimeSlotsModalProps {
  programUuid: string;
}

export default function TimeSlotsModal({ programUuid }: TimeSlotsModalProps) {
  const { data } = useGetTimeSlots();
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);

  const timeSlots = data?.data?.result || [];

  const getAvailableTimeSlotsForDate = (date: Dayjs) => {
    return timeSlots.filter((slot: TimeSlot) => {
      const slotDate = dayjs(slot.startTime);
      return slotDate.format("YYYY-MM-DD") === date.format("YYYY-MM-DD") && !slot.occupied;
    });
  };

  const onDateSelect = (date: Dayjs) => {
    setSelectedDate(date);
    setSelectedTimeSlot(null);
  };

  const handleConfirm = () => {
    console.log("selectedTimeSlot", selectedTimeSlot);

    if (!selectedTimeSlot || !programUuid) return;

    CREATE_STUDENT_APPLICATION({
      programUuid: programUuid,
      timeSlotUuid: selectedTimeSlot,
      studentUuid: "",
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-6">Available Time Slots</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Calendar */}
        <div>
          <h3 className="text-sm font-medium mb-2">Select Date</h3>
          <Calendar
            fullscreen={false}
            onSelect={onDateSelect}
            mode="month"
            disabledDate={(current) => {
              // Disable dates before today and dates with no available slots
              return (
                current.isBefore(dayjs(), "day") ||
                !timeSlots.some((slot: TimeSlot) => dayjs(slot.startTime).format("YYYY-MM-DD") === current.format("YYYY-MM-DD"))
              );
            }}
          />
        </div>

        {/* Time Slots */}
        <div>
          <h3 className="text-sm font-medium mb-2">Select Time</h3>
          {selectedDate && (
            <div className="space-y-2">
              <p className="text-sm text-gray-600 mb-4">{selectedDate.format("MMMM D, YYYY")}</p>
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
                      <span className="text-sm">Available</span>
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
          Confirm
        </ButtonComp>
      </div>
    </div>
  );
}

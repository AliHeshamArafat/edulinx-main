import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs";

interface TimeSlot {
  uuid: string;
  dateCreated: string;
  startTime: string;
  endTime: string;
  occupied: boolean;
  handleChange: (date: Date) => void;
}

export default function CalendarSection({
  timeSlots,
  handleChange,
}: {
  timeSlots: TimeSlot[];
  handleChange: (date: Date) => void;
}) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  return (
    <div className="w-full rounded-lg p-4 custom-shadow">
      <DatePicker
        selected={selectedDate}
        onChange={(date: any) => {
          setSelectedDate(date);
          handleChange(date);
        }}
        inline
        minDate={new Date()}
        filterDate={(date: Date) => {
          // Filter dates that have available slots
          return timeSlots.some(
            (slot: TimeSlot) =>
              dayjs(slot.startTime).format("YYYY-MM-DD") === dayjs(date).format("YYYY-MM-DD") &&
              !slot.occupied
          );
        }}
        calendarClassName="!border-gray-200 !font-sans"
      />

      <style>{`
        .react-datepicker {
          border: none;
          width: 100%;
          background-color: transparent;
        }
        .react-datepicker__header {
          border-bottom: none;
          width: 100%;
          background-color: transparent;
        }
        .react-datepicker__month {
          width: 100%;
          margin: 0;
        }
        .react-datepicker__month-container {
          width: 100%;
        }
        .react-datepicker__week,
        .react-datepicker__day-names {
          display: flex;
          justify-content: space-between;
          padding: 0 12px;
        }
        .react-datepicker__day-name {
          margin: 0;
          margin-top: 20px;
          color: rgba(60, 60, 67, 0.60);
          width: 36px;
          text-align: center;
        }
        .react-datepicker__day {
          width: 36px;
          height: 36px;
          line-height: 36px;
          margin: 0;
          text-align: center;
        }
        .react-datepicker__day--selected,
        .react-datepicker__day--in-range,
        .react-datepicker__day--in-selecting-range {
          background-color: var(--color-primary) !important;
          color: #fff !important;
          border-radius: 50% !important;
        }
        .react-datepicker__day--range-start,
        .react-datepicker__day--range-end,
        .react-datepicker__day--selecting-range-start,
        .react-datepicker__day--selecting-range-end {
          background-color: var(--color-primary) !important;
          color: #fff !important;
          border-radius: 50% !important;
          }
        .react-datepicker__day--in-range:hover,
        .react-datepicker__day--in-selecting-range:hover {
          background-color: var(--color-primary) !important;
          opacity: 0.8;
          border-radius: 50% !important;
        }
        .react-datepicker__day:hover {
          border-radius: 50% !important;
        }
        .react-datepicker__day--disabled {
          color: #ccc !important;
          background-color: transparent !important;
        }
        .react-datepicker__day--disabled:hover {
          background-color: transparent !important;
        }
      `}</style>
    </div>
  );
}

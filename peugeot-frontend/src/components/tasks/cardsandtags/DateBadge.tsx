// src/components/tasks/cardsandtags/DateBadge.tsx

import { BsFillCalendarWeekFill } from "react-icons/bs";

interface DateBadgeProps {
  dateLabel: string;
  late?: boolean;
}

const DateBadge = ({ dateLabel, late }: DateBadgeProps) => {
  const baseColor = late ? "#AF0505" : "#646570";
  const bgColor = late ? "#DDA9A9" : "#E0E0E0";

  return (
    <div
      className="flex items-center gap-2 px-2 py-1 rounded"
      style={{ backgroundColor: bgColor }}
    >
      <BsFillCalendarWeekFill size={16} color={baseColor} />
      <span
        className="text-[13.33px] font-semibold"
        style={{ color: baseColor }}
      >
        {dateLabel}
      </span>
    </div>
  );
};

export default DateBadge;
// src/components/tasks/dropdown/DropdownItem.tsx

import React from "react";

interface DropdownItemProps {
  label: string;
  icon: React.ReactNode;
  variant?: "default" | "danger";
  onClick?: () => void;
}

const DropdownItem: React.FC<DropdownItemProps> = ({
  label,
  icon,
  variant = "default",
  onClick,
}) => {
  const isDanger = variant === "danger";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        w-[185px] h-[40px]
        flex items-center gap-2
        p-2
        text-left

        transition-colors
        duration-300
        ease-out

        bg-[#252628]
        hover:bg-[#4E4E4E]
        active:bg-[#343333]
      `}
    >
      <span
        className="flex items-center justify-center w-4 h-4 border"
        style={{
          color: isDanger ? "#AF0505" : "#FFFFFF",
          borderColor: isDanger ? "#AF0505" : "#FFFFFF",
        }}
      >
        {icon}
      </span>

      <span
        className="font-normal text-base"
        style={{
          fontFamily: "Poppins, sans-serif",
          color: isDanger ? "#AF0505" : "#FFFFFF",
        }}
      >
        {label}
      </span>
    </button>
  );
};

export default DropdownItem;

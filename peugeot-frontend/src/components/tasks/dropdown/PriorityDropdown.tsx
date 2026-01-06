// src/components/tasks/dropdown/PriorityDropdown.tsx

import { useState } from "react";
import { BsCaretDownFill } from "react-icons/bs";

import DropdownItem from "./DropdownItem";
import PriorityTag from "./PriorityTag";
import type { Priority } from "../../../types/priority";
import { BsArrowDown, BsDash, BsArrowUp, BsExclamation } from "react-icons/bs";

const PRIORITY_ITEM_CONFIG: Record<
  Priority,
  { label: string; icon: React.ReactNode }
> = {
  low: {
    label: "Baixa Prioridade",
    icon: <BsArrowDown size={12} />,
  },
  medium: {
    label: "Média Prioridade",
    icon: <BsDash size={12} />,
  },
  high: {
    label: "Alta Prioridade",
    icon: <BsArrowUp size={12} />,
  },
  superHigh: {
    label: "Altíssima Prioridade",
    icon: <BsExclamation size={12} />,
  },
};

interface PriorityDropdownProps {
  value: Priority;
  onChange: (priority: Priority) => void;
}

const PRIORITIES: Priority[] = ["low", "medium", "high", "superHigh"];

const PriorityDropdown = ({ value, onChange }: PriorityDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);
  const close = () => setIsOpen(false);

  return (
    <div className="relative w-[205px]">
      {/* Trigger */}
      <button
        type="button"
        onClick={toggle}
        className="
          w-full h-[36px]
          flex items-center justify-between
          px-2 py-1
          border border-[#4E4E4E]
          rounded
          bg-[#252628]
        "
      >
        <PriorityTag priority={value} />

        <BsCaretDownFill
          className={`
            text-white text-[12px]
            transition-transform duration-300
            ${isOpen ? "rotate-180" : ""}
          `}
        />
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          className="
            absolute left-0 top-[40px]
            w-full
            bg-[#252628]
            rounded
            overflow-hidden
            z-50
          "
        >
          {PRIORITIES.map((priority) => {
            const config = PRIORITY_ITEM_CONFIG[priority];

            return (
                <DropdownItem
                key={priority}
                label={config.label}
                icon={config.icon}
                onClick={() => {
                    onChange(priority);
                    close();
                }}
                />
            );
            })}
        </div>
      )}
    </div>
  );
};

export default PriorityDropdown;
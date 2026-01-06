// src/components/tasks/button/CloseTaskButton.tsx

import { BsArrowBarRight } from "react-icons/bs";

interface CloseTaskButtonProps {
  onClick?: () => void;
  className?: string;
}

const CloseTaskButton = ({
  onClick,
  className = "",
}: CloseTaskButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Close task"
      className={`
        group
        inline-flex items-center justify-center

        w-8 h-8
        p-1

        rounded-sm
        border border-transparent
        bg-transparent

        text-[#5B5B5B]

        transition-colors duration-300 ease-out

        hover:text-[#4E4E4E]
        active:text-[#343333]

        ${className}
      `}
    >
      <BsArrowBarRight
        className="
          w-4 h-4
          transition-transform duration-300 ease-out
          group-hover:translate-x-0.5
        "
      />
    </button>
  );
};

export default CloseTaskButton;

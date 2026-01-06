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
      onClick={onClick}
      aria-label="Close task"
      className={`
        flex items-center justify-center
        w-8 h-8
        rounded-[2px]
        p-1
        border border-white
        bg-white
        transition-colors
        duration-300
        ease-out

        hover:bg-[#4E4E4E]
        active:bg-[#343333]

        ${className}
      `}
    >
      <BsArrowBarRight
        className="w-[16.5px] h-[21px] text-black"
      />
    </button>
  );
};

export default CloseTaskButton;

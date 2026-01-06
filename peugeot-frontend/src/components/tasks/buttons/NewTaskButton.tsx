// src/components/tasks/buttons/NewTaskButton.tsx

import { BsFillPlusCircleFill } from "react-icons/bs";

interface NewTaskButtonProps {
  onClick?: () => void;
  className?: string;
}

const NewTaskButton = ({
  onClick,
  className = "",
}: NewTaskButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center gap-2
        w-[152px] h-11
        px-[10px]
        rounded
        transition-colors
        duration-300
        ease-out

        hover:bg-[#4E4E4E]

        ${className}
      `}
    >
      {/* Icon */}
      <BsFillPlusCircleFill className="w-5 h-5 text-white" />

      {/* Text */}
      <span
        className="
          text-base
          font-semibold
          leading-none
          text-white
        "
      >
        Nova tarefa
      </span>
    </button>
  );
};

export default NewTaskButton;

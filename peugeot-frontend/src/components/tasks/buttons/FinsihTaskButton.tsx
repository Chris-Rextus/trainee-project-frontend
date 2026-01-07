// src/components/tasks/buttons/FinishTaskButton.tsx

import { BsCheck2 } from "react-icons/bs";

interface FinishTaskButtonProps {
  finished?: boolean;
  onClick?: () => void;
  className?: string;
}

const FinishTaskButton = ({
  finished = false,
  onClick,
  className = "",
}: FinishTaskButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={finished}
      className={`
        flex items-center gap-2
        h-10
        px-3
        rounded-xl
        transition-all
        duration-300
        ease-out
        select-none

        ${
          finished
            ? "w-[129px] cursor-default"
            : "w-[113px] hover:text-[#15C384]"
        }

        ${className}
      `}
    >
      <div
        className={`
          flex items-center justify-center
          w-8 h-8
          rounded-full
          border
          border-dashed
          p-1
          transition-colors
          duration-300
          ease-out

          ${
            finished
              ? "border-[#096343]"
              : "border-white hover:border-[#15C384]"
          }
        `}
      >
        <BsCheck2
          className={`
            w-[17.25px] h-[12px]
            transition-colors
            duration-300
            ease-out

            ${
              finished
                ? "text-[#096343]"
                : "text-white group-hover:text-[#15C384]"
            }
          `}
        />
      </div>

      <span
        className={`
          text-base
          font-normal
          leading-none
          transition-colors
          duration-300
          ease-out

          ${
            finished
              ? "text-[#096343]"
              : "text-white hover:text-[#15C384]"
          }
        `}
      >
        {finished ? "Finalizado" : "Finalizar"}
      </span>
    </button>
  );
};

export default FinishTaskButton;

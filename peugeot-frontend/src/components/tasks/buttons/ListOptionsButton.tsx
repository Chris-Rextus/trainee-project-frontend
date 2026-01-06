// src/components/tasks/buttons/ListOptions.tsx

import { BsThreeDots } from "react-icons/bs";

interface ListOptionsButtonProps {
  onClick?: () => void;
  className?: string;
}

const ListOptionsButton = ({
  onClick,
  className = "",
}: ListOptionsButtonProps) => {
  return (
    <button
      onClick={onClick}
      aria-label="List options"
      className={`
        flex items-center justify-center
        w-8 h-8
        p-1
        rounded-[2px]

        transition-colors
        duration-300
        ease-out

        hover:bg-[#4E4E4E]
        active:bg-[#343333]

        ${className}
      `}
    >
      <BsThreeDots
        className="w-[19.5px] h-[4.5px] text-white"
      />
    </button>
  );
};

export default ListOptionsButton;

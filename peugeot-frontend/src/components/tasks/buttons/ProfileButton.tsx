// src/components/tasks/buttons/ProfileButton.tsx

import { MdAccountCircle } from "react-icons/md";

interface ProfileButtonProps {
  name: string;
  onClick?: () => void;
  className?: string;
}

const ProfileButton = ({
  name,
  onClick,
  className = "",
}: ProfileButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center gap-2
        w-[128px] h-9
        px-4 py-1
        rounded-xl

        transition-colors
        duration-300
        ease-out

        hover:bg-[#4E4E4E]

        ${className}
      `}
    >
      {/* Icon */}
      <MdAccountCircle
        className="w-[23.33px] h-[23.33px] text-white"
      />

      {/* Name */}
      <span
        className="
          text-base
          font-semibold
          leading-none
          text-white
          truncate
        "
      >
        {name}
      </span>
    </button>
  );
};

export default ProfileButton;

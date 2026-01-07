// src/components/tasks/buttons/NotificationButton.tsx

import { BsBellFill } from "react-icons/bs";

interface NotificationButtonProps {
  hasNotification?: boolean;
  onClick?: () => void;
  className?: string;
}

const NotificationButton = ({
  hasNotification = false,
  onClick,
  className = "",
}: NotificationButtonProps) => {
  return (
    <button 
      onClick={onClick}
      aria-label="Notifications"
      className={`
        relative
        flex items-center justify-center
        w-8 h-[33px]
        rounded-[2px]
        p-1
        transition-colors
        duration-300
        ease-out

        hover:bg-[#4E4E4E]
        active:bg-[#343333]

        ${className}
      `}
    >
      <BsBellFill className="w-6 h-[25px] text-white" />

      {hasNotification && (
        <span
          className="
            absolute
            top-1
            right-[6px]
            w-2 h-2
            rounded-full
            bg-[#880000]
          "
        />
      )}
    </button>
  );
};

export default NotificationButton;

// src/components/tasks/other/Snackbar#Success.tsx

import { BsCheckCircleFill, BsXLg } from "react-icons/bs";

interface SuccessSnackbarProps {
  message: string;
  onClose?: () => void;
  className?: string;
}

const SuccessSnackbar = ({
  message,
  onClose,
  className = "",
}: SuccessSnackbarProps) => {
  return (
    <div
      className={`
        flex items-center justify-between
        w-[336px] h-10
        px-4 py-2
        gap-6
        rounded-xl
        border border-white/50
        bg-[#252628]

        ${className}
      `}
    >
      {/* Left: icon + message */}
      <div className="flex items-center gap-3">
        <BsCheckCircleFill className="w-5 h-5 text-[#029008]" />

        <span
          className="
            text-base
            font-normal
            leading-none
            text-[#029008]
          "
        >
          {message}
        </span>
      </div>

      {/* Close button */}
      {onClose && (
        <button
          onClick={onClose}
          aria-label="Close notification"
          className="flex items-center justify-center"
        >
          <BsXLg className="w-[14px] h-[14px] text-[#029008]" />
        </button>
      )}
    </div>
  );
};

export default SuccessSnackbar;

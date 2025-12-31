// src/components/login/Button.tsx

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  isLoading?: boolean;
  className?: string;
  icon?: React.ReactNode;
}


const Button = ({
  children,
  onClick,
  isLoading = false,
  className = "",
  icon,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className={`
        group
        w-full
        inline-flex items-center justify-center gap-2
        rounded-xl
        px-4 py-3
        text-sm font-semibold text-white
        bg-[#5B5B5B]
        shadow-md
        transition-all duration-200
        hover:bg-[#444444]
        hover:shadow-lg
        hover:-translate-y-0.5
        active:translate-y-0
        disabled:opacity-60 disabled:cursor-not-allowed
        ${className}
      `}
    >
      {/* Icon */}
      {icon && (
        <span
          className="
            transition-all duration-200
            group-hover:scale-110
            group-hover:text-blue-400
          "
        >
          {icon}
        </span>
      )}

      {isLoading ? "Loading..." : children}
    </button>
  );
};

export default Button;
// src/components/login/InputField.tsx

interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const InputField = ({
  type,
  placeholder,
  value,
  onChange,
  className = "",
}: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`
        w-full
        rounded-xl
        border border-gray-200
        bg-white/70
        px-4 py-3
        text-sm text-gray-900
        placeholder:text-gray-400
        shadow-sm
        backdrop-blur
        transition-all duration-200
        focus:outline-none
        focus:ring-2 focus:ring-blue-500
        focus:border-transparent
        focus:shadow-md
        ${className}
      `}
    />
  );
};

export default InputField
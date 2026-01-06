// src/components/tasks/texts/DescriptionTextBox

import React from "react";

interface DescriptionTextBoxProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  placeholder?: string;
}

const DescriptionTextBox = ({
  value,
  onChange,
  placeholder = "",
  className = "",
}: DescriptionTextBoxProps) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`
        w-[472px] h-[232px]
        p-2
        rounded
        border
        border-[#4E4E4E]
        resize-none

        text-base
        font-normal
        leading-none
        text-white
        bg-transparent

        transition-colors
        duration-300
        ease-out

        focus:outline-none
        focus:border-white

        ${className}
      `}
    />
  );
};

export default DescriptionTextBox;

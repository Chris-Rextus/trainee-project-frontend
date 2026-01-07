// src/components/tasks/texts/TaskDescriptionText.tsx

interface TaskDescriptionTextProps {
  text: string;
  fontSize?: number;
  maxLines?: number;
}

const TaskDescriptionText = ({
  text,
  fontSize = 16,
  maxLines = 4,
}: TaskDescriptionTextProps) => {
  return (
    <p
      className="
        text-white
        font-normal
        overflow-hidden
      "
      style={{
        fontFamily: "Poppins, sans-serif",
        fontSize,
        lineHeight: "100%",
        display: "-webkit-box",
        WebkitLineClamp: maxLines,
        WebkitBoxOrient: "vertical",
      }}
    >
      {text}
    </p>
  );
};

export default TaskDescriptionText;

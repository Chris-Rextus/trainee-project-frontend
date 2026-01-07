// src/components/tasks/task-card/TaskTitle.tsx

interface TaskTitleProps {
  title: string;
  mobile?: boolean;
}

const TaskTitle = ({ title, mobile }: TaskTitleProps) => {
  return (
    <h3
      className="font-semibold text-white truncate"
      style={{
        fontSize: mobile ? "16px" : "19.2px",
        lineHeight: "100%",
      }}
    >
      {title}
    </h3>
  );
};

export default TaskTitle;

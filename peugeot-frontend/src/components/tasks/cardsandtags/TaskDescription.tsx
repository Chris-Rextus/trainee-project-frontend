// src/components/tasks/task-card/TaskDescription.tsx

import TaskDescriptionText from "../text/TaskDescriptionText";

interface TaskDescriptionProps {
  description: string;
  mobile?: boolean;
}

const TaskDescription = ({ description, mobile }: TaskDescriptionProps) => {
  return (
    <TaskDescriptionText
      text={description}
      fontSize={mobile ? 13.33 : 16}
      maxLines={mobile ? 3 : 4}
    />
  );
};

export default TaskDescription;

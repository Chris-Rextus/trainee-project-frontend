// src/components/tasks/task-card/TaskCard.tsx

import type { Priority } from "../dropdown/PriorityTag";
import PriorityTag from "../dropdown/PriorityTag";
import FinishTaskButton from "../buttons/FinsihTaskButton";
import DateBadge from "../cardsandtags/DateBadge";
import TaskTitle from "./TaskTitle";
import TaskDescription from "./TaskDescription";

interface TaskCardProps {
  title: string;
  description: string;
  priority: Priority;
  dateLabel: string;
  late?: boolean;
  finished?: boolean;
  onFinish?: () => void;
}

const TaskCard = ({
  title,
  description,
  priority,
  dateLabel,
  late,
  finished = false,
  onFinish,
}: TaskCardProps) => {
  return (
    <div
      className="
        w-full
        p-6
        rounded-2xl
        border border-[#4E4E4E]
        bg-[#252628]
        flex flex-col
        gap-5
      "
    >
      <div className="flex items-start justify-between">
        <PriorityTag priority={priority} />

        <FinishTaskButton
          finished={finished}
          onClick={onFinish}
        />
      </div>

      <div className="flex flex-col gap-2">
        <TaskTitle title={title} />
        <TaskDescription description={description} />
      </div>

      <div className="flex justify-start">
        <DateBadge dateLabel={dateLabel} late={late} />
      </div>
    </div>
  );
};

export default TaskCard;

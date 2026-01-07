// src/components/tasks/cardsandtags/TaskListCard.tsx

import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import TaskCard from "./TaskCard";
import type { Task } from "../../../types/task";

interface TaskListCardProps {
  name: string;
  tasks: Task[];
}

const TaskListCard = ({ name, tasks }: TaskListCardProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
    className="
        w-[445px]
        flex-shrink-0
        p-4
        bg-[#252628]
        border border-[#4E4E4E]
        rounded-2xl
        flex flex-col gap-6
        relative
    "
    >
      <div className="relative flex items-center justify-between">
        <h2 className="text-white font-semibold text-lg">
          {name}
        </h2>

        <button
          onClick={() => setMenuOpen(prev => !prev)}
          className="
            p-1
            rounded
            hover:bg-[#343333]
            transition-colors
          "
        >
          <BsThreeDots size={20} className="text-white" />
        </button>

        {menuOpen && (
          <div
            className="
              absolute
              top-full
              right-0
              mt-2
              w-[126px]
              bg-[#252628]
              border border-[#4E4E4E]
              rounded-md
              py-2
              z-50
            "
          >
            <button
              className="
                w-full
                px-3 py-2
                text-sm
                text-white
                text-left
                hover:bg-[#343333]
                transition-colors
              "
              onClick={() => setMenuOpen(false)}
            >
              Renomear lista
            </button>

            <button
              className="
                w-full
                px-3 py-2
                text-sm
                text-left
                text-[#AF0505]
                hover:bg-[#343333]
                transition-colors
              "
              onClick={() => setMenuOpen(false)}
            >
              Excluir lista
            </button>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-4">
        {tasks.map(task => {
          const late =
            !task.finished &&
            new Date(task.dueDate) < new Date();

          return (
            <TaskCard
              key={task.id}
              title={task.title}
              description={task.description}
              priority={task.priority}
              dateLabel={new Date(task.dueDate).toLocaleDateString()}
              late={late}
              finished={task.finished}
              onFinish={() => console.log("Finish", task.id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TaskListCard;

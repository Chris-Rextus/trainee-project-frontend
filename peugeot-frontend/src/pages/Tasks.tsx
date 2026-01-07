// src/pages/Tasks.tsx

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/tasks/other/Navbar";
import TaskListCard from "../components/tasks/cardsandtags/TaskListCard";

import { logout } from "../utils/auth";
import { fetchTaskLists } from "../services/taskLists";
import type { TaskList } from "../types/taskList";

const Tasks = () => {
  const navigate = useNavigate();
  const [lists, setLists] = useState<TaskList[]>([]);

  useEffect(() => {
    document.title = "Tasks · Peugeot Tasks";

    const loadLists = async () => {
      const data = await fetchTaskLists();
      setLists(data);
    };

    loadLists();
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const userName = "John Doe";

  return (
    <div className="min-h-screen bg-[#252628]">
      <Navbar userName={userName} hasNotification onLogout={handleLogout} />

      <main
        className="
          p-6
          flex
          flex-nowrap
          gap-6
          overflow-x-auto
        "
      >
        {lists.map(list => (
          <TaskListCard
            key={list.id}
            name={list.name}
            tasks={list.tasks}
          />
        ))}
      </main>
    </div>
  );
};

export default Tasks;
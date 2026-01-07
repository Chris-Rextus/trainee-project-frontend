// src/services/taskLists.ts

import type { TaskList } from "../types/taskList";

export const fetchTaskLists = async (): Promise<TaskList[]> => {
  return [
    {
      id: "list-1",
      name: "A Fazer",
      tasks: [
        {
          id: "1",
          title: "Implement Priority Dropdown",
          description: "Finish implementing the priority dropdown component.",
          priority: "high",
          dueDate: "2026-01-10",
          finished: false,
        },
        {
          id: "2",
          title: "Fix overdue task",
          description: "This task is overdue and should visually indicate lateness.",
          priority: "superHigh",
          dueDate: "2026-01-03",
          finished: false,
        },
        {
          id: "3",
          title: "Fix overdue task",
          description: "This task is overdue and should visually indicate lateness.",
          priority: "superHigh",
          dueDate: "2026-01-03",
          finished: false,
        },
        {
          id: "4",
          title: "Fix overdue task",
          description: "This task is overdue and should visually indicate lateness.",
          priority: "superHigh",
          dueDate: "2026-01-03",
          finished: false,
        },
      ],
    },
    {
      id: "list-2",
      name: "Em Progresso",
      tasks: [
        {
          id: "3",
          title: "Refactor TaskCard layout",
          description: "Clean up the TaskCard layout and ensure mobile responsiveness looks acceptable.",
          priority: "medium",
          dueDate: "2026-01-12",
          finished: false,
        },
      ],
    },
    {
      id: "list-2",
      name: "Em Progresso",
      tasks: [
        {
          id: "3",
          title: "Refactor TaskCard layout",
          description: "Clean up the TaskCard layout and ensure mobile responsiveness looks acceptable.",
          priority: "medium",
          dueDate: "2026-01-12",
          finished: false,
        },
      ],
    },
    {
      id: "list-2",
      name: "Em Progresso",
      tasks: [
        {
          id: "3",
          title: "Refactor TaskCard layout",
          description: "Clean up the TaskCard layout and ensure mobile responsiveness looks acceptable.",
          priority: "medium",
          dueDate: "2026-01-12",
          finished: false,
        },
      ],
    },
    {
      id: "list-2",
      name: "Em Progresso",
      tasks: [
        {
          id: "3",
          title: "Refactor TaskCard layout",
          description: "Clean up the TaskCard layout and ensure mobile responsiveness looks acceptable.",
          priority: "medium",
          dueDate: "2026-01-12",
          finished: false,
        },
      ],
    },
    {
      id: "list-2",
      name: "Em Progresso",
      tasks: [
        {
          id: "3",
          title: "Refactor TaskCard layout",
          description: "Clean up the TaskCard layout and ensure mobile responsiveness looks acceptable.",
          priority: "medium",
          dueDate: "2026-01-12",
          finished: false,
        },
      ],
    },
    {
      id: "list-2",
      name: "Em Progresso",
      tasks: [
        {
          id: "3",
          title: "Refactor TaskCard layout",
          description: "Clean up the TaskCard layout and ensure mobile responsiveness looks acceptable.",
          priority: "medium",
          dueDate: "2026-01-12",
          finished: false,
        },
      ],
    },
    {
      id: "list-2",
      name: "Em Progresso",
      tasks: [
        {
          id: "3",
          title: "Refactor TaskCard layout",
          description: "Clean up the TaskCard layout and ensure mobile responsiveness looks acceptable.",
          priority: "medium",
          dueDate: "2026-01-12",
          finished: false,
        },
      ],
    },
    {
      id: "list-2",
      name: "Em Progresso",
      tasks: [
        {
          id: "3",
          title: "Refactor TaskCard layout",
          description: "Clean up the TaskCard layout and ensure mobile responsiveness looks acceptable.",
          priority: "medium",
          dueDate: "2026-01-12",
          finished: false,
        },
      ],
    },
    {
      id: "list-2",
      name: "Em Progresso",
      tasks: [
        {
          id: "3",
          title: "Refactor TaskCard layout",
          description: "Clean up the TaskCard layout and ensure mobile responsiveness looks acceptable.",
          priority: "medium",
          dueDate: "2026-01-12",
          finished: false,
        },
      ],
    },
    {
      id: "list-2",
      name: "Em Progresso",
      tasks: [
        {
          id: "3",
          title: "Refactor TaskCard layout",
          description: "Clean up the TaskCard layout and ensure mobile responsiveness looks acceptable.",
          priority: "medium",
          dueDate: "2026-01-12",
          finished: false,
        },
      ],
    },
    {
      id: "list-2",
      name: "Em Progresso",
      tasks: [
        {
          id: "3",
          title: "Refactor TaskCard layout",
          description: "Clean up the TaskCard layout and ensure mobile responsiveness looks acceptable.",
          priority: "medium",
          dueDate: "2026-01-12",
          finished: false,
        },
      ],
    },
  ];
};

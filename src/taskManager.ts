import { Task } from "./models/task";
import { readTasksFromFile, writeTasksToFile } from "./utils/fileHandler";

export const addTask = (description: string): Task => {
  const tasks = readTasksFromFile();
  const newTask: Task = {
    id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
    description,
    status: "todo",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  tasks.push(newTask);
  writeTasksToFile(tasks);
  return newTask;
};

export const updateTask = (id: number, description: string): boolean => {
  const tasks = readTasksFromFile();
  const taskIndex = tasks.findIndex((task) => task.id === id);
  if (taskIndex === -1) return false;

  tasks[taskIndex].description = description;
  tasks[taskIndex].updatedAt = new Date().toISOString();
  writeTasksToFile(tasks);
  return true;
};

export const deleteTask = (id: number): boolean => {
  const tasks = readTasksFromFile();
  const filteredTasks = tasks.filter((task) => task.id !== id);
  if (tasks.length === filteredTasks.length) return false;

  writeTasksToFile(filteredTasks);
  return true;
};

export const markTask = (
  id: number,
  status: "in-progress" | "done"
): boolean => {
  const tasks = readTasksFromFile();
  const taskIndex = tasks.findIndex((task) => task.id === id);
  if (taskIndex === -1) return false;

  tasks[taskIndex].status = status;
  tasks[taskIndex].updatedAt = new Date().toISOString();
  writeTasksToFile(tasks);
  return true;
};

export const listTasks = (status?: "todo" | "in-progress" | "done"): Task[] => {
  const tasks = readTasksFromFile();
  return status ? tasks.filter((task) => task.status === status) : tasks;
};

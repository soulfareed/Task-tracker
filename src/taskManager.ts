import { todo } from "node:test";
import { Task } from "./models/task";
import { readTasks, writeTasks } from "./utils/fileHandler";

let currentId = 1;
function getNextId(): number {
  const tasks = readTasks();
  const lastTask = tasks[tasks.length - 1];
  return lastTask ? lastTask.id + 1 : currentId;
}

export function addTask(description: string): void {
  const tasks = readTasks();
  const newTask: Task = {
    id: getNextId(),
    description,
    status: "todo",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  tasks.push(newTask);
  writeTasks(tasks);
  console.log(`Task Added Successfully (ID: ${newTask.id}) `);
}

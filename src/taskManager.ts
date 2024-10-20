import { todo } from "node:test";
import { Task } from "./models/task";
import { readTasks, writeTasks } from "./utils/fileHandler";
import { read, stat } from "node:fs";

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

export function updateTask(id: number, description: string): void {
  const tasks = readTasks();
  const task = tasks.find((task) => task.id === id);
  if (!task) {
    console.log(`Task not found !`);
    return;
  }
  task.description = description;
  task.updatedAt = new Date().toISOString();
  writeTasks(tasks);
  console.log("Task updated successfully");
}

export function deleteTask(id: number): void {
  let tasks = readTasks();
  const task = tasks.filter((task) => task.id === id);
  writeTasks(tasks);
  console.log("Task deleted successfully.");
}

export function markTest(id: number, status: "in-progress" | "done"): void {
  const tasks = readTasks();
  const task = tasks.find((task) => task.id === id);
  if (!task) {
    console.error("Task not find.");
    return;
  }
  task.status = status;
  task.updatedAt = new Date().toISOString();
  writeTasks(tasks);
  console.log(`Task marked as ${status}`);
}

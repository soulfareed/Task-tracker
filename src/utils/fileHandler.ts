import fs from "fs";
import path from "path";
import { Task } from "../models/task";

const filePath = path.join(__dirname, "../../tasks.json");

// Read tasks from file
export const readTasksFromFile = (): Task[] => {
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data) as Task[];
  } catch (err) {
    return [];
  }
};

// Write tasks to file
export const writeTasksToFile = (tasks: Task[]): void => {
  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
};

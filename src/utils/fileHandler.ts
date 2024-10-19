// src/utils/fileHandler.ts

import { Task } from "../models/task";
import * as fs from "fs";
import * as path from "path";

const filePath = path.join(__dirname, "../../tasks.json");

export function readTasks(): Task[] {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify([]));
  }
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data) as Task[];
}

export function writeTasks(tasks: Task[]): void {
  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
}

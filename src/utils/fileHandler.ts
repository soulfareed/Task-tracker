import { data } from "autoprefixer";
import { Task } from "../models/task";
import * as fs from "fs";
import * as path from "path";
import { json } from "stream/consumers";

const filePath = path.join(__dirname, "../../task.json");

export function readTask(): Task[] {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify([]));
  }
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data) as Task;
}
export function writeFileSync(tasks: Task[]): void {
  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
}

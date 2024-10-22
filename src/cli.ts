import { comma } from "postcss/lib/list";
import {
  addTask,
  updateTask,
  deleteTask,
  markTest,
  listTasks,
} from "./taskManager";

const [command, ...args] = process.argv.slice(2);
switch (command) {
  case "add":
    addTask(args.join(" "));
    break;

  case "update":
    const updateId = parseInt(args[0]);
    const newDescription = args.slice(1).join(" ");
    if (updateTask(updateId, newDescription)) {
      console.log("Task updated successfully.");
    } else {
      console.log("Task not found.");
    }
    break;
}

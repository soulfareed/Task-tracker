"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const taskManager_1 = require("./taskManager");
const command = process.argv[2];
const args = process.argv.slice(3);
switch (command) {
    case "add":
        const description = args.join(" ");
        if (!description) {
            console.log("Please provide a task description.");
            break;
        }
        const newTask = (0, taskManager_1.addTask)(description);
        console.log(`Task added successfully (ID: ${newTask.id})`);
        break;
    case "update":
        const updateId = parseInt(args[0]);
        const newDescription = args.slice(1).join(" ");
        if ((0, taskManager_1.updateTask)(updateId, newDescription)) {
            console.log("Task updated successfully.");
        }
        else {
            console.log("Task not found.");
        }
        break;
    case "delete":
        const deleteId = parseInt(args[0]);
        if ((0, taskManager_1.deleteTask)(deleteId)) {
            console.log("Task deleted successfully.");
        }
        else {
            console.log("Task not found.");
        }
        break;
    case "mark-in-progress":
        const inProgressId = parseInt(args[0]);
        if ((0, taskManager_1.markTask)(inProgressId, "in-progress")) {
            console.log("Task marked as in-progress.");
        }
        else {
            console.log("Task not found.");
        }
        break;
    case "mark-done":
        const doneId = parseInt(args[0]);
        if ((0, taskManager_1.markTask)(doneId, "done")) {
            console.log("Task marked as done.");
        }
        else {
            console.log("Task not found.");
        }
        break;
    case "list":
        const status = args[0];
        const tasks = (0, taskManager_1.listTasks)(status);
        tasks.forEach((task) => {
            console.log(`[${task.id}] ${task.description} - ${task.status} (Created: ${task.createdAt})`);
        });
        break;
    default:
        console.log("Unknown command.");
        break;
}

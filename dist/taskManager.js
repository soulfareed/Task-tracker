"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listTasks = exports.markTask = exports.deleteTask = exports.updateTask = exports.addTask = void 0;
const fileHandler_1 = require("./utils/fileHandler");
const addTask = (description) => {
    const tasks = (0, fileHandler_1.readTasksFromFile)();
    const newTask = {
        id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
        description,
        status: "todo",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    };
    tasks.push(newTask);
    (0, fileHandler_1.writeTasksToFile)(tasks);
    return newTask;
};
exports.addTask = addTask;
const updateTask = (id, description) => {
    const tasks = (0, fileHandler_1.readTasksFromFile)();
    const taskIndex = tasks.findIndex((task) => task.id === id);
    if (taskIndex === -1)
        return false;
    tasks[taskIndex].description = description;
    tasks[taskIndex].updatedAt = new Date().toISOString();
    (0, fileHandler_1.writeTasksToFile)(tasks);
    return true;
};
exports.updateTask = updateTask;
const deleteTask = (id) => {
    const tasks = (0, fileHandler_1.readTasksFromFile)();
    const filteredTasks = tasks.filter((task) => task.id !== id);
    if (tasks.length === filteredTasks.length)
        return false;
    (0, fileHandler_1.writeTasksToFile)(filteredTasks);
    return true;
};
exports.deleteTask = deleteTask;
const markTask = (id, status) => {
    const tasks = (0, fileHandler_1.readTasksFromFile)();
    const taskIndex = tasks.findIndex((task) => task.id === id);
    if (taskIndex === -1)
        return false;
    tasks[taskIndex].status = status;
    tasks[taskIndex].updatedAt = new Date().toISOString();
    (0, fileHandler_1.writeTasksToFile)(tasks);
    return true;
};
exports.markTask = markTask;
const listTasks = (status) => {
    const tasks = (0, fileHandler_1.readTasksFromFile)();
    return status ? tasks.filter((task) => task.status === status) : tasks;
};
exports.listTasks = listTasks;

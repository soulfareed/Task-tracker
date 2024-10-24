"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeTasksToFile = exports.readTasksFromFile = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const filePath = path_1.default.join(__dirname, "../../tasks.json");
// Read tasks from file
const readTasksFromFile = () => {
    try {
        const data = fs_1.default.readFileSync(filePath, "utf-8");
        return JSON.parse(data);
    }
    catch (err) {
        return [];
    }
};
exports.readTasksFromFile = readTasksFromFile;
// Write tasks to file
const writeTasksToFile = (tasks) => {
    fs_1.default.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
};
exports.writeTasksToFile = writeTasksToFile;

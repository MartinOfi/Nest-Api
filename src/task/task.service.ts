import { Injectable } from "@nestjs/common";
import { Task } from "./interfaces/Task";

@Injectable()
export class TaskService {
  constructor() {}
  getTasks(): Task[] {
    return [];
  }
  getTask(id: number): Task {
    return { description: "", title: "", done: false, id };
  }
}

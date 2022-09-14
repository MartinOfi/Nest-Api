import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";
import { Task } from "./interfaces/Task";
import { TaskService } from "./task.service";

@Controller("task")
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get()
  getTasks(): Task[] {
    return this.taskService.getTasks();
  }

  @Get(":taskId")
  getTask(@Param("taskId") taskId: string) {
    return this.taskService.getTask(parseInt(taskId));
  }

  @Post()
  createTask(@Body() task: CreateTaskDto): string {
    const { description, title, done } = task;
    console.log(description, title, done);
    return "";
  }
  @Put(":id")
  updateTask(@Body() task: CreateTaskDto, @Param("id") id: string): string {
    console.log(task);
    console.log(id);
    return "update task";
  }
  @Delete(":id")
  deleteTask(@Param("id") id): string {
    console.log(id);

    return `task ${id} deleted`;
  }
}

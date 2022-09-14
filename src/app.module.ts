import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TaskController } from "./task/task.controller";
import { TaskService } from "./task/task.service";
import { TaskModule } from "./task/task.module";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [TaskModule, MongooseModule.forRoot("mongodb://localhost/nest")],
  //Controladores, son las rutas del servidor
  controllers: [AppController, TaskController],
  providers: [AppService, TaskService],
})
export class AppModule {}

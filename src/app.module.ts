import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PostModule } from "./post/post.module";
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "database",
      username: "root",
      password: "root",
      database: "test",
      entities: [__dirname + "./**/**/*entity{.ts,.js}"],
      autoLoadEntities: true,
      synchronize: true,
    }),
    PostModule,
    UserModule,
  ],
  //Controladores, son las rutas del servidor, reciben las request
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

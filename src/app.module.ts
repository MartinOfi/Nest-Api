import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import {
  DATABASE_HOST,
  DATABASE_PASSWORD,
  DATABASE_NAME,
  DATABASE_PORT,
  DATABASE_USERNAME,
} from "./config/constants";
import { PostModule } from "./post/post.module";
import { UserModule } from "./user/user.module";

@Module({
  imports: [
    PostModule,
    UserModule,
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: "mysql",
        host: config.get<string>(DATABASE_HOST),
        username: config.get<string>(DATABASE_USERNAME),
        password: config.get<string>(DATABASE_PASSWORD),
        database: config.get<string>(DATABASE_NAME),
        port: parseInt(config.get<string>(DATABASE_PORT), 10),
        entities: [__dirname + "./**/**/*entity{.ts,.js}"],
        autoLoadEntities: true,
        synchronize: true,
        logger: "file",
        logging: true,
      }),
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env",
    }),
  ],
  //Controladores, son las rutas del servidor, reciben las request
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

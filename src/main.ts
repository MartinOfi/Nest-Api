import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";
import { initSwagger } from "./app.swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  initSwagger(app);
  //userGlobalPipes sirve para
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    })
  );

  await app.listen(3000);
}
bootstrap();

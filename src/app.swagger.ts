import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export const initSwagger = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle("Post Api")
    .setDescription("Post API description")
    .setVersion("1.0")
    .addTag("Post")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("/docs", app, document);
};

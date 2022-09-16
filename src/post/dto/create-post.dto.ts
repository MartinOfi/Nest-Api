import { IsArray, IsBoolean, IsEnum, IsString } from "class-validator";
import { EnumToString } from "src/helpers/enumToString";
import { PostCategory } from "../enum";

export class CreatePostDto {
  @IsString()
  title: string;

  @IsString()
  slug: string;

  @IsString()
  excerpt: string;

  @IsString()
  content: string;

  //Con el segundo parametro y message puedo customizar el mensaje de error
  @IsEnum(PostCategory, {
    message: `Opcion invalida. Las opciones validas son "${EnumToString(
      PostCategory
    )}"`,
  })
  category: PostCategory;

  @IsArray()
  @IsString({ each: true })
  tags: string[];

  @IsBoolean()
  status: boolean;
}

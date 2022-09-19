import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsString,
} from "class-validator";
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

  @IsNotEmpty()
  @IsEnum(PostCategory, {
    message: `Invalid option. Valids options are ${EnumToString(PostCategory)}`,
  })
  category: string;

  @IsString({ each: true })
  @IsArray()
  tags: string[];

  @IsBoolean()
  status: boolean;
}

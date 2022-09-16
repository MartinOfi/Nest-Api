import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from "@nestjs/common";
import { CreatePostDto, EditPostDto } from "./dto";
import { PostService } from "./post.service";

@Controller("post")
export class PostController {
  constructor(private readonly postService: PostService) {}
  @Get()
  getMany() {
    return this.postService.getMany();
  }

  @Get(":id")
  getOne(@Param("id", ParseIntPipe) id: number) {
    return this.postService.getOne(2);
  }
  @Post()
  createPost(@Body() dto: CreatePostDto) {
    return this.postService.createOne(dto);
  }
  @Put(":id")
  modifyPost(@Param("id") id: number, @Body() dto: EditPostDto) {
    return this.postService.editOne(2, dto);
  }
  @Delete(":id")
  deletePost(@Param("id") id: number) {
    return this.postService.deleteOne(2);
  }
}

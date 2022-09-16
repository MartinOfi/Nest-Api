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
import { ApiTags } from "@nestjs/swagger";
import { CreatePostDto, EditPostDto } from "./dto";
import { PostService } from "./post.service";

@ApiTags("Post Module")
@Controller("post")
export class PostController {
  constructor(private readonly postService: PostService) {}
  @Get()
  async getMany() {
    const data = await this.postService.getMany();
    return {
      message: "Get successfully",
      data,
    };
  }

  @Get(":id")
  getOne(@Param("id", ParseIntPipe) id: number) {
    return this.postService.getOne(id);
  }
  @Post()
  async createPost(@Body() dto: CreatePostDto) {
    const data = await this.postService.createOne(dto);
    console.log("data", data);

    return {
      message: "Post successfully",
      data,
    };
  }
  @Put(":id")
  async modifyPost(@Param("id") id: number, @Body() dto: EditPostDto) {
    return await this.postService.editOne(id, dto);
  }
  @Delete(":id")
  async deletePost(@Param("id") id: number) {
    return await this.postService.deleteOne(id);
  }
}

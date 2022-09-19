import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { CreateUserDto } from "./dtos";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  async getMany() {
    const data = await this.userService.getMany();
    return {
      data,
    };
  }

  @Get(":id")
  async getOne(@Param("id") id: number) {
    const data = await this.userService.getOne(id);
    return {
      data,
    };
  }

  @Post()
  async createOne(@Body() dto: CreateUserDto) {
    const data = await this.userService.createOne(dto);
    return {
      message: "user created successfully",
      data,
    };
  }

  @Put()
  async editOne() {}

  @Delete()
  async deleteOne() {}
}

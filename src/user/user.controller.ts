import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { CreateUserDto, EditUserDto } from "./dtos";
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

  @Put(":id")
  async editOne(@Param("id") id: number, @Body() dto: EditUserDto) {
    const data = await this.userService.editOne(id, dto);
    return {
      message: "user updated successfully",
      data,
    };
  }

  @Delete(":id")
  async deleteOne(@Param("id") id: number) {
    const data = await this.userService.deleteOne(id);
    return {
      message: "user deleted successfully",
      data,
    };
  }
}

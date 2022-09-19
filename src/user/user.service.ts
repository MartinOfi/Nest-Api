import {
  Delete,
  Get,
  Injectable,
  NotFoundException,
  Post,
  Put,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dtos";
import { User } from "./entities";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  async getMany() {
    return await this.userRepository.find();
  }

  async getOne(id: number) {
    const user = await this.userRepository.findOne({ where: { id: id } });

    if (!user) throw new NotFoundException("usuario no existe");
    return user;
  }

  async createOne(dto: CreateUserDto) {
    const newUser = this.userRepository.create(dto);
    return await this.userRepository.save(newUser);
  }

  editOne(id: string) {}

  deleteOne() {}
}

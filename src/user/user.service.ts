import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserDto, EditUserDto } from "./dtos";
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
    const userExist = await this.userRepository.findOne({
      where: { email: dto.email },
    });
    if (userExist)
      throw new NotFoundException("email ya registrado, intente con otro");
    const newUser = await this.userRepository.create(dto);
    const user = await this.userRepository.save(newUser);
    delete user.password;
    return user;
  }

  async editOne(id: number, dto: EditUserDto) {
    const user = await this.getOne(id);
    const editUser = Object.assign(user, dto);
    return await this.userRepository.save(editUser);
  }

  async deleteOne(id: number) {
    const user = await this.getOne(id);
    return await this.userRepository.remove(user);
  }

  //El create querybuilder lo hacemos porque en el user.entity dijimos que la contraseña no se va a retornar, entonces con el addSelect podemos obtenerla
  async findByEmail(email: string) {
    return await this.userRepository
      .createQueryBuilder("user")
      .where({ email })
      .addSelect("user.password")
      .getOne();
  }
}

import { Injectable } from "@nestjs/common";
import { compare } from "bcryptjs";
import { UserService } from "src/user/user.service";

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findByEmail(email);
    if (user && (await compare(password, user.password))) {
      return user;
    }
    return null;
  }
}

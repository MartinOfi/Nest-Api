import { Controller, Get, Post, Req, UseGuards } from "@nestjs/common";
import { LocalAuthGuard } from "./guards";

@Controller("auth")
export class AuthController {
  @Get("profile")
  profile() {
    return "Estos son tus datos";
  }

  //El guard lo que hace es, usar la estrategia local, (local es el alias), darle poderes al metodo para que use la estructura local
  @UseGuards(LocalAuthGuard)
  @Post("login")
  login(@Req() req: any) {
    //retornamos de los headers de la peticion de la peticion el usuario almacenado gracias a la configuracion del AuthGuard
    return req.user;
  }
}

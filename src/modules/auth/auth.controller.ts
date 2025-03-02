import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Logger,
  Post,
  Render,
  Res,
  UseFilters,
  UseGuards,
} from "@nestjs/common";
import { Response } from "express";
import { AuthExceptionFilter } from "src/common/filters/auth-exceptions.filter";
import { CreateAssociadoDto } from "../associado/associado.dto";
import { AuthService } from "./auth.service";
import { JwtAuthGuard } from "./jwt-auth.guard";

@Controller("auth")
@UseFilters(AuthExceptionFilter)
export class AuthController {
  private readonly logger = new Logger(AuthController.name);
  constructor(private readonly authService: AuthService) {}

  @Get("/login")
  @Render("auth/login")
  loginPage() {
    return { title: "Login / Registro", layout: "layouts/auth" };
  }

  @Post("register")
  async register(@Body() registerDto: CreateAssociadoDto) {
    try {
      const user = await this.authService.register(registerDto);
      return { message: "Usuário cadastrado com sucesso!", user };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Post("login")
  async login(
    @Body() loginDto: { email: string; senha: string },
    @Res({ passthrough: true }) res: Response
  ) {
    const user = await this.authService.validateUser(
      loginDto.email,
      loginDto.senha
    );
    if (!user) {
      throw new HttpException(
        "Email ou senha inválidos",
        HttpStatus.UNAUTHORIZED
      );
    }
    const tokenResponse = await this.authService.login(user);
    res.cookie("access_token", tokenResponse.access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });
    return tokenResponse;
  }

  @UseGuards(JwtAuthGuard)
  @Get("/home")
  @Render("auth/home")
  home() {
    return { title: "Home" };
  }

  @UseGuards(JwtAuthGuard)
  @Get("/profile")
  @Render("auth/profile")
  profile() {
    return { title: "Perfil" };
  }

  @UseGuards(JwtAuthGuard)
  @Get("/chamada")
  @Render("auth/chamada")
  chamada() {
    return { title: "Chamada" };
  }

  @UseGuards(JwtAuthGuard)
  @Get("/aviso")
  @Render("auth/aviso")
  aviso() {
    return { title: "Avisos" };
  }

  @UseGuards(JwtAuthGuard)
  @Get("solicitacao")
  @Render("auth/solicitacao")
  solicitacao() {
    return { title: "Solicitações" };
  }
}

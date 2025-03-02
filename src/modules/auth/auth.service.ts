import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import * as bcrypt from "bcrypt";
import { Repository } from "typeorm";
import { Associado } from "../../models/associado.entity";
import { CreateAssociadoDto } from "../associado/associado.dto";

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Associado)
    private readonly associadoRepository: Repository<Associado>,
    private readonly jwtService: JwtService
  ) {}

  async register(registerDto: CreateAssociadoDto): Promise<Associado> {
    const { senha, ...rest } = registerDto;
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(senha, saltRounds);
    const user = this.associadoRepository.create({
      ...rest,
      senha: hashedPassword,
    });
    return await this.associadoRepository.save(user);
  }

  async validateUser(email: string, senha: string): Promise<Associado> {
    const user = await this.associadoRepository.findOne({ where: { email } });
    if (!user) {
      throw new UnauthorizedException("Email ou senha inválidos");
    }
    const passwordMatch = await bcrypt.compare(senha, user.senha);
    if (!passwordMatch) {
      throw new UnauthorizedException("Email ou senha inválidos");
    }
    return user;
  }

  async login(user: Associado) {
    const payload = { email: user.email, sub: user.id, tipo: user.tipo };
    return {
      access_token: this.jwtService.sign(payload),
      userId: user.id,
      userTipo: user.tipo,
    };
  }
}

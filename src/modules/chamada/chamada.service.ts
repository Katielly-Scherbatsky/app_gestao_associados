import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Chamada } from "../../models/chamada.entity";
import { CreateChamadaDto } from "./chamada.dto";

@Injectable()
export class ChamadaService {
  constructor(
    @InjectRepository(Chamada)
    private readonly chamadaRepository: Repository<Chamada>
  ) {}

  async create(payload: CreateChamadaDto): Promise<Chamada> {
    const novaChamada = this.chamadaRepository.create(payload);
    return this.chamadaRepository.save(novaChamada);
  }

  async findAll(): Promise<Chamada[]> {
    return this.chamadaRepository.find();
  }
}

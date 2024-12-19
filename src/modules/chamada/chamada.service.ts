import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Chamada } from "../../models/chamada.entity";
import { CreateChamadaDto, UpdateChamadaDto } from "./chamada.dto";

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

  async findOne(id: number): Promise<Chamada> {
    const chamada = await this.chamadaRepository.findOne({
      where: { ID_Aviso: id },
    });
    if (!chamada) {
      throw new NotFoundException(`Chamada com ID ${id} não encontrada`);
    }
    return chamada;
  }

  async update(id: number, payload: UpdateChamadaDto): Promise<Chamada> {
    const chamada = await this.findOne(id);
    const chamadaAtualizada = this.chamadaRepository.merge(chamada, payload);
    return this.chamadaRepository.save(chamadaAtualizada);
  }

  async remove(id: number): Promise<void> {
    const chamada = await this.findOne(id);
    await this.chamadaRepository.remove(chamada);
  }
}

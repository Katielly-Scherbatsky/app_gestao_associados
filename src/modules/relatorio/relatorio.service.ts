import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Relatorio } from "../../models/relatorio.entity";
import { CreateRelatorioDto, UpdateRelatorioDto } from "./relatorio.dto";

@Injectable()
export class RelatorioService {
  constructor(
    @InjectRepository(Relatorio)
    private readonly relatorioRepository: Repository<Relatorio>
  ) {}

  async create(payload: CreateRelatorioDto): Promise<Relatorio> {
    const novoRelatorio = this.relatorioRepository.create(payload);
    return this.relatorioRepository.save(novoRelatorio);
  }

  async findAll(): Promise<Relatorio[]> {
    return this.relatorioRepository.find();
  }

  async findOne(id: number): Promise<Relatorio> {
    const relatorio = await this.relatorioRepository.findOneBy({
      ID_Aviso: id,
    });
    if (!relatorio) {
      throw new NotFoundException(`Relatório com ID ${id} não encontrado`);
    }
    return relatorio;
  }

  async update(id: number, payload: UpdateRelatorioDto): Promise<Relatorio> {
    const relatorio = await this.findOne(id);
    const relatorioAtualizado = this.relatorioRepository.merge(
      relatorio,
      payload
    );
    return this.relatorioRepository.save(relatorioAtualizado);
  }

  async remove(id: number): Promise<void> {
    const relatorio = await this.findOne(id);
    await this.relatorioRepository.remove(relatorio);
  }
}

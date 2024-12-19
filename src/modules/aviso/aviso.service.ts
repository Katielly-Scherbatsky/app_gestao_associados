import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Aviso } from "../../models/aviso.entity";
import { CreateAvisoDto, UpdateAvisoDto } from "./aviso.dto";

@Injectable()
export class AvisoService {
  constructor(
    @InjectRepository(Aviso)
    private readonly avisoRepository: Repository<Aviso>
  ) {}

  async create(payload: CreateAvisoDto): Promise<Aviso> {
    const novoAviso = this.avisoRepository.create(payload);
    return this.avisoRepository.save(novoAviso);
  }

  async findAll(): Promise<Aviso[]> {
    return this.avisoRepository.find();
  }

  async findOne(id: number): Promise<Aviso> {
    const aviso = await this.avisoRepository.findOne({
      where: { ID_Aviso: id },
    });
    if (!aviso) {
      throw new NotFoundException(`Aviso com ID ${id} não encontrado`);
    }
    return aviso;
  }

  async update(id: number, payload: UpdateAvisoDto): Promise<Aviso> {
    const aviso = await this.findOne(id);
    const avisoAtualizado = this.avisoRepository.merge(aviso, payload);
    return this.avisoRepository.save(avisoAtualizado);
  }

  async remove(id: number): Promise<void> {
    const aviso = await this.findOne(id);
    await this.avisoRepository.remove(aviso);
  }
}

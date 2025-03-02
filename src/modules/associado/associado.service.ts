import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Associado } from "src/models/associado.entity";
import { Repository } from "typeorm";
import { UpdateAssociadoDto } from "./associado.dto";

@Injectable()
export class AssociadoService {
  constructor(
    @InjectRepository(Associado)
    private readonly associadoRepository: Repository<Associado>
  ) {}

  async findAll() {
    return this.associadoRepository.find();
  }

  async findOne(id: number) {
    const associado = await this.associadoRepository.findOne({
      where: { id: id },
    });
    if (!associado) {
      throw new NotFoundException(`Associado com ID ${id} não encontrado`);
    }
    return associado;
  }

  async update(id: number, payload: UpdateAssociadoDto): Promise<Associado> {
    const associado = await this.findOne(id);
    const associadoAtualizado = this.associadoRepository.merge(
      associado,
      payload
    );
    return this.associadoRepository.save(associadoAtualizado);
  }
}

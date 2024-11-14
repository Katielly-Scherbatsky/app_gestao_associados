import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateAssociadoDto, UpdateAssociadoDto } from "./associado.dto";

@Injectable()
export class AssociadoService {
  private associados = []; // Array simulado para dados dos associados. Substitua por uma integração real com o banco de dados.

  async create(payload: CreateAssociadoDto) {
    const novoAssociado = {
      id: this.associados.length + 1,
      ...payload,
    };
    this.associados.push(novoAssociado);
    return novoAssociado;
  }

  async findAll() {
    return this.associados;
  }

  async findOne(id: number) {
    const associado = this.associados.find((associado) => associado.id === id);
    if (!associado) {
      throw new NotFoundException(`Associado com ID ${id} não encontrado`);
    }
    return associado;
  }

  async update(id: number, payload: UpdateAssociadoDto) {
    const associadoIndex = this.associados.findIndex((a) => a.id === id);
    if (associadoIndex === -1) {
      throw new NotFoundException(`Associado com ID ${id} não encontrado`);
    }
    const associadoAtualizado = {
      ...this.associados[associadoIndex],
      ...payload,
    };
    this.associados[associadoIndex] = associadoAtualizado;
    return associadoAtualizado;
  }

  async remove(id: number) {
    const associadoIndex = this.associados.findIndex((a) => a.id === id);
    if (associadoIndex === -1) {
      throw new NotFoundException(`Associado com ID ${id} não encontrado`);
    }
    const associadoRemovido = this.associados.splice(associadoIndex, 1);
    return associadoRemovido[0];
  }
}

import { Injectable, NotFoundException } from "@nestjs/common";
import {
  CreateAdministradorDto,
  UpdateAdministradorDto,
} from "./administrador.dto";

@Injectable()
export class AdministradorService {
  private administradores = []; // Array simulado para dados dos administradores. Substitua por uma integração real com o banco de dados.

  async create(payload: CreateAdministradorDto) {
    const novoAdministrador = {
      id: this.administradores.length + 1,
      ...payload,
    };
    this.administradores.push(novoAdministrador);
    return novoAdministrador;
  }

  async findAll() {
    return this.administradores;
  }

  async findOne(id: number) {
    const administrador = this.administradores.find(
      (administrador) => administrador.id === id
    );
    if (!administrador) {
      throw new NotFoundException(`Administrador com ID ${id} não encontrado`);
    }
    return administrador;
  }

  async update(id: number, payload: UpdateAdministradorDto) {
    const administradorIndex = this.administradores.findIndex(
      (a) => a.id === id
    );
    if (administradorIndex === -1) {
      throw new NotFoundException(`Administrador com ID ${id} não encontrado`);
    }
    const administradorAtualizado = {
      ...this.administradores[administradorIndex],
      ...payload,
    };
    this.administradores[administradorIndex] = administradorAtualizado;
    return administradorAtualizado;
  }

  async remove(id: number) {
    const administradorIndex = this.administradores.findIndex(
      (a) => a.id === id
    );
    if (administradorIndex === -1) {
      throw new NotFoundException(`Administrador com ID ${id} não encontrado`);
    }
    const administradorRemovido = this.administradores.splice(
      administradorIndex,
      1
    );
    return administradorRemovido[0];
  }
}

import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Solicitacao } from "../../models/solicitacao.entity";
import { CreateSolicitacaoDto, UpdateSolicitacaoDto } from "./solicitacao.dto";

@Injectable()
export class SolicitacaoService {
  constructor(
    @InjectRepository(Solicitacao)
    private readonly solicitacaoRepository: Repository<Solicitacao>
  ) {}

  async create(payload: CreateSolicitacaoDto): Promise<Solicitacao> {
    const novaSolicitacao = this.solicitacaoRepository.create(payload);
    return this.solicitacaoRepository.save(novaSolicitacao);
  }

  async findAll(): Promise<Solicitacao[]> {
    return this.solicitacaoRepository.find();
  }

  async findOne(id: number): Promise<Solicitacao> {
    const solicitacao = await this.solicitacaoRepository.findOneBy({
      ID_Aviso: id,
    });
    if (!solicitacao) {
      throw new NotFoundException(`Solicitação com ID ${id} não encontrada`);
    }
    return solicitacao;
  }

  async update(
    id: number,
    payload: UpdateSolicitacaoDto
  ): Promise<Solicitacao> {
    const solicitacao = await this.findOne(id);
    const solicitacaoAtualizada = this.solicitacaoRepository.merge(
      solicitacao,
      payload
    );
    return this.solicitacaoRepository.save(solicitacaoAtualizada);
  }

  async remove(id: number): Promise<void> {
    const solicitacao = await this.findOne(id);
    await this.solicitacaoRepository.remove(solicitacao);
  }
}

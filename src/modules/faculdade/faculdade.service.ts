import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Faculdade } from "../../models/faculdade.entity";
import { CreateFaculdadeDto, UpdateFaculdadeDto } from "./faculdade.dto";

@Injectable()
export class FaculdadeService {
  constructor(
    @InjectRepository(Faculdade)
    private readonly faculdadeRepository: Repository<Faculdade>
  ) {}

  async create(payload: CreateFaculdadeDto): Promise<Faculdade> {
    const novaFaculdade = this.faculdadeRepository.create(payload);
    return this.faculdadeRepository.save(novaFaculdade);
  }

  async findAll(): Promise<Faculdade[]> {
    return this.faculdadeRepository.find({ relations: ["associados"] });
  }

  async findOne(id: number): Promise<Faculdade> {
    const faculdade = await this.faculdadeRepository.findOne({
      where: { id: id },
      relations: ["associados"],
    });
    if (!faculdade) {
      throw new NotFoundException(`Faculdade com ID ${id} não encontrada`);
    }
    return faculdade;
  }

  async update(id: number, payload: UpdateFaculdadeDto): Promise<Faculdade> {
    const faculdade = await this.findOne(id);
    const faculdadeAtualizada = this.faculdadeRepository.merge(
      faculdade,
      payload
    );
    return this.faculdadeRepository.save(faculdadeAtualizada);
  }

  async remove(id: number): Promise<void> {
    const faculdade = await this.findOne(id);
    await this.faculdadeRepository.remove(faculdade);
  }
}

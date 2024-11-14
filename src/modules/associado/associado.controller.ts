import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  ParseIntPipe,
  NotFoundException,
} from "@nestjs/common";
import { AssociadoService } from "./associado.service";
import { CreateAssociadoDto, UpdateAssociadoDto } from "./associado.dto";

@Controller("associados")
export class AssociadoController {
  constructor(private readonly associadoService: AssociadoService) {}

  @Post()
  async create(@Body() payload: CreateAssociadoDto) {
    return await this.associadoService.create(payload);
  }

  @Get()
  async findAll() {
    return await this.associadoService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id", ParseIntPipe) id: number) {
    const associado = await this.associadoService.findOne(id);
    if (!associado) {
      throw new NotFoundException(`Associado com ID ${id} não encontrado`);
    }
    return associado;
  }

  @Put(":id")
  async update(
    @Param("id", ParseIntPipe) id: number,
    @Body() payload: UpdateAssociadoDto
  ) {
    const updatedAssociado = await this.associadoService.update(id, payload);
    if (!updatedAssociado) {
      throw new NotFoundException(`Associado com ID ${id} não encontrado`);
    }
    return updatedAssociado;
  }

  @Delete(":id")
  async remove(@Param("id", ParseIntPipe) id: number) {
    const deletedAssociado = await this.associadoService.remove(id);
    if (!deletedAssociado) {
      throw new NotFoundException(`Associado com ID ${id} não encontrado`);
    }
    return { message: `Associado com ID ${id} removido com sucesso` };
  }
}

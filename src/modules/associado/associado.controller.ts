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
  async findOne(@Param("id") id: number) {
    return this.associadoService.findOne(id);
  }

  @Put(":id")
  async update(@Param("id") id: number, @Body() payload: UpdateAssociadoDto) {
    return this.associadoService.update(id, payload);
  }

  @Delete(":id")
  async remove(@Param("id", ParseIntPipe) id: number) {
    return this.associadoService.remove(id);
  }
}

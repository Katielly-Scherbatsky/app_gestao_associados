import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from "@nestjs/common";
import { CreateAssociadoDto, UpdateAssociadoDto } from "./associado.dto";
import { AssociadoService } from "./associado.service";

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

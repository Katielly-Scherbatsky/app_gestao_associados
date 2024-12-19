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
import { CreateRelatorioDto, UpdateRelatorioDto } from "./relatorio.dto";
import { RelatorioService } from "./relatorio.service";

@Controller("relatorios")
export class RelatorioController {
  constructor(private readonly relatorioService: RelatorioService) {}

  @Post()
  async create(@Body() payload: CreateRelatorioDto) {
    return this.relatorioService.create(payload);
  }

  @Get()
  async findAll() {
    return this.relatorioService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id", ParseIntPipe) id: number) {
    return this.relatorioService.findOne(id);
  }

  @Put(":id")
  async update(
    @Param("id", ParseIntPipe) id: number,
    @Body() payload: UpdateRelatorioDto
  ) {
    return this.relatorioService.update(id, payload);
  }

  @Delete(":id")
  async remove(@Param("id", ParseIntPipe) id: number) {
    return this.relatorioService.remove(id);
  }
}

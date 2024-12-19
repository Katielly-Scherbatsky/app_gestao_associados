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
import { CreateChamadaDto, UpdateChamadaDto } from "./chamada.dto";
import { ChamadaService } from "./chamada.service";

@Controller("chamadas")
export class ChamadaController {
  constructor(private readonly chamadaService: ChamadaService) {}

  @Post()
  async create(@Body() payload: CreateChamadaDto) {
    return this.chamadaService.create(payload);
  }

  @Get()
  async findAll() {
    return this.chamadaService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id", ParseIntPipe) id: number) {
    return this.chamadaService.findOne(id);
  }

  @Put(":id")
  async update(
    @Param("id", ParseIntPipe) id: number,
    @Body() payload: UpdateChamadaDto
  ) {
    return this.chamadaService.update(id, payload);
  }

  @Delete(":id")
  async remove(@Param("id", ParseIntPipe) id: number) {
    return this.chamadaService.remove(id);
  }
}

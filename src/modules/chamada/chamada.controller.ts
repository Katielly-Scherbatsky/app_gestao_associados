import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Render,
  UseFilters,
  Request,
} from "@nestjs/common";
import { AuthExceptionFilter } from "src/common/filters/auth-exceptions.filter";
import { CreateChamadaDto, UpdateChamadaDto } from "./chamada.dto";
import { ChamadaService } from "./chamada.service";

@Controller("chamadas")
@UseFilters(AuthExceptionFilter)
export class ChamadaController {
  constructor(private readonly chamadaService: ChamadaService) {}

  @Get()
  @Render("chamada")
  async findAll(@Request() req) {
    const chamadas = await this.chamadaService.findAll();
    return { user: req.user, chamadas };
  }

  @Post()
  async create(@Body() payload: any) {
    if (payload.presencas && Array.isArray(payload.presencas)) {
      const results = [];
      for (const item of payload.presencas) {
        const chamadaDto: CreateChamadaDto = {
          data: payload.data || new Date().toISOString().split("T")[0],
          presenca: item.presenca,
          associadoId: Number(item.associado_id),
        };
        results.push(await this.chamadaService.create(chamadaDto));
      }
      return results;
    }
    return this.chamadaService.create(payload);
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

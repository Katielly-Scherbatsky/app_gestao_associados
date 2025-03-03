import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Render,
  Request,
  UseFilters,
} from "@nestjs/common";
import { AuthExceptionFilter } from "src/common/filters/auth-exceptions.filter";
import { CreateChamadaDto } from "./chamada.dto";
import { ChamadaService } from "./chamada.service";

@Controller("chamadas")
@UseFilters(AuthExceptionFilter)
export class ChamadaController {
  constructor(private readonly chamadaService: ChamadaService) {}

  @Get()
  @Render("auth/chamada")
  async findAll(@Request() req) {
    const chamadas = await this.chamadaService.findAll();
    return { user: req.user, chamadas };
  }

  @Get("api")
  async findAllApi() {
    return await this.chamadaService.findAll();
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
}

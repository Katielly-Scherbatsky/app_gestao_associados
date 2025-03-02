import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { CreateSolicitacaoDto, UpdateSolicitacaoDto } from "./solicitacao.dto";
import { SolicitacaoService } from "./solicitacao.service";

@UseGuards(AuthGuard("jwt"))
@Controller("solicitacoes")
export class SolicitacaoController {
  constructor(private readonly solicitacaoService: SolicitacaoService) {}

  @Post()
  async create(@Body() payload: CreateSolicitacaoDto) {
    return this.solicitacaoService.create(payload);
  }

  @Get()
  async findAll() {
    return this.solicitacaoService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id", ParseIntPipe) id: number) {
    return this.solicitacaoService.findOne(id);
  }

  @Put(":id")
  async update(
    @Param("id", ParseIntPipe) id: number,
    @Body() payload: UpdateSolicitacaoDto
  ) {
    return this.solicitacaoService.update(id, payload);
  }

  @Delete(":id")
  async remove(@Param("id", ParseIntPipe) id: number) {
    return this.solicitacaoService.remove(id);
  }
}

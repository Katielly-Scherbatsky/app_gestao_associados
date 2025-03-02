import { Body, Controller, Get, Param, Put, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { UpdateAssociadoDto } from "./associado.dto";
import { AssociadoService } from "./associado.service";

@Controller("associado")
@UseGuards(AuthGuard("jwt"))
export class AssociadoController {
  constructor(private readonly associadoService: AssociadoService) {}

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
}

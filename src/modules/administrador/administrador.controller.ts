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
import { AdministradorService } from "./administrador.service";
import {
  CreateAdministradorDto,
  UpdateAdministradorDto,
} from "./administrador.dto";

@Controller("administradores")
export class AdministradorController {
  constructor(private readonly administradorService: AdministradorService) {}

  @Post()
  async create(@Body() payload: CreateAdministradorDto) {
    return await this.administradorService.create(payload);
  }

  @Get()
  async findAll() {
    return await this.administradorService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: number) {
    return this.administradorService.findOne(id);
  }

  @Put(":id")
  async update(
    @Param("id") id: number,
    @Body() payload: UpdateAdministradorDto
  ) {
    return this.administradorService.update(id, payload);
  }

  @Delete(":id")
  async remove(@Param("id", ParseIntPipe) id: number) {
    return this.administradorService.remove(id);
  }
}
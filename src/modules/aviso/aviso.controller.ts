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
import { CreateAvisoDto, UpdateAvisoDto } from "./aviso.dto";
import { AvisoService } from "./aviso.service";

@Controller("avisos")
export class AvisoController {
  constructor(private readonly avisoService: AvisoService) {}

  @Post()
  async create(@Body() payload: CreateAvisoDto) {
    return this.avisoService.create(payload);
  }

  @Get()
  async findAll() {
    return this.avisoService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id", ParseIntPipe) id: number) {
    return this.avisoService.findOne(id);
  }

  @Put(":id")
  async update(
    @Param("id", ParseIntPipe) id: number,
    @Body() payload: UpdateAvisoDto
  ) {
    return this.avisoService.update(id, payload);
  }

  @Delete(":id")
  async remove(@Param("id", ParseIntPipe) id: number) {
    return this.avisoService.remove(id);
  }
}

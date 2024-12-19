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
import { CreateFaculdadeDto, UpdateFaculdadeDto } from "./faculdade.dto";
import { FaculdadeService } from "./faculdade.service";

@Controller("faculdades")
export class FaculdadeController {
  constructor(private readonly faculdadeService: FaculdadeService) {}

  @Post()
  async create(@Body() payload: CreateFaculdadeDto) {
    return this.faculdadeService.create(payload);
  }

  @Get()
  async findAll() {
    return this.faculdadeService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id", ParseIntPipe) id: number) {
    return this.faculdadeService.findOne(id);
  }

  @Put(":id")
  async update(
    @Param("id", ParseIntPipe) id: number,
    @Body() payload: UpdateFaculdadeDto
  ) {
    return this.faculdadeService.update(id, payload);
  }

  @Delete(":id")
  async remove(@Param("id", ParseIntPipe) id: number) {
    return this.faculdadeService.remove(id);
  }
}

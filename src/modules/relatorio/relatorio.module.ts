import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Relatorio } from "../../models/relatorio.entity";
import { RelatorioController } from "./relatorio.controller";
import { RelatorioService } from "./relatorio.service";

@Module({
  imports: [TypeOrmModule.forFeature([Relatorio])],
  controllers: [RelatorioController],
  providers: [RelatorioService],
  exports: [RelatorioService],
})
export class RelatorioModule {}

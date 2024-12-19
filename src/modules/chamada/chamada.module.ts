import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Chamada } from "../../models/chamada.entity";
import { ChamadaController } from "./chamada.controller";
import { ChamadaService } from "./chamada.service";

@Module({
  imports: [TypeOrmModule.forFeature([Chamada])],
  controllers: [ChamadaController],
  providers: [ChamadaService],
  exports: [ChamadaService],
})
export class ChamadaModule {}

import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Aviso } from "../../models/aviso.entity";
import { AvisoController } from "./aviso.controller";
import { AvisoService } from "./aviso.service";

@Module({
  imports: [TypeOrmModule.forFeature([Aviso])],
  controllers: [AvisoController],
  providers: [AvisoService],
  exports: [AvisoService],
})
export class AvisoModule {}

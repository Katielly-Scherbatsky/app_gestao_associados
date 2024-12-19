import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FaculdadeController } from "./faculdade.controller";
import { Faculdade } from "../../models/faculdade.entity";
import { FaculdadeService } from "./faculdade.service";

@Module({
  imports: [TypeOrmModule.forFeature([Faculdade])],
  controllers: [FaculdadeController],
  providers: [FaculdadeService],
  exports: [FaculdadeService],
})
export class FaculdadeModule {}

import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Associado } from "src/models/associado.entity";
import { AssociadoController } from "./associado.controller";
import { AssociadoService } from "./associado.service";

@Module({
  imports: [TypeOrmModule.forFeature([Associado])],
  controllers: [AssociadoController],
  providers: [AssociadoService],
  exports: [AssociadoService],
})
export class AssociadoModule {}

import { Module } from "@nestjs/common";
import { AssociadoService } from "./associado.service";

@Module({
  providers: [AssociadoService],
  exports: [AssociadoService],
})
export class AssociadoModule {}

import { Module } from "@nestjs/common";
import { AdministradorService } from "./administrador.service";

@Module({
  providers: [AdministradorService],
  exports: [AdministradorService],
})
export class AdministradorModule {}

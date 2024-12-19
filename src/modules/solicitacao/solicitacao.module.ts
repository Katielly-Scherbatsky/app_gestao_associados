import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Solicitacao } from "../../models/solicitacao.entity";
import { SolicitacaoController } from "./solicitacao.controller";
import { SolicitacaoService } from "./solicitacao.service";

@Module({
  imports: [TypeOrmModule.forFeature([Solicitacao])],
  controllers: [SolicitacaoController],
  providers: [SolicitacaoService],
  exports: [SolicitacaoService],
})
export class SolicitacaoModule {}

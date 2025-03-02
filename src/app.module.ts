import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Associado } from "./models/associado.entity";
import { Aviso } from "./models/aviso.entity";
import { Chamada } from "./models/chamada.entity";
import { DiaSemana } from "./models/dia_semana.entity";
import { Faculdade } from "./models/faculdade.entity";
import { Solicitacao } from "./models/solicitacao.entity";
import { AssociadoModule } from "./modules/associado/associado.module";
import { AuthModule } from "./modules/auth/auth.module";
import { AvisoModule } from "./modules/aviso/aviso.module";
import { ChamadaModule } from "./modules/chamada/chamada.module";
import { FaculdadeModule } from "./modules/faculdade/faculdade.module";
import { SolicitacaoModule } from "./modules/solicitacao/solicitacao.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: process.env.DB_HOST || "localhost",
      port: +process.env.DB_PORT || 3306,
      username: process.env.DB_USER || "root",
      password: process.env.DB_PASSWORD || "root",
      database: process.env.DB_NAME || "gestao_associados_db",
      entities: [Associado, Aviso, Chamada, DiaSemana, Faculdade, Solicitacao],
      synchronize: true,
    }),
    AssociadoModule,
    AuthModule,
    AvisoModule,
    ChamadaModule,
    // DiaSemanaModule,
    FaculdadeModule,
    SolicitacaoModule,
  ],
})
export class AppModule {}

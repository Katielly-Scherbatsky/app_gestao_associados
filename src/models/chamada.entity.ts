import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Solicitacao } from "./solicitacao.entity";

@Entity("Chamada")
export class Chamada {
  @PrimaryGeneratedColumn()
  ID_Aviso: number;

  @Column()a
  Descricao: string;

  @Column({ length: 50 })
  Tipo: string;

  // @OneToMany(() => Aviso, (aviso) => aviso.Administrador)
  // avisos: Aviso[];

  // @OneToMany(() => Solicitacao, (solicitacao) => solicitacao.Administrador)
  // solicitacoes: Solicitacao[];
}

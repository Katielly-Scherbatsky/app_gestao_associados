import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Aviso } from "./aviso.entity";
import { Solicitacao } from "./solicitacao.entity";

@Entity("Administrador")
export class Administrador {
  @PrimaryGeneratedColumn()
  ID_Administrador: number;

  @Column({ length: 100 })
  Nome: string;

  @Column({ length: 14 })
  CPF: string;

  @Column({ length: 50 })
  Login: string;

  @Column({ length: 50 })
  Senha: string;

  // @OneToMany(() => Aviso, (aviso) => aviso.Administrador)
  // avisos: Aviso[];

  // @OneToMany(() => Solicitacao, (solicitacao) => solicitacao.Administrador)
  // solicitacoes: Solicitacao[];
}

import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  ManyToMany,
  JoinColumn,
  JoinTable,
} from "typeorm";
import { Faculdade } from "./faculdade.entity";
import { Aviso } from "./aviso.entity";
import { Chamada } from "./chamada.entity";
import { Solicitacao } from "./solicitacao.entity";
import { DiaSemana } from "./dia_semana.entity";

@Entity({ name: "associado" })
export class Associado {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nome: string;

  @Column({ length: 14 })
  cpf: string;

  @Column({ length: 100 })
  email: string;

  @Column({ length: 255 })
  senha: string;

  @Column({ length: 15 })
  telefone: string;

  @Column({ name: "faculdade_id" })
  faculdadeId: number;

  @ManyToOne(() => Faculdade, (faculdade) => faculdade.associados)
  @JoinColumn({ name: "faculdade_id" })
  faculdade: Faculdade;

  @Column({ length: 100 })
  curso: string;

  @Column()
  poltrona: number;

  @Column()
  tipo: number;

  @OneToMany(() => Aviso, (aviso) => aviso.associado)
  avisos: Aviso[];

  @OneToMany(() => Solicitacao, (solicitacao) => solicitacao.associado)
  solicitacoes: Solicitacao[];

  @OneToMany(() => Chamada, (chamada) => chamada.associado)
  chamadas: Chamada[];

  @ManyToMany(() => DiaSemana, (diaSemana) => diaSemana.associados)
  @JoinTable({
    name: "associado_dia_semana",
    joinColumn: {
      name: "associado_id",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: "dia_semana_id",
      referencedColumnName: "id",
    },
  })
  diasSemana: DiaSemana[];
}

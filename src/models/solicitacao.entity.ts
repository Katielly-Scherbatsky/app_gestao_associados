import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Associado } from "./associado.entity";

@Entity({ name: "solicitacao" })
export class Solicitacao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 200 })
  descricao: string;

  @Column({ length: 50 })
  tipo: string;

  @Column({ length: 20 })
  status: string;

  @Column({ name: "associado_id" })
  associadoId: number;

  @ManyToOne(() => Associado, (associado) => associado.solicitacoes)
  @JoinColumn({ name: "associado_id" })
  associado: Associado;
}

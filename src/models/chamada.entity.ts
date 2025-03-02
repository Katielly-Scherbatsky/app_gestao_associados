import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Associado } from "./associado.entity";

@Entity({ name: "chamada" })
export class Chamada {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "date" })
  data: string;

  @Column()
  presenca: boolean;

  @Column({ name: "associado_id" })
  associadoId: number;

  @ManyToOne(() => Associado, (associado) => associado.chamadas)
  @JoinColumn({ name: "associado_id" })
  associado: Associado;
}

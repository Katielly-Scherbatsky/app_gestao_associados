import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Associado } from "./associado.entity";

@Entity({ name: "chamada" })
export class Chamada {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "timestamp" })
  data: string;

  @Column()
  presenca: boolean;

  @Column({ name: "associado_id" })
  associadoId: number;

  @OneToOne(() => Associado)
  @JoinColumn({ name: "id" })
  associado: Associado;
}

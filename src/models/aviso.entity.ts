import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Associado } from "./associado.entity";

@Entity({ name: "aviso" })
export class Aviso {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descricao: string;

  @Column({ length: 50 })
  tipo: string;

  @Column({ type: "timestamp" })
  data: string;

  @Column({ name: "associado_id" })
  associadoId: number;

  @OneToOne(() => Associado)
  @JoinColumn({ name: "id" })
  associado: Associado;
}

import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Associado } from "./associado.entity";

@Entity({ name: "aviso" })
export class Aviso {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 200 })
  descricao: string;

  @Column({ length: 50 })
  tipo: string;

  @Column({ type: "date" })
  data: string;

  @Column({ name: "associado_id" })
  associadoId: number;

  @ManyToOne(() => Associado, (associado) => associado.avisos)
  @JoinColumn({ name: "associado_id" })
  associado: Associado;
}

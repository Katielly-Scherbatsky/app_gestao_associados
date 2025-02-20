import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Associado } from "./associado.entity";

@Entity({ name: "solicitacao" })
export class Solicitacao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descricao: string;

  @Column({ length: 50 })
  tipo: string;

  @Column()
  status: string;

  @Column({ name: "associado_id" })
  associadoId: number;

  @OneToOne(() => Associado)
  @JoinColumn({ name: "id" })
  associado: Associado;
}

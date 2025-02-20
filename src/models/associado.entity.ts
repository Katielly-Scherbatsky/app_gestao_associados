import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Faculdade } from "./faculdade.entity";

@Entity({ name: "associado" })
export class Associado {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nome: string;

  @Column({ length: 14 })
  cpf: string;

  @Column({ length: 15 })
  telefone: string;

  @Column({ name: "faculdade_id" })
  faculdadeId: number;

  @OneToOne(() => Faculdade)
  @JoinColumn({ name: "id" })
  faculdade: Faculdade;

  @Column({ length: 100 })
  curso: string;

  @Column()
  poltrona: number;

  @Column({ length: 255, nullable: true })
  boleto: string;

  @Column({ length: 255, nullable: true })
  anexos: string;

  @Column()
  tipo: number;
}

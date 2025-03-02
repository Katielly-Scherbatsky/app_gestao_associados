import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Associado } from "./associado.entity";

@Entity({ name: "dia_semana" })
export class DiaSemana {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 15 })
  nome: string;

  @ManyToMany(() => Associado, (associado) => associado.diasSemana)
  associados: Associado[];
}

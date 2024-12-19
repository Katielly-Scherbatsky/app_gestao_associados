import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Associado } from "./associado.entity";

@Entity("Faculdade")
export class Faculdade {
  @PrimaryGeneratedColumn()
  ID_Faculdade: number;

  @Column({ length: 100 })
  Nome: string;

  @OneToMany(() => Associado, (associado) => associado.Faculdade)
  associados: Associado[];
}

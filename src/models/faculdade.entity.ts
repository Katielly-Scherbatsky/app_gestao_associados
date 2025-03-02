import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Associado } from "./associado.entity";

@Entity({ name: "faculdade" })
export class Faculdade {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 200 })
  nome: string;

  @OneToMany(() => Associado, (associado) => associado.faculdade)
  associados: Associado[];
}

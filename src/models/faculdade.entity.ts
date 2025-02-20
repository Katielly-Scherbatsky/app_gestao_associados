import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "faculdade" })
export class Faculdade {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 200 })
  nome: string;
}

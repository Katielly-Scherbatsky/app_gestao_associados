import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Faculdade } from './faculdade.entity';
import { Chamada } from './chamada.entity';
import { Solicitacao } from './solicitacao.entity';
import { Relatorio } from './relatorio.entity';

@Entity('Associado')
export class Associado {
  @PrimaryGeneratedColumn()
  ID_Associado: number;

  @Column({ length: 100 })
  Nome: string;

  @Column({ length: 14 })
  CPF: string;

  @Column({ length: 15 })
  Telefone: string;

  @ManyToOne(() => Faculdade, (faculdade) => faculdade.associados)
  Faculdade: Faculdade;

  @Column({ length: 100 })
  Curso: string;

  @Column()
  Poltrona: number;

  @Column({ length: 255, nullable: true })
  Boleto: string;

  @Column({ length: 255, nullable: true })
  Anexos: string;

  // @OneToMany(() => Chamada, (chamada) => chamada.Associado)
  // chamadas: Chamada[];

  // @OneToMany(() => Solicitacao, (solicitacao) => solicitacao.Associado)
  // solicitacoes: Solicitacao[];

  // @OneToMany(() => Relatorio, (relatorio) => relatorio.Associado)
  // relatorios: Relatorio[];
}

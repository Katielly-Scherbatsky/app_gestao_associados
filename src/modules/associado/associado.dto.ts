import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateAssociadoDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsOptional()
  @IsString()
  cpf?: string;

  @IsOptional()
  @IsString()
  email?: string;

  @IsOptional()
  @IsString()
  senha?: string;

  @IsOptional()
  @IsString()
  telefone?: string;

  @IsOptional()
  @IsNumber()
  faculdadeId?: number;

  @IsOptional()
  @IsString()
  curso?: string;

  @IsOptional()
  @IsNumber()
  poltrona?: number;

  @IsOptional()
  @IsNumber()
  tipo?: number;
}

export class UpdateAssociadoDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsOptional()
  @IsString()
  cpf?: string;

  @IsOptional()
  @IsString()
  telefone?: string;

  @IsOptional()
  @IsNumber()
  faculdadeId?: number;

  @IsOptional()
  @IsString()
  curso?: string;

  @IsOptional()
  @IsNumber()
  poltrona?: number;
}

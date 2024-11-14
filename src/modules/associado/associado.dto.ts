import { IsNotEmpty, IsOptional, IsString, IsNumber } from "class-validator";

export class CreateAssociadoDto {
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

  @IsOptional()
  @IsString()
  boleto?: string;

  @IsOptional()
  @IsString()
  anexos?: string;
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

  @IsOptional()
  @IsString()
  boleto?: string;

  @IsOptional()
  @IsString()
  anexos?: string;
}

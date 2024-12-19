import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateRelatorioDto {
  @IsNotEmpty()
  @IsString()
  Descricao: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  Tipo: string;
}

export class UpdateRelatorioDto {
  @IsNotEmpty()
  @IsString()
  Descricao: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  Tipo: string;
}

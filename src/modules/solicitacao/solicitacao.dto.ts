import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateSolicitacaoDto {
  @IsNotEmpty()
  @IsString()
  Descricao: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  Tipo: string;
}

export class UpdateSolicitacaoDto {
  @IsNotEmpty()
  @IsString()
  Descricao: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  Tipo: string;
}

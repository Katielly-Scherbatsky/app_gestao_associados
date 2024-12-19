import { IsNotEmpty, IsString } from "class-validator";

export class CreateChamadaDto {
  @IsNotEmpty()
  @IsString()
  Descricao: string;

  @IsNotEmpty()
  @IsString()
  Tipo: string;
}

export class UpdateChamadaDto {
  @IsNotEmpty()
  @IsString()
  Descricao: string;

  @IsNotEmpty()
  @IsString()
  Tipo: string;
}

import { IsNotEmpty, IsString } from "class-validator";

export class CreateAvisoDto {
  @IsNotEmpty()
  @IsString()
  Descricao: string;

  @IsNotEmpty()
  @IsString()
  Tipo: string;
}

export class UpdateAvisoDto {
  @IsNotEmpty()
  @IsString()
  Descricao: string;

  @IsNotEmpty()
  @IsString()
  Tipo: string;
}

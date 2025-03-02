import { IsNotEmpty, IsBoolean, IsNumber, IsString } from "class-validator";

export class CreateChamadaDto {
  @IsNotEmpty()
  @IsString()
  data: string;

  @IsNotEmpty()
  @IsBoolean()
  presenca: boolean;

  @IsNotEmpty()
  @IsNumber()
  associadoId: number;
}

export class UpdateChamadaDto {
  @IsNotEmpty()
  @IsString()
  data: string;

  @IsNotEmpty()
  @IsBoolean()
  presenca: boolean;

  @IsNotEmpty()
  @IsNumber()
  associadoId: number;
}

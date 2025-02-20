import { IsNotEmpty, IsString } from "class-validator";

export class CreateFaculdadeDto {
  @IsNotEmpty()
  @IsString()
  nome: string;
}

export class UpdateFaculdadeDto {
  @IsNotEmpty()
  @IsString()
  nome: string;
}

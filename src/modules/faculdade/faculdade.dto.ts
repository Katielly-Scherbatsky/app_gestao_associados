import { IsNotEmpty, IsString } from "class-validator";

export class CreateFaculdadeDto {
  @IsNotEmpty()
  @IsString()
  Nome: string;
}

export class UpdateFaculdadeDto {
  @IsNotEmpty()
  @IsString()
  Nome: string;
}

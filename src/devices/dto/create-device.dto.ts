import { IsString } from "class-validator";

export class CreateDeviceDto {
  @IsString()
  type: string;

  @IsString()
  local: string;

  @IsString()
  name: string;
}

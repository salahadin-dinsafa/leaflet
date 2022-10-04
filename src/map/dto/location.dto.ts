import { IsOptional, IsNumber, IsString } from "class-validator";

export class LocationDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsNumber()
  Lat: number;

  @IsOptional()
  @IsNumber()
  Lng: number;
}
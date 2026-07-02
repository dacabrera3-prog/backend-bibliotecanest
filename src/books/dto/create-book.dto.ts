import { IsString, IsInt, IsOptional, IsBoolean, Min } from 'class-validator';

export class CreateBookDto {
  @IsString()
  title!: string;

  @IsString()
  author!: string;

  @IsString()
  publisher!: string;

  @IsInt()
  @Min(1900)
  year!: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  stock?: number;

  @IsOptional()
  @IsBoolean()
  isAvailable?: boolean;
}

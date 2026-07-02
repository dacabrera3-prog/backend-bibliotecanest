import { IsString, IsDateString, IsOptional, IsNumber, Min } from 'class-validator';

export class CreateLoanDto {
  @IsString()
  userId!: string;

  @IsString()
  bookId!: string;

  @IsDateString()
  dueDate!: string;

  @IsString()
  documentType!: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  discount?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  fineAmount?: number;
}

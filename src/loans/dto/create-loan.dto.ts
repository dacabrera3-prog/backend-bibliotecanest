export class CreateLoanDto {
  userId: string;
  bookId: string;
  dueDate: Date;
  documentType: string;
  discount?: number;
  fineAmount?: number;
}

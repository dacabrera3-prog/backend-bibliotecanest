export class Loan {
  id!: string;
  userId!: string;
  bookId!: string;
  loanDate!: Date;
  dueDate!: Date;
  returnDate!: Date | null;
  documentType!: string;
  discount!: number;
  fineAmount!: number;
  isActive!: boolean;
  createdAt!: Date;
  updatedAt!: Date;
}

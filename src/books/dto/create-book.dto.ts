export class CreateBookDto {
  title: string;
  author: string;
  publisher: string;
  year: number;
  stock?: number;
  isAvailable?: boolean;
}

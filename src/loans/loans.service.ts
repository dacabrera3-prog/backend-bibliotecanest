import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { CreateLoanDto } from './dto/create-loan.dto';
import { UpdateLoanDto } from './dto/update-loan.dto';

@Injectable()
export class LoansService {
  constructor(private prisma: PrismaService) {}

  create(createLoanDto: CreateLoanDto) {
    return this.prisma.loan.create({
      data: {
        ...createLoanDto,
        dueDate: new Date(createLoanDto.dueDate),
      },
      include: {
        user: true,
        book: true,
      },
    });
  }

  findAll() {
    return this.prisma.loan.findMany({
      include: {
        user: true,
        book: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.loan.findUnique({
      where: { id },
      include: {
        user: true,
        book: true,
      },
    });
  }

  update(id: string, updateLoanDto: UpdateLoanDto) {
    return this.prisma.loan.update({
      where: { id },
      data: updateLoanDto,
      include: {
        user: true,
        book: true,
      },
    });
  }

  remove(id: string) {
    return this.prisma.loan.delete({
      where: { id },
      include: {
        user: true,
        book: true,
      },
    });
  }
}

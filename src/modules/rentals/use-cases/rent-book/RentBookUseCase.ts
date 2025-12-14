import { BookCopyRepository } from '../../../books/repositories/BookCopyRepository';
import { UserRepository } from '../../../users/repositories/UserRepository';
import { RentalRepository } from '../../repositories/RentalRepository';

interface RentBookInput {
  userId: string;
  bookId: string;
}

export class RentBookUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly bookCopyRepository: BookCopyRepository,
    private readonly rentalRepository: RentalRepository,
  ) {}
  async execute({ userId, bookId }: RentBookInput) {}
}

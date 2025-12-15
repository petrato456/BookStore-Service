import { BookCopyRepository } from '../../../books/repositories/BookCopyRepository';
import { UserRepository } from '../../../users/domain/repositories/UserRepository';
import { Rental } from '../../domain/Rental';
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
  async execute({ userId, bookId }: RentBookInput) {
    const user = await this.userRepository.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }
    if (!user.canRentBooks()) {
      throw new Error('User is not allowed to rent books');
    }
    const bookCopy =
      await this.bookCopyRepository.findAvailableByBookId(bookId);
    if (!bookCopy) {
      throw new Error('No available copies for this book');
    }

    bookCopy.rent();

    const rental = new Rental({
      id: crypto.randomUUID(),
      userId,
      bookCopyId: bookCopy.getId(),
      rentedAt: new Date(),
    });

    await this.bookCopyRepository.save(bookCopy);
    await this.rentalRepository.save(rental);

    return rental;
  }
}

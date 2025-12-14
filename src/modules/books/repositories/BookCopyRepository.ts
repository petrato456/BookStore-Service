import { BookCopy } from '../domain/BookCopy';

export interface BookCopyRepository {
  findAvailableByBookId(bookId: string): Promise<BookCopy | null>;
  save(bookCopy: BookCopy): Promise<void>;
}

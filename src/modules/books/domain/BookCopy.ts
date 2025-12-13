export type BookCopyStatus = 'AVAILABLE' | 'RENTED';

interface BookCopyProps {
  id: string;
  bookId: string;
}

export class BookCopy {
  private readonly id: string;
  private readonly bookId: string;
  private status: BookCopyStatus;

  constructor(props: BookCopyProps) {
    this.id = props.id;
    this.bookId = props.bookId;
    this.status = 'AVAILABLE';
  }

  rent() {
    if (this.status === 'RENTED') {
      throw new Error('Book copy is already rented');
    }
    this.status = 'RENTED';
  }

  return() {
    if (this.status === 'AVAILABLE') {
      throw new Error('Book copy is not rented');
    }
    this.status = 'AVAILABLE';
  }

  getId() {
    return this.id;
  }

  getBookId() {
    return this.bookId;
  }

  getStatus() {
    return this.status;
  }
}

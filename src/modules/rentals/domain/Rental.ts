export type RentalStatus = 'OPEN' | 'CLOSED';

interface RentalProps {
  id: string;
  userId: string;
  bookCopyId: string;
  rentedAt: Date;
}

export class Rental {
  private readonly id: string;
  private readonly userId: string;
  private readonly bookCopyId: string;
  private rentedAt: Date;
  private returnedAt?: Date;
  private status: RentalStatus;

  constructor(props: RentalProps) {
    this.id = props.id;
    this.userId = props.userId;
    this.bookCopyId = props.bookCopyId;
    this.rentedAt = props.rentedAt;
    this.status = 'OPEN';
  }

  close(returnedAt: Date) {
    if (this.status === 'CLOSED') {
      throw new Error('Rental is already closed');
    }

    this.rentedAt = returnedAt;
    this.status = 'CLOSED';
  }

  getId() {
    return this.id;
  }

  getStatus() {
    return this.status;
  }

  getReturnedAt() {
    return this.returnedAt;
  }
}

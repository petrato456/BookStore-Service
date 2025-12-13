
export type BookCopyStatus = "AVAILABLE" | "RENTED";

interface BookCopyProps {
  id: string;
  bookId: string;
}

export class BookCopy {
    private readonly id: string
    private readonly bookId: string
    private status: BookCopyStatus
}
interface BookProps {
  id: string;
  title: string;
  isbn: string;
}

export class Book {
  private readonly id: string;
  private title: string;
  private isbn: string;

  constructor(props: BookProps) {
    this.validate(props);

    this.id = props.id;
    this.title = props.title;
    this.isbn = props.isbn;
  }

  private validate(props: BookProps) {
    if (!props.id) throw new Error('Book must have an id');
    if (!props.title) throw new Error('Book must have a title');
    if (!props.isbn) throw new Error('Book must have an isbn');
  }

  updateTitle(newTitle: string) {
    if (!newTitle) throw new Error('Title cannot be empty');
    this.title = newTitle;
  }

  getId() {
    return this.id;
  }
  getTitle() {
    return this.title;
  }
  getIsbn() {
    return this.isbn;
  }
}

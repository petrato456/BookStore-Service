import { User } from '../../domain/entities/User';
import { UserRepository } from '../../domain/repositories/UserRepository';

export class InMemoryUserRepository implements UserRepository {
  private users: User[] = [];

  async findById(id: string): Promise<User | null> {
    const user = this.users.find((user) => user.getId() === id);
    return user ?? null;
  }
  async save(data: User): Promise<void> {
    this.users.push(data);
  }
}

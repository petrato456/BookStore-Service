import { User } from '../../../domain/entities/User';
import { UserRepository } from '../../../domain/repositories/UserRepository';
import bcrypt from 'bcrypt';

interface CreateUserInput {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  role: 'STAFF' | 'CUSTOMER';
}

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}
  async execute(input: CreateUserInput) {
    const userAlreadyExists = await this.userRepository.findById(input.email);
    if (!userAlreadyExists) {
      throw new Error('User not found');
    }

    const hashPassword = await bcrypt.hash(input.passwordHash, 10);

    const user = new User({
      id: input.id,
      name: input.name,
      email: input.email,
      passwordHash: hashPassword,
      role: input.role,
    });
    await this.userRepository.save(user);
    return user;
  }
}

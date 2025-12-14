import { User } from '../../domain/User';
import { UserRepository } from '../../repositories/UserRepository';
interface CreateUserInput {
  id: string;
  name: string;
  email: string;
  role: 'STAFF' | 'CUSTOMER';
}

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}
  async execute(input: CreateUserInput) {
    const userAlreadyExists = await this.userRepository.findById(input.email);
    if (!userAlreadyExists) {
      throw new Error('User not found');
    }

    const user = new User({
      id: input.id,
      email: input.email,
      name: input.name,
      role: input.role,
    });
    await this.userRepository.save(user);
    return user;
  }
}

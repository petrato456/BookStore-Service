import { describe, it, expect, beforeEach } from 'vitest';

import { InMemoryUserRepository } from '../../../infra/repositories/InMemoryUserRepository';
import { CreateUserUseCase } from './CreateUserUseCase.ts';

let userRepository: InMemoryUserRepository;
let useCase: CreateUserUseCase;

beforeEach(() => {
  userRepository = new InMemoryUserRepository();
  useCase = new CreateUserUseCase(userRepository);
});
describe('Create user', () => {
  it('should create a new user', async () => {
    const user = await useCase.execute({
      id: 'user-1',
      name: 'Matheus',
      email: 'matheus@email.com',
      passwordHash: 'hashed-password',
      role: 'CUSTOMER',
    });
    expect(user).toBeDefined();
    expect(user.getId()).toBe('user-1');
    expect(user.getRole()).toBe('CUSTOMER');
    expect(user.getStatus()).toBe('ACTIVE');
  });
});

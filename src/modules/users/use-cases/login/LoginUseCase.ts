interface LoginUserInput {
  email: string;
  password: string;
}

export class LoginUseCase {
  constructor() {}

  async execute(input: LoginUserInput) {}
}

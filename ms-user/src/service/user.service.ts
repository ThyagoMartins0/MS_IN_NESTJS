import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  createUser({name, email}: {name: string, email: string}): string {
    return `User ${name} created with email ${email}`;
  }

  getUser(): string {
    return 'User data retrieved';
  }
}

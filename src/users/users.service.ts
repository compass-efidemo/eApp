import { Injectable } from '@nestjs/common';

export type User = {
  id: string,
  name: string
}

export type Users = User[]


@Injectable()
export class UsersService {
  async findMany(): Promise<Users> {
    return [
      { id: 'a', name: 'John Doe' },
      { id: 'b', name: 'Jane Doe' },
    ];
  }

  async findOne(id: string): Promise<User> {
    return { id, name: 'John Doe' };
  }
}

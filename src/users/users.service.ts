import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  findMany() {
    return [
      { id: 'a', name: 'User1' },
      { id: 'b', name: 'User2' },
    ];
  }
}

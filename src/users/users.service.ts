import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  async findMany(): Promise<{ id: string; name: string }[]> {
    return [
      { id: 'a', name: 'John Doe' },
      { id: 'b', name: 'Jane Doe' },
    ];
  }

  async findOne(id: string): Promise<{ id: string; name: string }> {
    return { id, name: 'John Doe' };
  }
}

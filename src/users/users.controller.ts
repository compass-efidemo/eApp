import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async findMany(): Promise<{ id: string; name: string }[]> {
    return this.usersService.findMany();
  }

  @Get(':id/balance')
  async getBalanceOfUser(): Promise<number> {
    return 5_000;
  }
}

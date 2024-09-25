import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiParam } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) { }

  @Get()
  async findMany(): Promise<{ id: string; name: string }[]> {
    return this.usersService.findMany();
  }

  @ApiParam({
    name: 'id',
  })
  @Get(':id')
  async findOne(id: string): Promise<{ id: string; name: string }> {
    return await this.usersService.findOne(id);
  }
}

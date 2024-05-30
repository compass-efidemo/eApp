import { Controller, Get } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  async findMany(): Promise<{ id: string; name: string }[]> {
    return [
      {
        id: '1',
        name: 'Product 1',
      },
    ];
  }
}

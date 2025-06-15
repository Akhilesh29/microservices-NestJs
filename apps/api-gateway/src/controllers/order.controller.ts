import { Controller, Get, Post, Put, Body, Param, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateOrderDto, UpdateOrderDto, Order } from '@app/interfaces';

@Controller('orders')
export class OrderController {
  constructor(
    @Inject('ORDER_SERVICE') private readonly orderService: ClientProxy,
  ) {}

  @Post()
  async createOrder(@Body() createOrderDto: CreateOrderDto): Promise<Order> {
    return this.orderService.send({ cmd: 'create_order' }, createOrderDto).toPromise();
  }

  @Get(':id')
  async getOrder(@Param('id') id: string): Promise<Order> {
    return this.orderService.send({ cmd: 'get_order' }, id).toPromise();
  }

  @Put(':id')
  async updateOrder(
    @Param('id') id: string,
    @Body() updateOrderDto: UpdateOrderDto,
  ): Promise<Order> {
    return this.orderService
      .send({ cmd: 'update_order' }, { id, ...updateOrderDto })
      .toPromise();
  }

  @Get('user/:userId')
  async getUserOrders(@Param('userId') userId: string): Promise<Order[]> {
    return this.orderService.send({ cmd: 'get_user_orders' }, userId).toPromise();
  }
} 
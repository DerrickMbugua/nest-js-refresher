import { Body, Controller, Get, HttpException, HttpStatus, NotFoundException, Param, ParseIntPipe, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateCustomerDto } from './dtos/CreateCustomer.dto';

@Controller('user')
export class UserController {

  constructor(private userService: UserService){}

  @Get()
  getUser(){
    return this.userService.findAllUsers();
  }
  
  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number){
    const customer = this.userService.findUserById(id);
    if(!customer){
      // throw new NotFoundException(`Customer with ID ${id} not found`);
      throw new HttpException('Customer not found',HttpStatus.BAD_REQUEST);
    }else{
      return customer;
    }
  }

  @Post()
  createCustomer(@Body() createCustomerDto: CreateCustomerDto){
    this.userService.saveCustomer(createCustomerDto);
    return "Customer created successfully";
  }
}

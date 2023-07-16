import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dtos/CreateCustomer.dto';

@Injectable()
export class UserService {

  customers = [
    {
      id: 1,
      name: "Derrick",
      age: 26
    },
    {
      id: 2,
      name: "Rick",
      age: 26
    },
    {
      id: 3,
      name: "Meg",
      age: 26
    },
  ];
  findAllUsers(){
    return this.customers;
  }

  findUserById(id: number){
    return this.customers.find((customer) => customer.id === id);
  }

  saveCustomer(createCustomerDto: CreateCustomerDto){
    this.customers.push(createCustomerDto);
  }
}

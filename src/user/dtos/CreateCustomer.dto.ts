import { IsNotEmpty, IsNumber, IsNumberString } from "class-validator";

export class CreateCustomerDto{

  @IsNumberString()
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  age: number;
}
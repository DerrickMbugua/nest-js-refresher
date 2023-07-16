import { IsNotEmpty, IsNotEmptyObject, IsNumber, IsNumberString, Min, MinLength, ValidateNested } from "class-validator";
import { CreateAddress } from "./CreateAddress.dto";
import { Type } from "class-transformer";

export class CreateCustomerDto{

  @IsNumberString()
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  @MinLength(10,{
    message: 'Name is too short.',
  })
  name: string;

  @IsNumber()
  @IsNotEmpty()
  age: number;

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => CreateAddress)
  address: CreateAddress;
}
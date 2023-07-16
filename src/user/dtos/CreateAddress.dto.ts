import { IsNotEmpty } from "class-validator";

export class CreateAddress {
  @IsNotEmpty()
  line1: string;
  line2?: string;
  @IsNotEmpty()
  line3: string;
}
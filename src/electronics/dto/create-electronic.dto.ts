import {
  // decorators here

  IsString,
  IsNumber,
} from 'class-validator';
import {
  // decorators here
  ApiProperty,
} from '@nestjs/swagger';

export class CreateElectronicDto {
  @ApiProperty()
  @IsString()
  abc: string;

  @ApiProperty()
  @IsString()
  maintenance_instructions: string;

  @ApiProperty()
  @IsString()
  connectivity: string;

  @ApiProperty()
  @IsString()
  resolution: string;

  @ApiProperty()
  @IsString()
  screenType: string;

  @ApiProperty()
  @IsString()
  screenSize: string;

  @ApiProperty()
  @IsString()
  operatingSystem: string;

  @ApiProperty()
  @IsString()
  processor: string;

  @ApiProperty()
  @IsNumber()
  ram: number;

  @ApiProperty()
  @IsNumber()
  storageCapacity: number;

  @ApiProperty()
  @IsNumber()
  batteryLife: number;

  @ApiProperty()
  @IsString()
  weightUnit: string;

  @ApiProperty()
  @IsNumber()
  weight: number;

  @ApiProperty()
  @IsString()
  dimensions: string;

  @ApiProperty()
  @IsString()
  warrantyPeriod: string;

  @ApiProperty()
  @IsNumber()
  price: number;

  @ApiProperty()
  @IsString()
  currency: string;

  @ApiProperty()
  @IsString()
  color: string;

  @ApiProperty()
  @IsString()
  modelNumber: string;

  @ApiProperty()
  @IsString()
  electronicsType: string;

  @ApiProperty()
  @IsString()
  brand: string;

  @ApiProperty()
  @IsString()
  name: string;

  // Don't forget to use the class-validator decorators in the DTO properties.
}

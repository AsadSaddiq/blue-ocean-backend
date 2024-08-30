import { ApiProperty } from '@nestjs/swagger';

export class Electronic {
  @ApiProperty()
  abc: string;

  @ApiProperty()
  maintenance_instructions: string;

  @ApiProperty()
  connectivity: string;

  @ApiProperty()
  resolution: string;

  @ApiProperty()
  screenType: string;

  @ApiProperty()
  screenSize: string;

  @ApiProperty()
  operatingSystem: string;

  @ApiProperty()
  processor: string;

  @ApiProperty()
  ram: number;

  @ApiProperty()
  storageCapacity: number;

  @ApiProperty()
  batteryLife: number;

  @ApiProperty()
  weightUnit: string;

  @ApiProperty()
  weight: number;

  @ApiProperty()
  dimensions: string;

  @ApiProperty()
  warrantyPeriod: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  currency: string;

  @ApiProperty()
  color: string;

  @ApiProperty()
  modelNumber: string;

  @ApiProperty()
  electronicsType: string;

  @ApiProperty()
  brand: string;

  @ApiProperty()
  name: string;

  @ApiProperty({
    type: String,
  })
  id: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}

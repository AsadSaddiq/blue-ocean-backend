import { Exclude, Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { MotorImage } from './motor-image';
import { Repaint } from './repaint';
import { Feature } from './feature';
import { SparePart } from './spare-part';
import { IsArray, ValidateNested } from 'class-validator';
import { Rating } from './rating';
import { Currency } from '../enum/currency.enum';
import { FuelType } from '../enum/fuel-type.enum';
import { PartType } from '../enum/part-type.enum';
import { TransmissionType } from '../enum/transmission-type.enum';
import { VehicleBrand } from '../enum/vehicle-brand.enum';
import { VehicleType } from '../enum/vehicle-type.enum';

export class Motor {
  @ApiProperty({
    type: String,
    example: 'motor123',
  })
  @Expose()
  id: string;

  @ApiProperty({
    type: Date,
    example: '2024-01-01T00:00:00.000Z',
  })
  @Expose()
  createdAt: Date;

  @ApiProperty({
    type: Date,
    example: '2024-01-01T00:00:00.000Z',
  })
  @Expose()
  updatedAt: Date;

  @ApiProperty({
    type: String,
    example: 'Model S',
  })
  @Expose()
  name: string;

  @ApiProperty({
    type: String,
    example: 'Tesla',
  })
  @Expose()
  brandName: VehicleBrand;

  @ApiProperty({
    type: String,
    example: 'Sedan',
  })
  @Expose()
  vehicleType: VehicleType;

  @ApiProperty({
    type: Number,
    example: 1000,
  })
  @Expose()
  engineCapacity: number;

  @ApiProperty({
    type: Number,
    example: 500,
  })
  @Expose()
  horsepower: number;

  @ApiProperty({
    type: Number,
    example: 600,
  })
  @Expose()
  torque: number;

  @ApiProperty({
    type: String,
    example: 'Electric',
  })
  @Expose()
  fuelType: FuelType;

  @ApiProperty({
    type: String,
    example: 'Automatic',
  })
  @Expose()
  transmission: TransmissionType;

  @ApiProperty({
    type: String,
    example: 'Tesla Inc.',
  })
  @Expose()
  manufacturer: string;

  @ApiProperty({
    type: String,
    example: '2024',
  })
  @Expose()
  model: string;

  @ApiProperty({
    type: Number,
    example: 250,
  })
  @Expose()
  maxSpeed: number;

  @ApiProperty({
    type: Number,
    example: 3.2,
  })
  @Expose()
  acceleration: number;

  @ApiProperty({
    type: Number,
    example: 75,
  })
  @Expose()
  fuelCapacity: number;

  @ApiProperty({
    type: Number,
    example: 20000,
  })
  @Expose()
  mileage: number;

  @ApiProperty({
    type: Number,
    example: 70000,
  })
  @Expose()
  price: number;

  @ApiProperty({
    type: String,
    example: 'USD',
  })
  @Expose()
  currency: Currency;

  @ApiProperty({
    type: String,
    example: 'Red',
  })
  @Expose()
  color: string;

  @ApiProperty({
    type: String,
    example: 'Black',
  })
  @Expose()
  interiorColor: string;

  @ApiProperty({
    type: Number,
    example: 5,
  })
  @Expose()
  seatingCapacity: number;

  @ApiProperty({
    type: Number,
    example: 4,
  })
  @Expose()
  doors: number;

  @ApiProperty({
    type: String,
    example: 'State Insurance',
    nullable: true,
  })
  @Expose()
  insuranceProvider?: string;

  @ApiProperty({
    type: Date,
    example: '2025-01-01T00:00:00.000Z',
    nullable: true,
  })
  @Expose({ groups: ['admin'] })
  insuranceExpiryDate?: Date;

  @ApiProperty({
    type: Number,
    example: 6,
  })
  @Expose()
  numberOfCylinders: number;

  @ApiProperty({
    type: String,
    example: 'New York',
  })
  @Expose()
  location: string;

  @ApiProperty({
    type: Number,
    example: 50000,
  })
  @Expose()
  kilometersDriven: number;

  @ApiProperty({
    type: String,
    example: 'user123',
  })
  @Expose()
  user: string;

  // Relations
  @ApiProperty({
    type: [MotorImage],
    description: 'List of images associated with the motor',
    nullable: true,
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Expose()
  images?: MotorImage[];

  @ApiProperty({
    type: [Repaint],
    description: 'List of repaint records associated with the motor',
    nullable: true,
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Expose()
  repaints?: Repaint[];

  @ApiProperty({
    type: [Rating],
    description: 'List of ratings associated with the motor',
    nullable: true,
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Expose()
  ratings?: Rating[];

  @ApiProperty({
    type: [Feature],
    description: 'List of features associated with the motor',
    nullable: true,
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Expose()
  features?: Feature[];

  @ApiProperty({
    type: [SparePart],
    description: 'List of spare parts associated with the motor',
    nullable: true,
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Expose()
  spareParts?: SparePart[];
}

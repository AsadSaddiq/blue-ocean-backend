import { ApiProperty } from '@nestjs/swagger';
import { MotorImage } from './motor-image';
import { Repaint } from './repaint';
import { Feature } from './feature';
import { SparePart } from './spare-part';
import { IsArray, ValidateNested } from 'class-validator';
// import { ManyToOne } from 'typeorm';
// import { UserEntity } from '../../users/infrastructure/persistence/relational/entities/user.entity';

export class Motor {
  @ApiProperty({ type: String })
  id: any;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty({ type: String })
  name: string;

  @ApiProperty({ type: String })
  brandName: string;

  @ApiProperty({ type: String })
  vehicleType: string;

  @ApiProperty({ type: Number })
  engineCapacity: number;

  @ApiProperty({ type: Number })
  horsepower: number;

  @ApiProperty({ type: Number })
  torque: number;

  @ApiProperty({ type: String })
  fuelType: string;

  @ApiProperty({ type: String })
  transmission: string;

  @ApiProperty({ type: String })
  manufacturer: string;

  @ApiProperty({ type: String })
  model: string;

  @ApiProperty({ type: Number })
  year: number;

  @ApiProperty({ type: Number })
  weight: number;

  @ApiProperty({ type: String })
  dimensions: string;

  @ApiProperty({ type: Number })
  maxSpeed: number;

  @ApiProperty({ type: Number })
  acceleration: number;

  @ApiProperty({ type: Number })
  fuelCapacity: number;

  @ApiProperty({ type: Number })
  mileage: number;

  @ApiProperty({ type: Number })
  price: number;

  @ApiProperty({ type: String })
  currency: string;

  @ApiProperty({ type: String })
  color: string;

  @ApiProperty({ type: String })
  interiorColor: string;

  @ApiProperty({ type: Number })
  seatingCapacity: number;

  @ApiProperty({ type: Number })
  doors: number;

  @ApiProperty({ type: Number })
  safetyRating: number;

  @ApiProperty({ type: Number })
  warrantyYears: number;

  @ApiProperty({ type: String, nullable: true })
  insuranceProvider?: string;

  @ApiProperty({ type: Date, nullable: true })
  insuranceExpiryDate?: Date;

  @ApiProperty({ type: Number })
  numberOfCylinders: number;

  @ApiProperty({ type: String })
  location: string;

  @ApiProperty({ type: Number })
  kilometersDriven: number;

  // @ManyToOne(() => UserEntity, (user) => user.motors)
  // userId: UserEntity;

  @ApiProperty({ type: Number })
  user: any;

  // Relations
  @ApiProperty({ type: [MotorImage], nullable: true })
  @IsArray()
  @ValidateNested({ each: true })
  images?: MotorImage[];

  @ApiProperty({ type: [Repaint], nullable: true })
  @IsArray()
  @ValidateNested({ each: true })
  repaints?: Repaint[];

  @ApiProperty({ type: [Feature], nullable: true })
  @IsArray()
  @ValidateNested({ each: true })
  features?: Feature[];

  @ApiProperty({ type: [SparePart], nullable: true })
  @IsArray()
  @ValidateNested({ each: true })
  spareParts?: SparePart[];
}

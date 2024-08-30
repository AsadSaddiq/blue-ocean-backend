import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNumber,
  IsOptional,
  IsArray,
  // IsUUID,
  IsDateString,
  // IsIn,
} from 'class-validator';
import { CreateMotorImageDto } from './create-motor-image.dto';
import { CreateSparePartDto } from './create-spare-part.dto';
// import { CreateRatingDto } from './create-rating.dto';
import { CreateRepaintDto } from './create-repaint.dto';
import { CreateFeatureDto } from './create-feature.dto';
import { Type } from 'class-transformer';
// import { UUID } from 'crypto';

export class CreateMotorDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty({ default: 'other' })
  @IsString()
  @IsOptional()
  brandName: string;

  @ApiProperty()
  @IsString()
  vehicleType: string;

  @ApiProperty()
  @IsNumber()
  engineCapacity: number;

  @ApiProperty()
  @IsNumber()
  horsepower: number;

  @ApiProperty()
  @IsNumber()
  torque: number;

  @ApiProperty()
  @IsString()
  fuelType: string;

  @ApiProperty()
  @IsString()
  transmission: string;

  @ApiProperty()
  @IsString()
  manufacturer: string;

  @ApiProperty({ default: 'unknown' })
  @IsString()
  @IsOptional()
  model: string;

  @ApiProperty()
  @IsNumber()
  year: number;

  @ApiProperty()
  @IsNumber()
  weight: number;

  @ApiProperty()
  @IsString()
  dimensions: string;

  @ApiProperty()
  @IsNumber()
  maxSpeed: number;

  @ApiProperty()
  @IsNumber()
  acceleration: number;

  @ApiProperty({ default: 0.0 })
  @IsNumber()
  @IsOptional()
  fuelCapacity: number;

  @ApiProperty({ default: 0.0 })
  @IsNumber()
  @IsOptional()
  mileage: number;

  @ApiProperty()
  @IsNumber()
  price: number;

  @ApiProperty({ default: 'USD' })
  @IsString()
  @IsOptional()
  currency: string;

  @ApiProperty({ default: 'unspecified' })
  @IsString()
  @IsOptional()
  color: string;

  @ApiProperty({ default: 'unspecified' })
  @IsString()
  @IsOptional()
  interiorColor: string;

  @ApiProperty({ default: 5 })
  @IsNumber()
  @IsOptional()
  seatingCapacity: number;

  @ApiProperty({ default: 4 })
  @IsNumber()
  @IsOptional()
  doors: number;

  @ApiProperty({ default: 0 })
  @IsNumber()
  @IsOptional()
  safetyRating: number;

  @ApiProperty({ default: 0 })
  @IsNumber()
  @IsOptional()
  warrantyYears: number;

  @ApiProperty({ nullable: true })
  @IsString()
  @IsOptional()
  insuranceProvider: string;

  @ApiProperty({ nullable: true })
  @IsDateString()
  @IsOptional()
  insuranceExpiryDate: Date;

  @ApiProperty({ default: 4 })
  @IsNumber()
  @IsOptional()
  numberOfCylinders: number;

  @ApiProperty({ default: 'unknown' })
  @IsString()
  @IsOptional()
  location: string;

  @ApiProperty({ default: 0.0 })
  @IsNumber()
  @IsOptional()
  kilometersDriven: number;

  @ApiProperty()
  @IsNumber()
  user: number;

  @ApiProperty({ type: [CreateMotorImageDto], required: false, isArray: true })
  @IsOptional()
  @Type(() => CreateMotorImageDto)
  @IsArray()
  images: CreateMotorImageDto[];

  @ApiProperty({ type: [CreateSparePartDto], required: false, isArray: true })
  @IsOptional()
  @IsArray()
  sparePartsRelated: CreateSparePartDto[];

  @ApiProperty({ type: [CreateRepaintDto], required: false, isArray: true })
  @IsOptional()
  @IsArray()
  repaints: CreateRepaintDto[];

  @ApiProperty({ type: [CreateFeatureDto], required: false, isArray: true })
  @IsOptional()
  @IsArray()
  features: CreateFeatureDto[];
}

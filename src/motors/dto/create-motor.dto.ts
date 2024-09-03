import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNumber,
  IsOptional,
  IsArray,
  IsDateString,
} from 'class-validator';
import { CreateMotorImageDto } from './create-motor-image.dto';
import { CreateSparePartDto } from './create-spare-part.dto';
// import { CreateRatingDto } from './create-rating.dto';
import { CreateRepaintDto } from './create-repaint.dto';
import { CreateFeatureDto } from './create-feature.dto';
import { Type } from 'class-transformer';
import { CreateRatingDto } from './create-rating.dto';
import { Currency } from '../enum/currency.enum';
import { FuelType } from '../enum/fuel-type.enum';
import { TransmissionType } from '../enum/transmission-type.enum';
import { VehicleBrand } from '../enum/vehicle-brand.enum';
import { VehicleType } from '../enum/vehicle-type.enum';

export class CreateMotorDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty({ default: 'other' })
  @IsString()
  @IsOptional()
  brandName: VehicleBrand;

  @ApiProperty()
  @IsString()
  vehicleType: VehicleType;

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
  fuelType: FuelType;

  @ApiProperty()
  @IsString()
  transmission: TransmissionType;

  @ApiProperty()
  @IsString()
  manufacturer: string;

  @ApiProperty({ default: 'unknown' })
  @IsString()
  @IsOptional()
  model: string;

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
  currency: Currency;

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
  user: any;

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

  @ApiProperty({ type: [CreateRatingDto], required: false, isArray: true })
  @IsOptional()
  @IsArray()
  ratings?: CreateRatingDto[];

  @ApiProperty({ type: [CreateFeatureDto], required: false, isArray: true })
  @IsOptional()
  @IsArray()
  features: CreateFeatureDto[];
}

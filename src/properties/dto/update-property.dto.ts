import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsBoolean,
  IsNumber,
  IsOptional,
  IsDateString,
  IsArray,
  // ValidateIf,
} from 'class-validator';
import { PropertyImageDto } from './property-image.dto';
import { Type, Transform } from 'class-transformer';

export class UpdatePropertyDto {
  @ApiProperty()
  @IsString()
  @Transform(({ value }) => String(value).trim())
  contactName: string;

  @ApiProperty()
  @IsString()
  @Transform(({ value }) => String(value).trim())
  contactEmail: string;

  @ApiProperty()
  @IsString()
  @Transform(({ value }) => String(value).trim())
  contactNumber: string;

  @ApiProperty()
  @IsDateString()
  @Transform(({ value }) => new Date(value).toISOString())
  availableFrom: Date;

  @ApiProperty()
  @IsString()
  @Transform(({ value }) => String(value).trim())
  currency: string;

  @ApiProperty()
  @IsString()
  @Transform(({ value }) => String(value).trim())
  rentPeriod: string;

  @ApiProperty()
  @IsNumber()
  @Transform(({ value }) => parseFloat(value))
  price: number;

  @ApiProperty()
  @IsString()
  @Transform(({ value }) => String(value).trim())
  address: string;

  @ApiProperty()
  @IsString()
  @Transform(({ value }) => String(value).trim())
  heatingSystem: string;

  @ApiProperty()
  @IsString()
  @Transform(({ value }) => String(value).trim())
  coolingSystem: string;

  @ApiProperty()
  @IsString()
  @Transform(({ value }) => String(value).trim())
  city: string;

  @ApiProperty()
  @IsString()
  @Transform(({ value }) => String(value).trim())
  country: string;

  @ApiProperty()
  @IsNumber()
  @Transform(({ value }) => parseFloat(value))
  area: number;

  @ApiProperty()
  @IsNumber()
  @Transform(({ value }) => parseFloat(value))
  parkingSpaces: number;

  @ApiProperty()
  @IsNumber()
  @Transform(({ value }) => parseFloat(value))
  floorNumber: number;

  @ApiProperty()
  @IsNumber()
  @Transform(({ value }) => parseFloat(value))
  bathrooms: number;

  @ApiProperty()
  @IsNumber()
  @Transform(({ value }) => parseFloat(value))
  bed: number;

  @ApiProperty()
  @IsNumber()
  @Transform(({ value }) => parseFloat(value))
  bedrooms: number;

  @ApiProperty()
  @IsString()
  @Transform(({ value }) => String(value).trim())
  propertyType: string;

  @ApiProperty()
  @IsString()
  @Transform(({ value }) => String(value).trim())
  description: string;

  @ApiProperty()
  @IsString()
  @Transform(({ value }) => String(value).trim())
  purpose: string;

  @ApiProperty()
  @IsString()
  @Transform(({ value }) => String(value).trim())
  title: string;

  @ApiProperty()
  @IsNumber()
  @Transform(({ value }) => parseFloat(value))
  owner: any;

  @ApiProperty()
  @IsBoolean()
  isFurnished: boolean = true;

  @ApiProperty({ type: [PropertyImageDto], required: false, isArray: true })
  @IsOptional()
  @Type(() => PropertyImageDto)
  @IsArray()
  images: PropertyImageDto[];

  @ApiProperty({ type: [String], required: false, isArray: true })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @Transform(({ value }) =>
    Array.isArray(value) ? value.map((v) => String(v).trim()) : [],
  )
  amenities: any[];
}

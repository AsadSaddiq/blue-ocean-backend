import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  // Length,
  MaxLength,
  ValidateNested,
} from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { CreateFurniturImageDto } from './furnitur-image.dto';

export class CreateFurniturDto {
  @ApiProperty()
  @IsString()
  @MaxLength(100)
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @MaxLength(100)
  @IsNotEmpty()
  brand_name: string;

  @ApiProperty({
    enum: [
      'table',
      'chair',
      'sofa',
      'bed',
      'cabinet',
      'desk',
      'shelf',
      'stool',
      'dresser',
      'bench',
      'armchair',
      'recliner',
      'nightstand',
      'wardrobe',
      'bookcase',
      'console',
      'ottoman',
      'futon',
      'barstool',
      'sectional',
      'loveseat',
      'beanbag',
      'changing_table',
      'daybed',
      'murphy_bed',
      'other',
    ],
  })
  @IsEnum([
    'table',
    'chair',
    'sofa',
    'bed',
    'cabinet',
    'desk',
    'shelf',
    'stool',
    'dresser',
    'bench',
    'armchair',
    'recliner',
    'nightstand',
    'wardrobe',
    'bookcase',
    'console',
    'ottoman',
    'futon',
    'barstool',
    'sectional',
    'loveseat',
    'beanbag',
    'changing_table',
    'daybed',
    'murphy_bed',
    'other',
  ])
  @IsNotEmpty()
  furniture_type: string;

  @ApiProperty({
    enum: [
      'wood',
      'metal',
      'plastic',
      'fabric',
      'leather',
      'composite',
      'glass',
      'rattan',
      'vinyl',
      'stone',
      'ceramic',
      'bamboo',
      'marble',
      'particleboard',
      'fiberboard',
      'plywood',
      'natural_fiber',
      'other',
    ],
  })
  @IsEnum([
    'wood',
    'metal',
    'plastic',
    'fabric',
    'leather',
    'composite',
    'glass',
    'rattan',
    'vinyl',
    'stone',
    'ceramic',
    'bamboo',
    'marble',
    'particleboard',
    'fiberboard',
    'plywood',
    'natural_fiber',
    'other',
  ])
  @IsNotEmpty()
  material: string;

  @ApiProperty({ description: 'Dimensions (LxWxH) in cm' })
  @IsString()
  @MaxLength(100)
  @IsNotEmpty()
  dimensions: string;

  @ApiProperty({ description: 'Weight in kg' })
  @IsNumber()
  @IsNotEmpty()
  @Transform(({ value }) => parseFloat(value))
  weight: number;

  @ApiProperty({
    enum: [
      'black',
      'white',
      'brown',
      'beige',
      'grey',
      'red',
      'blue',
      'green',
      'yellow',
      'purple',
      'orange',
      'pink',
      'teal',
      'gold',
      'silver',
      'cream',
      'navy',
      'burgundy',
      'tan',
      'lavender',
      'peach',
      'other',
    ],
    default: 'other',
  })
  @IsEnum([
    'black',
    'white',
    'brown',
    'beige',
    'grey',
    'red',
    'blue',
    'green',
    'yellow',
    'purple',
    'orange',
    'pink',
    'teal',
    'gold',
    'silver',
    'cream',
    'navy',
    'burgundy',
    'tan',
    'lavender',
    'peach',
    'other',
  ])
  @IsOptional()
  color: string = 'other';

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  @Transform(({ value }) => parseInt(value, 10))
  price: number;

  @ApiProperty({
    enum: [
      'USD',
      'EUR',
      'GBP',
      'JPY',
      'CNY',
      'INR',
      'AUD',
      'CAD',
      'CHF',
      'NZD',
      'SEK',
      'NOK',
      'DKK',
      'HKD',
      'SGD',
      'other',
    ],
    default: 'USD',
  })
  @IsEnum([
    'USD',
    'EUR',
    'GBP',
    'JPY',
    'CNY',
    'INR',
    'AUD',
    'CAD',
    'CHF',
    'NZD',
    'SEK',
    'NOK',
    'DKK',
    'HKD',
    'SGD',
    'other',
  ])
  @IsOptional()
  currency: string = 'USD';

  @ApiProperty({ description: 'Warranty period in months' })
  @IsInt()
  @IsOptional()
  warranty_period: number = 0;

  @ApiProperty({ description: 'Seating capacity for sofas/chairs' })
  @IsInt()
  @Transform(({ value }) => parseInt(value, 10))
  seating_capacity: number;

  @ApiProperty({ description: 'Is assembly required?', default: false })
  @IsBoolean()
  @Transform(({ value }) => value === 'true' || value === true)
  assembly_required: boolean;

  // Additional attributes from Motor model
  @ApiProperty({ description: 'Manufacturer of the furniture' })
  @IsString()
  manufacturer: string;

  @ApiProperty({ description: 'Model name or number', default: 'unknown' })
  @IsString()
  @IsOptional()
  model: string;

  @ApiProperty({ description: 'Year of manufacture' })
  @IsInt()
  @IsOptional()
  @Transform(({ value }) => parseInt(value, 10))
  year: number;

  @ApiProperty({ description: 'Interior material' })
  @IsString()
  @IsOptional()
  interior_material: string;

  @ApiProperty({ description: 'Safety rating out of 5', default: 0 })
  @IsNumber()
  @IsOptional()
  @Transform(({ value }) => parseFloat(value))
  safety_rating: number;

  @ApiProperty({ description: 'Location where the furniture is available' })
  @IsString()
  @IsOptional()
  location: string;

  @ApiProperty({ description: 'Instructions for maintaining the furniture' })
  @IsString()
  @IsOptional()
  maintenance_instructions: string;

  @ApiProperty({ type: 'array', items: { type: 'string' } })
  @IsArray()
  @IsOptional()
  @ApiProperty({ type: () => CreateFurniturImageDto, isArray: true })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateFurniturImageDto)
  images: CreateFurniturImageDto[];
}

import { ApiProperty } from '@nestjs/swagger';
import { FurnitureImage } from './furnitur-image';
import { IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class Furnitur {
  @ApiProperty({
    type: String,
    description: 'Unique identifier for the furniture item',
  })
  id: string;

  @ApiProperty({
    type: Date,
    description: 'Timestamp indicating when the furniture item was created',
  })
  createdAt: Date;

  @ApiProperty({
    type: Date,
    description:
      'Timestamp indicating when the furniture item was last updated',
  })
  updatedAt: Date;

  @ApiProperty({
    type: String,
    description: 'Name of the furniture item',
  })
  name: string;

  @ApiProperty({
    type: String,
    description: 'Brand name of the furniture item',
  })
  brand_name: string;

  @ApiProperty({
    type: String,
    description: 'Type of furniture (e.g., table, chair)',
  })
  furniture_type: string;

  @ApiProperty({
    type: String,
    description: 'Material used for the furniture item',
  })
  material: string;

  @ApiProperty({
    type: String,
    description: 'Dimensions of the furniture item (LxWxH) in cm',
  })
  dimensions: string;

  @ApiProperty({
    type: Number,
    description: 'Weight of the furniture item in kg',
  })
  weight: number;

  @ApiProperty({
    type: String,
    description: 'Color of the furniture item',
  })
  color: string;

  @ApiProperty({
    type: Number,
    description: 'Price of the furniture item',
  })
  price: number;

  @ApiProperty({
    type: String,
    description: 'Currency of the price',
  })
  currency: string;

  @ApiProperty({
    type: Number,
    description: 'Warranty period in months',
  })
  warranty_period: number;

  @ApiProperty({
    type: Number,
    description: 'Seating capacity for sofas/chairs',
  })
  seating_capacity: any;

  @ApiProperty({
    type: Boolean,
    description: 'Indicates whether assembly is required',
  })
  assembly_required: boolean;

  @ApiProperty({
    type: String,
    description: 'Manufacturer of the furniture item',
  })
  manufacturer: string;

  @ApiProperty({
    type: String,
    description: 'Model name or number of the furniture item',
  })
  model: string;

  @ApiProperty({
    type: Number,
    description: 'Year of manufacture',
  })
  year: number;

  @ApiProperty({
    type: String,
    description: 'Interior material of the furniture item',
  })
  interior_material: string;

  @ApiProperty({
    type: Number,
    description: 'Safety rating out of 5',
  })
  safety_rating: number;

  @ApiProperty({
    type: String,
    description: 'Location where the furniture item is available',
  })
  location: string;

  @ApiProperty({
    type: String,
    description: 'Maintenance instructions for the furniture item',
  })
  maintenance_instructions: string;

  @ApiProperty({ type: () => FurnitureImage, isArray: true })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FurnitureImage)
  images: FurnitureImage[];
}

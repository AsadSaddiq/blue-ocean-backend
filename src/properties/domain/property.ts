import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { PropertyImage } from './propertyImage';
import { Amenity } from './amenity';
// import { User } from '../../users/domain/user';

export class Property {
  @ApiProperty({
    type: String,
    description: 'The unique identifier of the property',
    example: 'a6dce5b1-3c4d-4a3b-9c1a-5e7a1e2bce5e',
  })
  @Expose()
  id: string;

  @ApiProperty({
    description: 'The title of the property',
    example: 'Beautiful Apartment in the City Center',
  })
  @Expose()
  title: string;

  @ApiProperty({
    description: 'The purpose of the property (e.g., Rent, Sale)',
    example: 'Rent',
  })
  @Expose()
  purpose: string;

  @ApiProperty({
    description: 'A description of the property',
    example: 'A spacious apartment with modern amenities.',
  })
  @Expose()
  description: string;

  @ApiProperty({
    description: 'The type of property (e.g., Apartment, House)',
    example: 'Apartment',
  })
  @Expose()
  propertyType: string;

  @ApiProperty({
    description: 'Number of bedrooms in the property',
    example: 3,
  })
  @Expose()
  bedrooms: number;

  @ApiProperty({
    description: 'Number of beds in the property',
    example: 2,
  })
  @Expose()
  bed: number;

  @ApiProperty({
    description: 'Number of bathrooms in the property',
    example: 2,
  })
  @Expose()
  bathrooms: number;

  @ApiProperty({
    description: 'The area of the property in square meters',
    example: 120.5,
  })
  @Expose()
  area: number;

  @ApiProperty({
    description: 'The city where the property is located',
    example: 'New York',
  })
  @Expose()
  city: string;

  @ApiProperty({
    description: 'The country where the property is located',
    example: 'New York',
  })
  @Expose()
  country: string;

  @ApiProperty({
    description: 'The address of the property',
    example: '123 Main St, Apt 4B',
  })
  @Expose()
  address: string;

  @ApiProperty({
    description: 'The rent amount for the property',
    example: 2500.0,
  })
  @Expose()
  price: number;

  @ApiProperty({
    description: 'The rent period (e.g., Monthly, Annually)',
    example: 'Monthly',
  })
  @Expose()
  rentPeriod: string;

  @ApiProperty({
    description: 'The currency for the rent amount',
    example: 'USD',
  })
  @Expose()
  currency: string;

  @ApiProperty({
    description: 'The date when the property is available from',
    example: '2023-09-01T00:00:00.000Z',
  })
  @Expose()
  availableFrom: Date;

  @ApiProperty({
    description: 'The floor number of the property',
    example: 4,
  })
  @Expose()
  floorNumber: number;

  @ApiProperty({
    description: 'Indicates if the property is furnished',
    example: true,
  })
  @Expose()
  isFurnished: boolean;

  @ApiProperty({
    description: 'The type of heating system in the property',
    example: 'Central',
  })
  @Expose()
  heatingSystem: string;

  @ApiProperty({
    description: 'The type of cooling system in the property',
    example: 'Air Conditioning',
  })
  @Expose()
  coolingSystem: string;

  @ApiProperty({
    description: 'Number of parking spaces available with the property',
    example: 2,
  })
  @Expose()
  parkingSpaces: number;

  @ApiProperty({
    description: 'The name of the contact person for the property',
    example: 'John Doe',
  })
  @Expose()
  contactName: string;

  @ApiProperty({
    description: 'The email address of the contact person',
    example: 'johndoe@example.com',
  })
  @Expose()
  contactEmail: string;

  @ApiProperty({
    description: 'The contact number of the contact person',
    example: '+1234567890',
  })
  @Expose()
  contactNumber: string;

  @ApiProperty({
    type: Date,
    description: 'The date when the property was created',
    example: '2023-08-21T14:48:00.000Z',
  })
  @Expose()
  createdAt: Date;

  @ApiProperty({
    type: Date,
    description: 'The date when the property was last updated',
    example: '2023-08-21T14:48:00.000Z',
  })
  @Expose()
  updatedAt: Date;

  @ApiProperty({
    type: [String],
    description: 'List of amenity IDs associated with the property',
    example: ['e7a1f9c4-28c1-4ef5-82e8-75f4f8b0d2e7'],
  })
  @Expose()
  // amenities: Amenity[] = [];
  amenities?: any[];

  @ApiProperty({
    type: [PropertyImage],
    description: 'The images associated with the property',
    nullable: true,
  })
  @Expose()
  images?: PropertyImage[];

  @ApiProperty({
    description: 'The owner of the property',
  })
  @Expose()
  owner: any;
}

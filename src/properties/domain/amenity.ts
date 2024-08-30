import { Exclude, Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { Property } from './property';

export class Amenity {
  @ApiProperty({
    type: String,
    description: 'The unique identifier of the amenity',
    example: 'e7a1f9c4-28c1-4ef5-82e8-75f4f8b0d2e7',
  })
  id: string;

  @ApiProperty({
    description: 'The unique name of the amenity',
    example: 'Swimming Pool',
  })
  @Expose()
  name: string;

  @ApiProperty({
    type: () => [Property],
    description: 'The properties associated with this amenity',
  })
  @Expose()
  properties?: Property[];

  @ApiProperty({
    type: Date,
    description: 'The date when the amenity was created',
    example: '2023-08-21T14:48:00.000Z',
  })
  @Expose()
  createdAt?: Date;

  @ApiProperty({
    type: Date,
    description: 'The date when the amenity was last updated',
    example: '2023-08-21T14:48:00.000Z',
  })
  @Expose()
  updatedAt?: Date;

  @ApiProperty({
    type: Date,
    description: 'The date when the amenity was deleted',
    example: '2023-08-21T14:48:00.000Z',
  })
  @Exclude()
  deletedAt?: Date;
}

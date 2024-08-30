import {
  // Exclude,
  Expose,
} from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
// import { Property } from './property';

export class PropertyImage {
  @ApiProperty({
    type: String,
    description: 'The unique identifier of the property image',
    example: 'a6dce5b1-3c4d-4a3b-9c1a-5e7a1e2bce5e',
  })
  @Expose()
  id: string;

  @ApiProperty({
    description: 'The path to the property image',
    example: '/images/property/1.jpg',
  })
  @Expose()
  path: string;
}

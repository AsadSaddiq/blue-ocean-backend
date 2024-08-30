import { Exclude, Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { Motor } from './motor';

export class Feature {
  @ApiProperty({ example: 'uuid' }) // Replace 'uuid' with your actual id type
  id: string; // Assuming it's a UUID, change to number or any other type if needed

  @ApiProperty({
    description: 'The unique name of the feature',
    example: 'ABS',
  })
  @Expose()
  feature: string;

  @ApiProperty({
    type: () => [Motor],
    description: 'The properties associated with this amenity',
  })
  @Exclude()
  motors?: Motor[];
}

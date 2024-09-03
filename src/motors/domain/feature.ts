import { Exclude, Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { Motor } from './motor';

export class Feature {
  @ApiProperty({ example: 'uuid' })
  id: string;

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

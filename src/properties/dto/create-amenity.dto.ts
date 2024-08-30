import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateAmenityDto {
  @ApiProperty({
    description: 'The unique name of the amenity',
    example: 'Swimming Pool',
  })
  @IsString()
  name: string;
}

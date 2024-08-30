import { ApiProperty } from '@nestjs/swagger';

export class FurnitureImage {
  @ApiProperty({
    type: String,
    description: 'URL or path to the image file',
  })
  path: string;

  @ApiProperty({
    type: String,
    description: 'Id for the image',
  })
  id: string;
}

import { Exclude, Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class MotorImage {
  @ApiProperty({
    type: String,
    example: 'image123',
  })
  @Expose({ groups: ['admin', 'user'] })
  id: string;

  @ApiProperty({
    type: String,
    example: '/images/motor-image.jpg',
  })
  @Expose({ groups: ['admin', 'user'] })
  path: string;
}

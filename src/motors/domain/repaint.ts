import { Exclude, Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class Repaint {
  @ApiProperty({
    type: String,
    example: 'Sherwin-Williams',
  })
  @Expose({ groups: ['admin', 'user'] })
  colorBrand: string;

  @ApiProperty({
    type: String,
    example: 'Ultra Blue',
  })
  @Expose({ groups: ['admin', 'user'] })
  colorName: string;

  @ApiProperty({
    type: Date,
    example: '2024-01-15T00:00:00.000Z',
    nullable: true,
  })
  @Expose({ groups: ['admin'] })
  dateOfRepaint?: Date;

  @ApiProperty({
    type: String,
    example: 'Blue Workshop',
  })
  @Expose({ groups: ['admin', 'user'] })
  workshopName: string;

  @ApiProperty({
    type: String,
    example: 'Repainted due to scratches',
    nullable: true,
  })
  @Expose({ groups: ['admin'] })
  description?: string;
}

import { ApiProperty } from '@nestjs/swagger';

export class Rating {
  @ApiProperty({
    type: String,
    example: 'motor123',
  })
  motorId: string;

  @ApiProperty({
    type: String,
    example: 'Engine',
  })
  part: string;

  @ApiProperty({
    type: Number,
    example: 5,
  })
  rating: number;

  @ApiProperty({
    type: String,
    example: 'Excellent performance',
    nullable: true,
  })
  review?: string;
}

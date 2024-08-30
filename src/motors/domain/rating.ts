import { ApiProperty } from '@nestjs/swagger';

export class Rating {
  @ApiProperty({ type: String })
  id: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty({ type: String })
  motorId: string;

  @ApiProperty({ type: String })
  part: string;

  @ApiProperty({ type: Number })
  rating: number;

  @ApiProperty({ type: String, nullable: true })
  review?: string;

  @ApiProperty({ type: String })
  ratedBy: string;

  @ApiProperty({ type: Date })
  dateRated: Date;
}

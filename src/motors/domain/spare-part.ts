import { ApiProperty } from '@nestjs/swagger';

export class SparePart {
  @ApiProperty({ type: String })
  id: string;

  @ApiProperty({ type: String })
  brandName: string;

  @ApiProperty({ type: String })
  partType: string;

  @ApiProperty({ type: String, nullable: true })
  description?: string;

  @ApiProperty({ type: String })
  manufacturer: string;

  @ApiProperty({ type: String, nullable: true })
  modelNumber?: string;

  @ApiProperty({ type: String })
  motorId: string;

  @ApiProperty({ type: Number })
  warrantyPeriod: number;
}

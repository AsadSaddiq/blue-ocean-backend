import { Exclude, Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class SparePart {
  @ApiProperty({
    type: String,
    example: 'sparepart123',
  })
  @Expose({ groups: ['admin', 'user'] })
  id: string;

  @ApiProperty({
    type: String,
    example: 'Bosch',
  })
  @Expose({ groups: ['admin', 'user'] })
  brandName: string;

  @ApiProperty({
    type: String,
    example: 'Brake Pad',
  })
  @Expose({ groups: ['admin', 'user'] })
  partType: string;

  @ApiProperty({
    type: String,
    example: 'BP1234',
    nullable: true,
  })
  @Expose({ groups: ['admin'] })
  modelNumber?: string;

  @ApiProperty({
    type: String,
    example: 'motor567',
  })
  @Expose({ groups: ['admin'] })
  motorId: string;
}

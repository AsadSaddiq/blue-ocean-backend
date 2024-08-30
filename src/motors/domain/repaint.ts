import { ApiProperty } from '@nestjs/swagger';

export class Repaint {
  @ApiProperty({ type: String })
  colorBrand: string;

  @ApiProperty({ type: String })
  colorName: string;

  @ApiProperty({ type: Date, nullable: true })
  dateOfRepaint?: Date;

  @ApiProperty({ type: String })
  workshopName: string;

  @ApiProperty({ type: String, nullable: true })
  description?: string;
}

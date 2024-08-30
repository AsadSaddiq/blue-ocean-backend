import { ApiProperty } from '@nestjs/swagger';

export class MotorImage {
  @ApiProperty({ type: String })
  id: string;

  @ApiProperty({ type: String })
  path: string;
}

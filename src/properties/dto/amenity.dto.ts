import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class AmenityDto {
  @ApiProperty()
  @IsUUID()
  id: string;
}

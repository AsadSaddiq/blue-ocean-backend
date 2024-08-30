import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateMotorImageDto {
  @ApiProperty()
  @IsString()
  id: string;

  @ApiProperty()
  @IsString()
  path: string;
}

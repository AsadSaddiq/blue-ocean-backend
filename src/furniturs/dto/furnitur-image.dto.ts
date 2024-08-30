import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateFurniturImageDto {
  @ApiProperty({ description: 'URL of the image' })
  @IsString()
  @IsNotEmpty()
  path: string;

  @ApiProperty({ description: 'Id for the image' })
  @IsOptional()
  id: string;
}

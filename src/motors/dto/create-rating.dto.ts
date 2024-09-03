import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional, IsUUID } from 'class-validator';

export class CreateRatingDto {
  @ApiProperty()
  @IsString()
  part: string;

  @ApiProperty()
  @IsNumber()
  rating: number;

  @ApiProperty({ nullable: true })
  @IsString()
  @IsOptional()
  review?: string;

  @ApiProperty()
  @IsUUID()
  motorId: string;
}

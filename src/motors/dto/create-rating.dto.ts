import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNumber,
  IsOptional,
  IsUUID,
  IsDateString,
} from 'class-validator';

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
  @IsString()
  ratedBy: string;

  @ApiProperty()
  @IsDateString()
  dateRated: string;

  @ApiProperty()
  @IsUUID()
  motorId: string;
}

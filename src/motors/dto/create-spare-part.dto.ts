import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional, IsUUID } from 'class-validator';

export class CreateSparePartDto {
  @ApiProperty()
  @IsString()
  brandName: string;

  @ApiProperty()
  @IsString()
  partType: string;

  @ApiProperty({ nullable: true })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty()
  @IsString()
  manufacturer: string;

  @ApiProperty({ nullable: true })
  @IsString()
  @IsOptional()
  modelNumber?: string;

  @ApiProperty()
  @IsUUID()
  motorId: string;

  @ApiProperty({ default: 0 })
  @IsNumber()
  @IsOptional()
  warrantyPeriod?: number;
}

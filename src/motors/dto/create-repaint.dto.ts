import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsUUID, IsDateString } from 'class-validator';

export class CreateRepaintDto {
  @ApiProperty()
  @IsString()
  colorBrand: string;

  @ApiProperty()
  @IsString()
  colorName: string;

  @ApiProperty({ nullable: true })
  @IsString()
  @IsOptional()
  workshopName: string;

  @ApiProperty({ nullable: true })
  @IsString()
  @IsOptional()
  description: string;

  @ApiProperty()
  @IsDateString()
  dateOfRepaint: Date;

  @ApiProperty()
  @IsUUID()
  motorId: string;
}

import { PartialType } from '@nestjs/swagger';
import { CreateFurniturDto } from './create-furnitur.dto';

export class UpdateFurniturDto extends PartialType(CreateFurniturDto) {}

// Don't forget to use the class-validator decorators in the DTO properties.
// import { Allow } from 'class-validator';

import { PartialType } from '@nestjs/swagger';
import { CreateElectronicDto } from './create-electronic.dto';

export class UpdateElectronicDto extends PartialType(CreateElectronicDto) {}

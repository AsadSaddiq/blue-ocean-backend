// Don't forget to use the class-validator decorators in the DTO properties.
// import { Allow } from 'class-validator';

import { PartialType } from '@nestjs/swagger';
import { CreateMotorDto } from './create-motor.dto';

export class UpdateMotorDto extends PartialType(CreateMotorDto) {}

import { Module } from '@nestjs/common';
import { MotorRepository } from '../motor.repository';
import { MotorRelationalRepository } from './repositories/motor.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MotorEntity } from './entities/motor.entity';
import { MotorImageEntity } from './entities/motor-image.entity';
import { RepaintEntity } from './entities/repaint.entity';
import { RatingEntity } from './entities/rating.entity';
import { FeatureEntity } from './entities/feature.entity';
import { SparePartEntity } from './entities/spare-part.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([
      MotorEntity,
      MotorImageEntity,
      RepaintEntity,
      RatingEntity,
      FeatureEntity,
      SparePartEntity,
    ]),
  ],
  providers: [
    {
      provide: MotorRepository,
      useClass: MotorRelationalRepository,
    },
  ],
  exports: [MotorRepository],
})
export class RelationalMotorPersistenceModule {}

import { Module } from '@nestjs/common';
import { PropertyRepository } from '../property.repository';
import { PropertyRelationalRepository } from './repositories/property.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropertyEntity } from './entities/property.entity';
import { PropertyImageEntity } from './entities/property-image.entity';
import { AmenityEntity } from './entities/amenity.entity';
import { RatingEntity } from './entities/rating.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      PropertyEntity,
      PropertyImageEntity,
      AmenityEntity,
      RatingEntity,
    ]),
  ],
  providers: [
    {
      provide: PropertyRepository,
      useClass: PropertyRelationalRepository,
    },
  ],
  exports: [PropertyRepository],
})
export class RelationalPropertyPersistenceModule {}

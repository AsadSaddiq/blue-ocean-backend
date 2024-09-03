import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MotorEntity } from '../entities/motor.entity';
import { NullableType } from '../../../../../utils/types/nullable.type';
import { Motor } from '../../../../domain/motor';
import { MotorRepository } from '../../motor.repository';
import { MotorMapper } from '../mappers/motor.mapper';
import { IPaginationOptions } from '../../../../../utils/types/pagination-options';
import { SparePartEntity } from '../entities/spare-part.entity';
import { MotorImageEntity } from '../entities/motor-image.entity';
import { RepaintEntity } from '../entities/repaint.entity';
import { FeatureEntity } from '../entities/feature.entity';
import { RepaintMapper } from '../mappers/repaint.mapper';
import { MotorImageMapper } from '../mappers/motor-image.mapper';
import { FeatureMapper } from '../mappers/feature';
import { SparePartMapper } from '../mappers/spare-part';
import { Feature } from '../../../../domain/feature';
import { RatingEntity } from '../entities/rating.entity';
import { RatingMapper } from '../mappers/rating.mapper';

@Injectable()
export class MotorRelationalRepository implements MotorRepository {
  constructor(
    @InjectRepository(MotorEntity)
    private readonly motorRepository: Repository<MotorEntity>,
    @InjectRepository(MotorImageEntity)
    private readonly motorImageRepository: Repository<MotorImageEntity>,
    @InjectRepository(SparePartEntity)
    private readonly sparePartRepository: Repository<SparePartEntity>,
    @InjectRepository(RepaintEntity)
    private readonly repaintRepository: Repository<RepaintEntity>,
    @InjectRepository(FeatureEntity)
    private readonly featureRepository: Repository<FeatureEntity>,
    @InjectRepository(RatingEntity)
    private readonly ratingRepository: Repository<RatingEntity>,
  ) {}

  // async create(data: Motor): Promise<Motor> {
  //   const persistenceModel = MotorMapper.toPersistence(data);
  //   const newMotorEntity = await this.motorRepository.save(
  //     this.motorRepository.create(persistenceModel),
  //   );
  //   if (data.images && data.images.length) {
  //     const motorImages = data.images.map((image) => {
  //       const motorImageEntity = MotorImageMapper.toPersistence(image);
  //       motorImageEntity.motor = newMotorEntity; // Associate with the newly created motor entity
  //       return motorImageEntity;
  //     });
  //     await this.motorImageRepository.save(motorImages);
  //   }
  //   if (data.repaints && data.repaints.length) {
  //     const motorRepaints = data.repaints.map((repaint) => {
  //       const motorRepaintEntity = RepaintMapper.toPersistence(repaint);
  //       motorRepaintEntity.motor = newMotorEntity; // Associate with the newly created motor entity
  //       return motorRepaintEntity;
  //     });
  //     await this.repaintRepository.save(motorRepaints);
  //   }

  //   if (data.features && data.features.length) {
  //     const motorFeatures = data.features
  //       .map((feature) => {
  //         if (!feature.feature) {
  //           console.warn('Feature is missing or empty:', feature);
  //           return null; // Skip this feature if it's invalid
  //         }
  //         const motorFeatureEntity = FeatureMapper.toPersistence(feature);
  //         motorFeatureEntity.motors = [newMotorEntity];
  //         return motorFeatureEntity;
  //       })
  //       .filter((feature): feature is FeatureEntity => feature !== null); // Filter out null values

  //     if (motorFeatures.length) {
  //       await this.featureRepository.save(motorFeatures);
  //     }
  //   }

  //   if (data.spareParts && data.spareParts.length) {
  //     const motorSpareParts = data.spareParts.map((sparePart) => {
  //       const motorSparePartEntity = SparePartMapper.toPersistence(sparePart);
  //       motorSparePartEntity.motor = newMotorEntity; // Associate with the newly created motor entity
  //       return motorSparePartEntity;
  //     });
  //     await this.sparePartRepository.save(motorSpareParts);
  //   }

  //   return newMotorEntity;
  // }

  async create(data: Motor): Promise<Motor> {
    const persistenceModel = MotorMapper.toPersistence(data);
    const newMotorEntity = await this.motorRepository.save(
      this.motorRepository.create(persistenceModel),
    );

    console.log('............................');
    console.log(data);
    console.log('............................');

    // Save related motor images
    if (data.images && data.images.length) {
      const motorImages = data.images.map((image) => {
        const motorImageEntity = MotorImageMapper.toPersistence(image);
        motorImageEntity.motor = newMotorEntity; // Associate with the newly created motor entity
        return motorImageEntity;
      });
      await this.motorImageRepository.save(motorImages);
    }

    // Save related motor repaints
    if (data.repaints && data.repaints.length) {
      const motorRepaints = data.repaints.map((repaint) => {
        const motorRepaintEntity = RepaintMapper.toPersistence(repaint);
        motorRepaintEntity.motor = newMotorEntity; // Associate with the newly created motor entity
        return motorRepaintEntity;
      });
      await this.repaintRepository.save(motorRepaints);
    }

    // Save related motor features
    if (data.features && data.features.length) {
      const motorFeatures = data.features
        .map((feature) => {
          if (!feature.feature) {
            console.warn('Feature is missing or empty:', feature);
            return null; // Skip this feature if it's invalid
          }
          const motorFeatureEntity = FeatureMapper.toPersistence(feature);
          motorFeatureEntity.motors = [newMotorEntity]; // Properly associate the feature with the motor
          return motorFeatureEntity;
        })
        .filter((feature): feature is FeatureEntity => feature !== null); // Filter out null values

      if (motorFeatures.length) {
        await this.featureRepository.save(motorFeatures);
      }
    }

    // Save related motor spare parts
    if (data.spareParts && data.spareParts.length) {
      const motorSpareParts = data.spareParts.map((sparePart) => {
        const motorSparePartEntity = SparePartMapper.toPersistence(sparePart);
        motorSparePartEntity.motor = newMotorEntity; // Associate with the newly created motor entity
        return motorSparePartEntity;
      });
      await this.sparePartRepository.save(motorSpareParts);
    }

    // Save related motor ratings
    if (data.ratings && data.ratings.length) {
      const motorRatings = data.ratings.map((rating) => {
        const motorRatingEntity = RatingMapper.toPersistence(rating);
        motorRatingEntity.motor = newMotorEntity; // Associate with the newly created motor entity
        return motorRatingEntity;
      });
      await this.ratingRepository.save(motorRatings);
    }

    // Map the saved MotorEntity back to a Motor domain model
    return MotorMapper.toDomain(newMotorEntity);
  }

  // async findAllWithPagination({
  //   paginationOptions,
  // }: {
  //   paginationOptions: IPaginationOptions;
  // }): Promise<MotorEntity[]> {
  //   const { page, limit } = paginationOptions;

  //   // Fetch motors with related images, spare parts, ratings, repaints, and features
  //   const motors = await this.motorRepository
  //     .createQueryBuilder('motor')
  //     .leftJoinAndSelect('motor.images', 'image')
  //     .leftJoinAndSelect('motor.sparePartsRelated', 'sparePart')
  //     .leftJoinAndSelect('motor.ratings', 'rating')
  //     .leftJoinAndSelect('motor.repaints', 'repaint')
  //     .leftJoinAndSelect('motor.features', 'feature')
  //     .skip((page - 1) * limit)
  //     .take(limit)
  //     .getMany();

  //   return motors;
  // }

  async findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<Motor[]> {
    const { page, limit } = paginationOptions;

    const motorEntities = await this.motorRepository
      .createQueryBuilder('motor')
      .leftJoinAndSelect('motor.images', 'image')
      .leftJoinAndSelect('motor.sparePartsRelated', 'sparePart')
      .leftJoinAndSelect('motor.ratings', 'rating')
      .leftJoinAndSelect('motor.repaints', 'repaint')
      .leftJoinAndSelect('motor.features', 'feature')
      .skip((page - 1) * limit)
      .take(limit)
      .getMany();

    // Map each MotorEntity to a Motor
    return motorEntities.map((entity) => MotorMapper.toDomain(entity));
  }

  // async findById(id: Motor['id']): Promise<NullableType<MotorEntity>> {
  //   // Fetch motor with related images, spare parts, ratings, repaints, and features
  //   const motor = await this.motorRepository
  //     .createQueryBuilder('motor')
  //     .leftJoinAndSelect('motor.images', 'image')
  //     .leftJoinAndSelect('motor.sparePartsRelated', 'sparePart')
  //     .leftJoinAndSelect('motor.ratings', 'rating')
  //     .leftJoinAndSelect('motor.repaints', 'repaint')
  //     .leftJoinAndSelect('motor.features', 'feature')
  //     .where('motor.id = :id', { id })
  //     .getOne();

  //   return motor || null;
  // }

  async findById(id: Motor['id']): Promise<NullableType<Motor>> {
    const motorEntity = await this.motorRepository
      .createQueryBuilder('motor')
      .leftJoinAndSelect('motor.images', 'image')
      .leftJoinAndSelect('motor.sparePartsRelated', 'sparePart')
      .leftJoinAndSelect('motor.ratings', 'rating')
      .leftJoinAndSelect('motor.repaints', 'repaint')
      .leftJoinAndSelect('motor.features', 'feature')
      .where('motor.id = :id', { id })
      .getOne();

    // Return the mapped Motor or null
    return motorEntity ? MotorMapper.toDomain(motorEntity) : null;
  }

  // async update(id: Motor['id'], payload: Partial<Motor>): Promise<Motor> {
  //   const entity = await this.motorRepository.findOne({
  //     where: { id },
  //   });

  //   if (!entity) {
  //     throw new Error('Record not found');
  //   }

  //   const updatedEntity = await this.motorRepository.save(
  //     this.motorRepository.create({
  //       ...entity,
  //       ...payload,
  //     }),
  //   );

  //   return updatedEntity;
  // }

  async update(id: Motor['id'], payload: Partial<Motor>): Promise<Motor> {
    const entity = await this.motorRepository.findOne({
      where: { id },
    });

    if (!entity) {
      throw new Error('Record not found');
    }

    const updatedEntity = await this.motorRepository.save(
      this.motorRepository.create({
        ...entity,
        ...payload,
      }),
    );

    return MotorMapper.toDomain(updatedEntity);
  }

  async remove(id: Motor['id']): Promise<void> {
    await this.motorRepository.delete(id);
  }

  // async creteFeature(data: Feature): Promise<Feature> {
  //   const persistenceModel = FeatureMapper.toPersistence(data);
  //   const newFeatureEntity = await this.featureRepository.save(
  //     this.featureRepository.create(persistenceModel),
  //   );
  //   return newFeatureEntity;
  // }
  async createFeature(data: Feature): Promise<Feature> {
    const persistenceModel = FeatureMapper.toPersistence(data);
    const newFeatureEntity = await this.featureRepository.save(
      this.featureRepository.create(persistenceModel),
    );

    // Map the saved FeatureEntity back to the Feature domain model
    return FeatureMapper.toDomain(newFeatureEntity);
  }

  async findFeature(): Promise<Feature[]> {
    const entities = await this.featureRepository.find();
    return entities.map((entity) => FeatureMapper.toDomain(entity));
  }
}

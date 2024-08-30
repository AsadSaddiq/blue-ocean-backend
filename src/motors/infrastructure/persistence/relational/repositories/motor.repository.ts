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
  ) {}

  async create(data: Motor): Promise<Motor> {
    const persistenceModel = MotorMapper.toPersistence(data);
    const newMotorEntity = await this.motorRepository.save(
      this.motorRepository.create(persistenceModel),
    );
    if (data.images && data.images.length) {
      const motorImages = data.images.map((image) => {
        const motorImageEntity = MotorImageMapper.toPersistence(image);
        motorImageEntity.motor = newMotorEntity; // Associate with the newly created motor entity
        return motorImageEntity;
      });
      await this.motorImageRepository.save(motorImages);
    }
    if (data.repaints && data.repaints.length) {
      const motorRepaints = data.repaints.map((repaint) => {
        const motorRepaintEntity = RepaintMapper.toPersistence(repaint);
        motorRepaintEntity.motor = newMotorEntity; // Associate with the newly created motor entity
        return motorRepaintEntity;
      });
      await this.repaintRepository.save(motorRepaints);
    }
    if (data.features && data.features.length) {
      const motorFeatures = data.features.map((feature) => {
        const motorFeatureEntity = FeatureMapper.toPersistence(feature);
        motorFeatureEntity.motors = [newMotorEntity]; // Associate with the newly created motor entity
        return motorFeatureEntity;
      });
      await this.featureRepository.save(motorFeatures);
    }
    if (data.spareParts && data.spareParts.length) {
      const motorSpareParts = data.spareParts.map((sparePart) => {
        const motorSparePartEntity = SparePartMapper.toPersistence(sparePart);
        motorSparePartEntity.motor = newMotorEntity; // Associate with the newly created motor entity
        return motorSparePartEntity;
      });
      await this.sparePartRepository.save(motorSpareParts);
    }

    return newMotorEntity;
  }

  async findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<Motor[]> {
    const entities = await this.motorRepository.find({
      skip: (paginationOptions.page - 1) * paginationOptions.limit,
      take: paginationOptions.limit,
    });

    return entities.map((user) => MotorMapper.toDomain(user));
  }

  async findById(id: Motor['id']): Promise<NullableType<Motor>> {
    const entity = await this.motorRepository.findOne({
      where: { id },
    });

    return entity;
  }

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

    return updatedEntity;
  }

  async remove(id: Motor['id']): Promise<void> {
    await this.motorRepository.delete(id);
  }

  async creteFeature(data: Feature): Promise<Feature> {
    const persistenceModel = FeatureMapper.toPersistence(data);
    const newFeatureEntity = await this.featureRepository.save(
      this.featureRepository.create(persistenceModel),
    );
    return newFeatureEntity;
  }

  async findFeature(): Promise<Feature[]> {
    const entities = await this.featureRepository.find();
    return entities.map((entity) => FeatureMapper.toDomain(entity));
  }
}

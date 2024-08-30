import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FurniturEntity } from '../entities/furnitur.entity';
import { NullableType } from '../../../../../utils/types/nullable.type';
import { Furnitur } from '../../../../domain/furnitur';
import { FurniturRepository } from '../../furnitur.repository';
import { FurniturMapper } from '../mappers/furnitur.mapper';
import { IPaginationOptions } from '../../../../../utils/types/pagination-options';
import { FurnitureImageEntity } from '../entities/furnitur-image.entity';

@Injectable()
export class FurniturRelationalRepository implements FurniturRepository {
  constructor(
    @InjectRepository(FurniturEntity)
    private readonly furniturRepository: Repository<FurniturEntity>,
    @InjectRepository(FurnitureImageEntity)
    private readonly furniturImageRepository: Repository<FurnitureImageEntity>,
  ) {}

  async create(data: Furnitur): Promise<Furnitur> {
    const persistenceModel = FurniturMapper.toPersistence(data);
    // const persistenceImagesModel = FurniturMapper.toPersistence(data);
    const newEntity = await this.furniturRepository.save(
      this.furniturRepository.create(persistenceModel),
    );

    if (data.images && data.images.length) {
      // Create furniture image entities
      const furnitureImages = data.images.map((image) => {
        const furnitureImage = new FurnitureImageEntity();
        furnitureImage.id = image.id; // Use the provided ID
        furnitureImage.path = image.path; // Use the provided path
        furnitureImage.furniture = newEntity; // Associate with the newly created furniture entity
        return furnitureImage;
      });

      // Save the images
      // const savedImages =
      await this.furniturImageRepository.save(furnitureImages);
      // newEntity.images = savedImages;
    }

    return newEntity;
  }

  async findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<Furnitur[]> {
    const entities = await this.furniturRepository.find({
      skip: (paginationOptions.page - 1) * paginationOptions.limit,
      take: paginationOptions.limit,
      relations: ['images'],
    });

    return entities;
  }

  async findById(id: Furnitur['id']): Promise<NullableType<Furnitur>> {
    const entity = await this.furniturRepository.findOne({
      where: { id },
      relations: ['images'], // Include the 'images' relation in the query
    });

    return entity;
    // return entity ? FurniturMapper.toDomain(entity) : null;
  }

  async update(
    id: Furnitur['id'],
    payload: Partial<Furnitur>,
  ): Promise<Furnitur> {
    const entity = await this.furniturRepository.findOne({
      where: { id },
    });

    if (!entity) {
      throw new Error('Record not found');
    }

    const updatedEntity = await this.furniturRepository.save(
      this.furniturRepository.create(
        FurniturMapper.toPersistence({
          ...FurniturMapper.toDomain(entity),
          ...payload,
        }),
      ),
    );

    return FurniturMapper.toDomain(updatedEntity);
  }

  async remove(id: Furnitur['id']): Promise<void> {
    await this.furniturRepository.delete(id);
  }
}

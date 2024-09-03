import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Brackets, In, Repository, SelectQueryBuilder } from 'typeorm';
import { PropertyEntity } from '../entities/property.entity';
import { AmenityEntity } from '../entities/amenity.entity';
// import { RatingEntity } from '../entities/rating.entity';
import { PropertyImageEntity } from '../entities/property-image.entity';
import { NullableType } from '../../../../../utils/types/nullable.type';
import { Property } from '../../../../domain/property';
import { Amenity } from '../../../../domain/amenity';
// import { Rating } from '../../../../domain/rating';
// import { PropertyImage } from '../../../../domain/propertyImage';
import { PropertyRepository } from '../../property.repository';
import { PropertyMapper } from '../mappers/property.mapper';
import { PropertyImageMapper } from '../mappers/property-image.mapper';
import { AmenityMapper } from '../mappers/amenity.mapper';
// import { RatingMapper } from '../mappers/rating.mapper';
import { IPaginationOptions } from '../../../../../utils/types/pagination-options';
import { FindAllPropertiesDto } from '../../../../dto/find-all-properties.dto';

@Injectable()
export class PropertyRelationalRepository implements PropertyRepository {
  constructor(
    @InjectRepository(PropertyEntity)
    private readonly propertyRepository: Repository<PropertyEntity>,
    @InjectRepository(PropertyImageEntity)
    private readonly propertyImageRepository: Repository<PropertyImageEntity>,
    @InjectRepository(AmenityEntity)
    private readonly amenityRepository: Repository<AmenityEntity>,
  ) {}

  async create(data: Property): Promise<Property> {
    const persistenceModel = PropertyMapper.toPersistence(data);
    if (data.amenities && data.amenities.length) {
      const amenityEntities = await this.amenityRepository.find({
        where: {
          id: In(data.amenities),
        },
      });
      persistenceModel.amenities = amenityEntities;
    }
    const newPropertyEntity =
      await this.propertyRepository.save(persistenceModel);
    if (data.images && data.images.length) {
      const propertyImages = data.images.map((image) => {
        const propertyImageEntity = PropertyImageMapper.toPersistence(image);
        propertyImageEntity.property = newPropertyEntity; // Associate with the newly created property entity
        return propertyImageEntity;
      });
      await this.propertyImageRepository.save(propertyImages);
    }
    const fullPropertyEntity = await this.propertyRepository.findOne({
      where: { id: newPropertyEntity.id },
      relations: ['amenities', 'propertyImages'],
    });
    if (!fullPropertyEntity) {
      throw new Error('Property not found after creation');
    }
    return PropertyMapper.toDomain(fullPropertyEntity);
  }

  async createAmenity(data: Amenity): Promise<Amenity> {
    const persistenceModel = AmenityMapper.toPersistence(data);
    const newEntity = await this.amenityRepository.save(
      this.amenityRepository.create(persistenceModel),
    );
    return newEntity;
  }

  async findAmenity(): Promise<Amenity[]> {
    const entities = await this.amenityRepository.find();
    return entities.map((entity) => AmenityMapper.toDomain(entity));
  }

  // async findAllWithPagination({
  //   paginationOptions,
  //   filterOptions,
  // }: {
  //   paginationOptions: IPaginationOptions;
  //   filterOptions?: {
  //     purpose?: string;
  //     minPrice?: number;
  //     maxPrice?: number;
  //     userId?: string;
  //     propertyType?: string;
  //   };
  // }): Promise<Property[]> {
  //   const query = this.propertyRepository
  //     .createQueryBuilder('property')
  //     .skip((paginationOptions.page - 1) * paginationOptions.limit)
  //     .take(paginationOptions.limit)
  //     .leftJoinAndSelect('property.propertyImages', 'propertyImages')
  //     .leftJoinAndSelect('property.amenities', 'amenities')
  //     .leftJoinAndSelect('property.ratings', 'ratings')
  //     .leftJoinAndSelect('property.owner', 'owner');

  //   // Apply filters based on the provided filterOptions
  //   if (filterOptions?.purpose) {
  //     query.andWhere('property.purpose = :purpose', {
  //       purpose: filterOptions.purpose,
  //     });
  //   }
  //   if (filterOptions?.minPrice) {
  //     query.andWhere('property.price >= :minPrice', {
  //       minPrice: filterOptions.minPrice,
  //     });
  //   }
  //   if (filterOptions?.maxPrice) {
  //     query.andWhere('property.price <= :maxPrice', {
  //       maxPrice: filterOptions.maxPrice,
  //     });
  //   }
  //   if (filterOptions?.userId) {
  //     query.andWhere('property.ownerId = :userId', {
  //       userId: filterOptions.userId,
  //     });
  //   }
  //   if (filterOptions?.propertyType) {
  //     query.andWhere('property.propertyType = :propertyType', {
  //       propertyType: filterOptions.propertyType,
  //     });
  //   }

  //   // Execute the query and retrieve the results
  //   const entities = await query.getMany();

  //   // Map the results to the domain model
  //   return entities.map((entity) => PropertyMapper.toDomain(entity));
  // }

  async findAllWithPagination({
    paginationOptions,
    filters,
  }: {
    paginationOptions: IPaginationOptions;
    filters: FindAllPropertiesDto;
  }): Promise<PropertyEntity[]> {
    const queryBuilder = this.propertyRepository.createQueryBuilder('property');

    this.addJoins(queryBuilder);
    this.applyFilters(queryBuilder, filters);

    queryBuilder
      .skip((paginationOptions.page - 1) * paginationOptions.limit)
      .take(paginationOptions.limit);

    // Order by creation date by default
    queryBuilder.orderBy('property.createdAt', 'DESC');

    const properties = await queryBuilder.getMany();
    return properties;
  }

  private addJoins(queryBuilder: SelectQueryBuilder<PropertyEntity>) {
    queryBuilder.leftJoinAndSelect('property.propertyImages', 'images');
    queryBuilder.leftJoinAndSelect('property.owner', 'owner');
    queryBuilder.leftJoinAndSelect('property.ratings', 'ratings');
  }

  private applyFilters(
    queryBuilder: SelectQueryBuilder<PropertyEntity>,
    filters: FindAllPropertiesDto,
  ) {
    const { globalSearch, userId, propertyType, minPrice, maxPrice, purpose } =
      filters;

    // Global search filter
    if (globalSearch && globalSearch.trim()) {
      queryBuilder.andWhere(
        new Brackets((qb) => {
          qb.where('property.title LIKE :globalSearch', {
            globalSearch: `%${globalSearch}%`,
          })
            .orWhere('property.description LIKE :globalSearch', {
              globalSearch: `%${globalSearch}%`,
            })
            .orWhere('property.city LIKE :globalSearch', {
              globalSearch: `%${globalSearch}%`,
            })
            .orWhere('property.address LIKE :globalSearch', {
              globalSearch: `%${globalSearch}%`,
            })
            .orWhere('property.country LIKE :globalSearch', {
              globalSearch: `%${globalSearch}%`,
            })
            .orWhere('property.contactName LIKE :globalSearch', {
              globalSearch: `%${globalSearch}%`,
            });
        }),
      );
    }

    // Filter by user ID
    if (userId) {
      queryBuilder.andWhere('property.owner.id = :userId', { userId });
    }

    // Filter by property type
    if (propertyType) {
      queryBuilder.andWhere('property.propertyType = :propertyType', {
        propertyType,
      });
    }

    // Filter by minimum price
    if (minPrice !== undefined && minPrice !== null) {
      queryBuilder.andWhere('property.price >= :minPrice', { minPrice });
    }

    // Filter by maximum price
    if (maxPrice !== undefined && maxPrice !== null) {
      queryBuilder.andWhere('property.price <= :maxPrice', { maxPrice });
    }

    // Filter by purpose
    if (purpose) {
      queryBuilder.andWhere('property.purpose = :purpose', {
        purpose,
      });
    }
  }
  async findById(id: Property['id']): Promise<NullableType<Property>> {
    const entity = await this.propertyRepository.findOne({
      where: { id },
      relations: ['propertyImages', 'amenities'],
    });

    return entity ? PropertyMapper.toDomain(entity) : null;
  }

  // async update(
  //   id: Property['id'],
  //   payload: Partial<Property>,
  // ): Promise<Property> {
  //   // Find the existing property entity
  //   const entity = await this.propertyRepository.findOne({
  //     where: { id },
  //     relations: ['propertyImages', 'amenities'],
  //   });

  //   // Throw an error if the entity is not found
  //   if (!entity) {
  //     throw new Error('Record not found');
  //   }

  //   // Map the incoming payload to the persistence model
  //   const updatedData = {
  //     ...PropertyMapper.toDomain(entity),
  //     ...payload,
  //   };

  //   // Update amenities
  //   if (payload.amenities) {
  //     const amenityEntities = await this.amenityRepository.find({
  //       where: { id: In(payload.amenities) },
  //     });
  //     updatedData.amenities = amenityEntities;
  //   }

  //   // Update images
  //   if (payload.images) {
  //     // Separate existing and new images
  //     const existingImageIds = entity.propertyImages.map((image) => image.id);
  //     const newImages = payload.images.filter((image) => !image.id);
  //     const updatedImages = payload.images.filter((image) => image.id);

  //     // Remove old images that are not in the new payload
  //     const imagesToRemove = existingImageIds.filter(
  //       (id) => !updatedImages.some((image) => image.id === id),
  //     );
  //     if (imagesToRemove.length) {
  //       await this.propertyImageRepository.delete(imagesToRemove);
  //     }

  //     // Save new images
  //     if (newImages.length) {
  //       const newImageEntities = newImages.map((image) => {
  //         const propertyImageEntity = PropertyImageMapper.toPersistence(image);
  //         propertyImageEntity.property = entity; // Associate with the current property entity
  //         return propertyImageEntity;
  //       });
  //       await this.propertyImageRepository.save(newImageEntities);
  //     }

  //     // Save updated images (only if they exist and were modified)
  //     if (updatedImages.length) {
  //       const updatedImageEntities = updatedImages.map((image) => {
  //         const propertyImageEntity = PropertyImageMapper.toPersistence(image);
  //         propertyImageEntity.property = entity; // Associate with the current property entity
  //         return propertyImageEntity;
  //       });
  //       await this.propertyImageRepository.save(updatedImageEntities);
  //     }
  //   }

  //   // Save updated property
  //   const updatedEntity = await this.propertyRepository.save(
  //     this.propertyRepository.create(PropertyMapper.toPersistence(updatedData)),
  //   );

  //   // Fetch the updated property with all relations
  //   const fullUpdatedEntity = await this.propertyRepository.findOne({
  //     where: { id: updatedEntity.id },
  //     relations: ['propertyImages', 'amenities'],
  //   });

  //   if (!fullUpdatedEntity) {
  //     throw new Error('Property not found after update');
  //   }

  //   return PropertyMapper.toDomain(fullUpdatedEntity);
  // }

  async update(
    id: Property['id'],
    payload: Partial<Property>,
  ): Promise<Property> {
    const entity = await this.propertyRepository.findOne({
      where: { id },
      relations: ['propertyImages', 'amenities'],
    });

    if (!entity) {
      throw new Error('Record not found');
    }

    // Map the incoming payload to the persistence model
    const updatedData = {
      ...PropertyMapper.toDomain(entity),
      ...payload,
    };

    // Update amenities
    if (payload.amenities) {
      const amenityEntities = await this.amenityRepository.find({
        where: { id: In(payload.amenities) },
      });
      updatedData.amenities = amenityEntities;
    }

    // Update images only if they are provided in the payload
    if (payload.images && payload.images.length > 0) {
      const existingImageIds = entity.propertyImages.map((image) => image.id);

      // Filter new images (those without an ID) for insertion
      const newImages = payload.images.filter((image) => !image.id);
      // Insert new images
      if (newImages.length > 0) {
        const newImageEntities = newImages.map((image) => {
          const propertyImageEntity = PropertyImageMapper.toPersistence(image);
          propertyImageEntity.property = entity; // Associate with the current property entity
          return propertyImageEntity;
        });

        await this.propertyImageRepository.save(newImageEntities);
      }

      // Remove images that are no longer associated with the property
      const imagesToRemove = existingImageIds.filter(
        (id) => !payload.images!.some((image) => image.id === id), // Non-null assertion
      );
      if (imagesToRemove.length > 0) {
        await this.propertyImageRepository.delete(imagesToRemove);
      }

      // Update existing images (those with an ID)
      const updatedImages = payload.images.filter((image) => image.id);
      if (updatedImages.length > 0) {
        const updatedImageEntities = updatedImages.map((image) => {
          const propertyImageEntity = PropertyImageMapper.toPersistence(image);
          propertyImageEntity.property = entity; // Associate with the current property entity
          return propertyImageEntity;
        });
        await this.propertyImageRepository.save(updatedImageEntities);
      }
    }

    // Save updated property
    const updatedEntity = await this.propertyRepository.save(
      this.propertyRepository.create(PropertyMapper.toPersistence(updatedData)),
    );

    // Fetch the updated property with all relations
    const fullUpdatedEntity = await this.propertyRepository.findOne({
      where: { id: updatedEntity.id },
      relations: ['propertyImages', 'amenities'],
    });

    if (!fullUpdatedEntity) {
      throw new Error('Property not found after update');
    }

    return PropertyMapper.toDomain(fullUpdatedEntity);
  }

  async remove(id: Property['id']): Promise<void> {
    await this.propertyRepository.delete(id);
  }
}

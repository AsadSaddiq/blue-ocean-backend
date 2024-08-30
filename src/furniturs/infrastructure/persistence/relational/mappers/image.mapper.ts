import { FurnitureImage } from '../../../../domain/furnitur-image';
import { FurnitureImageEntity } from '../entities/furnitur-image.entity';
import { FurniturEntity } from '../entities/furnitur.entity';

export class FurnitureImageMapper {
  static toDomain(raw: FurnitureImageEntity): FurnitureImage {
    const domainEntity = new FurnitureImage();
    domainEntity.path = raw.path;
    domainEntity.id = raw.id;

    return domainEntity;
  }

  static toPersistence(
    domainEntity: FurnitureImage,
    furnitureEntity: FurniturEntity,
  ): FurnitureImageEntity {
    const persistenceEntity = new FurnitureImageEntity();

    persistenceEntity.path = domainEntity.path;
    persistenceEntity.id = domainEntity.id;

    return persistenceEntity;
  }

  // Convert a list of entities to domain models
  static toDomainList(entities: FurnitureImageEntity[]): FurnitureImage[] {
    return entities.map(FurnitureImageMapper.toDomain);
  }

  // Convert a list of domain models to entities
  static toPersistenceList(
    domainEntities: FurnitureImage[],
    furnitureEntity: FurniturEntity,
  ): FurnitureImageEntity[] {
    return domainEntities.map((domainEntity) =>
      FurnitureImageMapper.toPersistence(domainEntity, furnitureEntity),
    );
  }
}

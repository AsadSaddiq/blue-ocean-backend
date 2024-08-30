import { PropertyImage } from '../../../../domain/propertyImage';
import { PropertyImageEntity } from '../entities/property-image.entity';

export class PropertyImageMapper {
  static toDomain(raw: PropertyImageEntity): PropertyImage {
    const domainEntity = new PropertyImage();
    domainEntity.id = raw.id;
    domainEntity.path = raw.path;

    return domainEntity;
  }

  static toPersistence(domainEntity: PropertyImage): PropertyImageEntity {
    const persistenceEntity = new PropertyImageEntity();
    persistenceEntity.id = domainEntity.id;
    persistenceEntity.path = domainEntity.path;

    return persistenceEntity;
  }
}

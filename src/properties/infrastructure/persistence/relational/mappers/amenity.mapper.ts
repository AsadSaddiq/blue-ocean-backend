import { Amenity } from '../../../../domain/amenity';
import { AmenityEntity } from '../entities/amenity.entity';
import { PropertyMapper } from './property.mapper'; // Assuming you have a PropertyMapper for mapping properties

export class AmenityMapper {
  static toDomain(raw: AmenityEntity): Amenity {
    const domainEntity = new Amenity();
    domainEntity.id = raw.id;
    domainEntity.name = raw.name;

    // Map related properties
    if (raw.properties) {
      domainEntity.properties = raw.properties.map(PropertyMapper.toDomain);
    }

    domainEntity.createdAt = raw.createdAt;
    domainEntity.updatedAt = raw.updatedAt;
    domainEntity.deletedAt = raw.deletedAt;

    return domainEntity;
  }

  static toPersistence(domainEntity: Amenity): AmenityEntity {
    const persistenceEntity = new AmenityEntity();
    persistenceEntity.id = domainEntity.id;
    persistenceEntity.name = domainEntity.name;

    // Map related properties
    if (domainEntity.properties) {
      persistenceEntity.properties = domainEntity.properties.map(
        PropertyMapper.toPersistence,
      );
    }

    persistenceEntity.createdAt = domainEntity.createdAt ?? new Date();
    persistenceEntity.updatedAt = domainEntity.updatedAt ?? new Date();
    persistenceEntity.deletedAt = domainEntity.deletedAt;

    return persistenceEntity;
  }
}

import { Property } from '../../../../domain/property';
import { PropertyEntity } from '../entities/property.entity';
// import { AmenityEntity } from '../entities/amenity.entity';
import { PropertyImageMapper } from './property-image.mapper'; // Assuming you have a mapper for PropertyImage
import { AmenityMapper } from './amenity.mapper'; // Assuming you have a mapper for Amenity
// import { UserMapper } from '../../../../../users/infrastructure/persistence/relational/mappers/user.mapper'; // Assuming you have a mapper for User

export class PropertyMapper {
  static toDomain(raw: PropertyEntity): Property {
    const domainEntity = new Property();
    domainEntity.id = raw.id;
    domainEntity.title = raw.title;
    domainEntity.purpose = raw.purpose;
    domainEntity.description = raw.description;
    domainEntity.propertyType = raw.propertyType;
    domainEntity.bedrooms = raw.bedrooms;
    domainEntity.bed = raw.bed;
    domainEntity.bathrooms = raw.bathrooms;
    domainEntity.area = raw.area;
    domainEntity.city = raw.city;
    domainEntity.country = raw.country;
    domainEntity.address = raw.address;
    domainEntity.price = raw.price;
    domainEntity.rentPeriod = raw.rentPeriod;
    domainEntity.currency = raw.currency;
    domainEntity.price = raw.price;
    domainEntity.availableFrom = raw.availableFrom;
    domainEntity.floorNumber = raw.floorNumber;
    domainEntity.isFurnished = raw.isFurnished;
    domainEntity.heatingSystem = raw.heatingSystem;
    domainEntity.coolingSystem = raw.coolingSystem;
    domainEntity.parkingSpaces = raw.parkingSpaces;
    domainEntity.contactName = raw.contactName;
    domainEntity.contactEmail = raw.contactEmail;
    domainEntity.contactNumber = raw.contactNumber;
    domainEntity.createdAt = raw.createdAt;
    domainEntity.updatedAt = raw.updatedAt;
    domainEntity.owner = raw.owner;

    // Map related entities
    if (raw.propertyImages) {
      domainEntity.images = raw.propertyImages.map(
        PropertyImageMapper.toDomain,
      );
    }
    if (raw.amenities) {
      domainEntity.amenities = raw.amenities.map(AmenityMapper.toDomain);
    }

    return domainEntity;
  }

  static toPersistence(domainEntity: Property): PropertyEntity {
    const persistenceEntity = new PropertyEntity();
    persistenceEntity.id = domainEntity.id;
    persistenceEntity.title = domainEntity.title;
    persistenceEntity.purpose = domainEntity.purpose;
    persistenceEntity.description = domainEntity.description;
    persistenceEntity.propertyType = domainEntity.propertyType;
    persistenceEntity.bedrooms = domainEntity.bedrooms;
    persistenceEntity.bed = domainEntity.bed;
    persistenceEntity.bathrooms = domainEntity.bathrooms;
    persistenceEntity.area = domainEntity.area;
    persistenceEntity.city = domainEntity.city;
    persistenceEntity.country = domainEntity.country;
    persistenceEntity.address = domainEntity.address;
    persistenceEntity.price = domainEntity.price;
    persistenceEntity.rentPeriod = domainEntity.rentPeriod;
    persistenceEntity.currency = domainEntity.currency;
    persistenceEntity.price = domainEntity.price;
    persistenceEntity.availableFrom = domainEntity.availableFrom;
    persistenceEntity.floorNumber = domainEntity.floorNumber;
    persistenceEntity.isFurnished = domainEntity.isFurnished;
    persistenceEntity.heatingSystem = domainEntity.heatingSystem;
    persistenceEntity.coolingSystem = domainEntity.coolingSystem;
    persistenceEntity.parkingSpaces = domainEntity.parkingSpaces;
    persistenceEntity.contactName = domainEntity.contactName;
    persistenceEntity.contactEmail = domainEntity.contactEmail;
    persistenceEntity.contactNumber = domainEntity.contactNumber;
    persistenceEntity.createdAt = domainEntity.createdAt ?? new Date();
    persistenceEntity.updatedAt = domainEntity.updatedAt ?? new Date();
    persistenceEntity.owner = domainEntity.owner;

    // Map related entities
    if (domainEntity.images) {
      persistenceEntity.propertyImages = domainEntity.images.map(
        PropertyImageMapper.toPersistence,
      );
    }
    if (domainEntity.amenities) {
      persistenceEntity.amenities = domainEntity.amenities.map(
        AmenityMapper.toPersistence,
      );
    }

    return persistenceEntity;
  }
}

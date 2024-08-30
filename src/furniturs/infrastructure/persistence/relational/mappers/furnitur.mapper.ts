import { Furnitur } from '../../../../domain/furnitur';
import { FurniturEntity } from '../entities/furnitur.entity';

export class FurniturMapper {
  static toDomain(raw: FurniturEntity): Furnitur {
    const domainEntity = new Furnitur();
    domainEntity.id = raw.id;
    domainEntity.createdAt = raw.createdAt;
    domainEntity.updatedAt = raw.updatedAt;
    domainEntity.name = raw.name;
    domainEntity.brand_name = raw.brand_name;
    domainEntity.furniture_type = raw.furniture_type;
    domainEntity.material = raw.material;
    domainEntity.dimensions = raw.dimensions;
    domainEntity.weight = raw.weight;
    domainEntity.color = raw.color;
    domainEntity.price = raw.price;
    domainEntity.currency = raw.currency;
    domainEntity.warranty_period = raw.warranty_period;
    domainEntity.seating_capacity = raw.seating_capacity;
    domainEntity.assembly_required = raw.assembly_required;
    domainEntity.manufacturer = raw.manufacturer;
    domainEntity.model = raw.model;
    domainEntity.year = raw.year;
    domainEntity.interior_material = raw.interior_material;
    domainEntity.safety_rating = raw.safety_rating;
    domainEntity.location = raw.location;
    domainEntity.maintenance_instructions = raw.maintenance_instructions;

    return domainEntity;
  }

  static toPersistence(domainEntity: Furnitur): FurniturEntity {
    const persistenceEntity = new FurniturEntity();
    if (domainEntity.id) {
      persistenceEntity.id = domainEntity.id;
    }
    persistenceEntity.createdAt = domainEntity.createdAt;
    persistenceEntity.updatedAt = domainEntity.updatedAt;
    persistenceEntity.name = domainEntity.name;
    persistenceEntity.brand_name = domainEntity.brand_name;
    persistenceEntity.furniture_type = domainEntity.furniture_type;
    persistenceEntity.material = domainEntity.material;
    persistenceEntity.dimensions = domainEntity.dimensions;
    persistenceEntity.weight = domainEntity.weight;
    persistenceEntity.color = domainEntity.color;
    persistenceEntity.price = domainEntity.price;
    persistenceEntity.currency = domainEntity.currency;
    persistenceEntity.warranty_period = domainEntity.warranty_period;
    persistenceEntity.seating_capacity = domainEntity.seating_capacity;
    persistenceEntity.assembly_required = domainEntity.assembly_required;
    persistenceEntity.manufacturer = domainEntity.manufacturer;
    persistenceEntity.model = domainEntity.model;
    persistenceEntity.year = domainEntity.year;
    persistenceEntity.interior_material = domainEntity.interior_material;
    persistenceEntity.safety_rating = domainEntity.safety_rating;
    persistenceEntity.location = domainEntity.location;
    persistenceEntity.maintenance_instructions =
      domainEntity.maintenance_instructions;

    return persistenceEntity;
  }
}

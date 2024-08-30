import { Electronic } from '../../../../domain/electronic';
import { ElectronicEntity } from '../entities/electronic.entity';

export class ElectronicMapper {
  static toDomain(raw: ElectronicEntity): Electronic {
    const domainEntity = new Electronic();
    domainEntity.abc = raw.abc;
    domainEntity.maintenance_instructions = raw.maintenance_instructions;
    domainEntity.connectivity = raw.connectivity;
    domainEntity.resolution = raw.resolution;
    domainEntity.screenType = raw.screenType;
    domainEntity.screenSize = raw.screenSize;
    domainEntity.operatingSystem = raw.operatingSystem;
    domainEntity.processor = raw.processor;
    domainEntity.ram = raw.ram;
    domainEntity.storageCapacity = raw.storageCapacity;
    domainEntity.batteryLife = raw.batteryLife;
    domainEntity.weightUnit = raw.weightUnit;
    domainEntity.weight = raw.weight;
    domainEntity.dimensions = raw.dimensions;
    domainEntity.warrantyPeriod = raw.warrantyPeriod;
    domainEntity.price = raw.price;
    domainEntity.currency = raw.currency;
    domainEntity.color = raw.color;
    domainEntity.modelNumber = raw.modelNumber;
    domainEntity.electronicsType = raw.electronicsType;
    domainEntity.brand = raw.brand;
    domainEntity.name = raw.name;
    domainEntity.id = raw.id;
    domainEntity.createdAt = raw.createdAt;
    domainEntity.updatedAt = raw.updatedAt;

    return domainEntity;
  }

  static toPersistence(domainEntity: Electronic): ElectronicEntity {
    const persistenceEntity = new ElectronicEntity();
    persistenceEntity.abc = domainEntity.abc;
    persistenceEntity.maintenance_instructions =
      domainEntity.maintenance_instructions;
    persistenceEntity.connectivity = domainEntity.connectivity;
    persistenceEntity.resolution = domainEntity.resolution;
    persistenceEntity.screenType = domainEntity.screenType;
    persistenceEntity.screenSize = domainEntity.screenSize;
    persistenceEntity.operatingSystem = domainEntity.operatingSystem;
    persistenceEntity.processor = domainEntity.processor;
    persistenceEntity.ram = domainEntity.ram;
    persistenceEntity.storageCapacity = domainEntity.storageCapacity;
    persistenceEntity.batteryLife = domainEntity.batteryLife;
    persistenceEntity.weightUnit = domainEntity.weightUnit;
    persistenceEntity.weight = domainEntity.weight;
    persistenceEntity.dimensions = domainEntity.dimensions;
    persistenceEntity.warrantyPeriod = domainEntity.warrantyPeriod;
    persistenceEntity.price = domainEntity.price;
    persistenceEntity.currency = domainEntity.currency;
    persistenceEntity.color = domainEntity.color;
    persistenceEntity.modelNumber = domainEntity.modelNumber;
    persistenceEntity.electronicsType = domainEntity.electronicsType;
    persistenceEntity.brand = domainEntity.brand;
    persistenceEntity.name = domainEntity.name;
    if (domainEntity.id) {
      persistenceEntity.id = domainEntity.id;
    }
    persistenceEntity.createdAt = domainEntity.createdAt;
    persistenceEntity.updatedAt = domainEntity.updatedAt;

    return persistenceEntity;
  }
}

import { SparePart } from '../../../../domain/spare-part';
import { SparePartEntity } from '../entities/spare-part.entity';

export class SparePartMapper {
  static toDomain(raw: SparePartEntity): SparePart {
    const domainEntity = new SparePart();
    domainEntity.id = raw.id;
    domainEntity.brandName = raw.brandName;
    domainEntity.partType = raw.partType;
    domainEntity.description = raw.description;
    domainEntity.manufacturer = raw.manufacturer;
    domainEntity.modelNumber = raw.modelNumber;
    domainEntity.motorId = raw.motor.id; // Assume raw.motor is an instance of MotorEntity
    domainEntity.warrantyPeriod = raw.warrantyPeriod;

    return domainEntity;
  }

  static toPersistence(domainEntity: SparePart): SparePartEntity {
    const persistenceEntity = new SparePartEntity();
    persistenceEntity.id = domainEntity.id;
    persistenceEntity.brandName = domainEntity.brandName;
    persistenceEntity.partType = domainEntity.partType;
    persistenceEntity.description = domainEntity.description;
    persistenceEntity.manufacturer = domainEntity.manufacturer;
    persistenceEntity.modelNumber = domainEntity.modelNumber;
    persistenceEntity.warrantyPeriod = domainEntity.warrantyPeriod;

    // Handle the relationship mapping
    // Assuming you have a method to find or create the MotorEntity
    // persistenceEntity.motor = findMotorEntityById(domainEntity.motorId);

    return persistenceEntity;
  }
}

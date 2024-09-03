import { SparePart } from '../../../../domain/spare-part';
import { SparePartEntity } from '../entities/spare-part.entity';

export class SparePartMapper {
  static toDomain(raw: SparePartEntity): SparePart {
    const domainEntity = new SparePart();
    domainEntity.id = raw.id;
    domainEntity.brandName = raw.brandName;
    domainEntity.partType = raw.partType;
    domainEntity.modelNumber = raw.modelNumber;
    domainEntity.motorId = raw.motor.id; // Assume raw.motor is an instance of MotorEntity

    return domainEntity;
  }

  static toPersistence(domainEntity: SparePart): SparePartEntity {
    const persistenceEntity = new SparePartEntity();
    persistenceEntity.id = domainEntity.id;
    persistenceEntity.brandName = domainEntity.brandName;
    persistenceEntity.partType = domainEntity.partType;
    persistenceEntity.modelNumber = domainEntity.modelNumber;

    // Handle the relationship mapping
    // Assuming you have a method to find or create the MotorEntity
    // persistenceEntity.motor = findMotorEntityById(domainEntity.motorId);

    return persistenceEntity;
  }
}

import { MotorImage } from '../../../../domain/motor-image';
import { MotorImageEntity } from '../entities/motor-image.entity';

export class MotorImageMapper {
  static toDomain(raw: MotorImageEntity): MotorImage {
    const domainEntity = new MotorImage();
    domainEntity.id = raw.id;
    domainEntity.path = raw.path;

    return domainEntity;
  }

  static toPersistence(domainEntity: MotorImage): MotorImageEntity {
    const persistenceEntity = new MotorImageEntity();
    persistenceEntity.id = domainEntity.id;
    persistenceEntity.path = domainEntity.path;

    return persistenceEntity;
  }
}

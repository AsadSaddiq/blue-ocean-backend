import { Rating } from '../../../../domain/rating';
import { MotorEntity } from '../entities/motor.entity';
import { RatingEntity } from '../entities/rating.entity';

export class RatingMapper {
  static toDomain(raw: RatingEntity): Rating {
    const domainEntity = new Rating();
    // Assuming `updatedAt` is not stored separately
    domainEntity.motorId = raw.motor?.id || ''; // Map motor ID if available
    domainEntity.part = raw.part;
    domainEntity.rating = raw.rating;
    domainEntity.review = raw.review;

    return domainEntity;
  }

  static toPersistence(domainEntity: Rating): RatingEntity {
    const persistenceEntity = new RatingEntity();
    persistenceEntity.part = domainEntity.part;
    persistenceEntity.rating = domainEntity.rating;
    persistenceEntity.review = domainEntity.review || ''; // Default to empty string if undefined

    // Ensure to set motor correctly; assuming motorId is available
    if (domainEntity.motorId) {
      persistenceEntity.motor = new MotorEntity();
      persistenceEntity.motor.id = domainEntity.motorId;
    }

    return persistenceEntity;
  }
}

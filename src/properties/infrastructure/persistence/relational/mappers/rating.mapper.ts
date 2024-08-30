import { Rating } from '../../../../domain/rating';
import { RatingEntity } from '../entities/rating.entity';
import { PropertyMapper } from './property.mapper';
import { UserMapper } from '../../../../../users/infrastructure/persistence/relational/mappers/user.mapper'; // Assuming a UserMapper is defined

export class RatingMapper {
  static toDomain(raw: RatingEntity): Rating {
    const domainEntity = new Rating();
    domainEntity.property = PropertyMapper.toDomain(raw.property);
    domainEntity.user = UserMapper.toDomain(raw.user); // Assuming UserMapper is defined
    domainEntity.value = raw.value;
    domainEntity.id = raw.id;

    return domainEntity;
  }

  static toPersistence(domainEntity: Rating): RatingEntity {
    const persistenceEntity = new RatingEntity();
    persistenceEntity.property = PropertyMapper.toPersistence(
      domainEntity.property,
    );
    persistenceEntity.user = UserMapper.toPersistence(domainEntity.user); // Assuming UserMapper is defined
    persistenceEntity.value = domainEntity.value;

    if (domainEntity.id) {
      persistenceEntity.id = domainEntity.id;
    }

    return persistenceEntity;
  }
}

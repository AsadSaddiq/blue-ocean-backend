import { Feature } from '../../../../domain/feature';
import { FeatureEntity } from '../entities/feature.entity';

export class FeatureMapper {
  static toDomain(raw: FeatureEntity): Feature {
    const domainEntity = new Feature();
    domainEntity.id = raw.id;
    domainEntity.feature = raw.feature; // Map `feature` to `name`

    return domainEntity;
  }

  static toPersistence(domainEntity: Feature): FeatureEntity {
    const persistenceEntity = new FeatureEntity();
    persistenceEntity.id = domainEntity.id;
    persistenceEntity.feature = domainEntity.feature; // Map `name` to `feature`

    return persistenceEntity;
  }
}

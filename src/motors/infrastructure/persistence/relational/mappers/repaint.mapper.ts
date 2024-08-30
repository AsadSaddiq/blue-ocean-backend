import { Repaint } from '../../../../domain/repaint';
import { RepaintEntity } from '../entities/repaint.entity';

export class RepaintMapper {
  static toDomain(raw: RepaintEntity): Repaint {
    const domainEntity = new Repaint();
    domainEntity.colorBrand = raw.colorBrand; // Assuming 'colorBrand' maps to 'oldColor'
    domainEntity.colorName = raw.colorName; // Assuming 'colorName' maps to 'newColor'
    domainEntity.dateOfRepaint = raw.dateOfRepaint;
    domainEntity.workshopName = raw.workshopName; // Assuming 'repaintShop' maps to 'workshopName'
    domainEntity.description = raw.description;

    return domainEntity;
  }

  static toPersistence(domainEntity: Repaint): RepaintEntity {
    const persistenceEntity = new RepaintEntity();
    persistenceEntity.colorBrand = domainEntity.colorBrand; // Default to empty string if undefined
    persistenceEntity.colorName = domainEntity.colorName; // Default to empty string if undefined
    persistenceEntity.workshopName = domainEntity.workshopName; // Default to empty string if undefined
    persistenceEntity.description = domainEntity.description; // Default to empty string if undefined
    persistenceEntity.dateOfRepaint = domainEntity.dateOfRepaint || new Date(); // Default to current date if undefined

    return persistenceEntity;
  }
}

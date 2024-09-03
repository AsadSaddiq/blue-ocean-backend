import { Motor } from '../../../../domain/motor';
import { MotorEntity } from '../entities/motor.entity';

export class MotorMapper {
  static toDomain(raw: MotorEntity): Motor {
    if (!raw) {
      throw new Error('MotorEntity is null or undefined.');
    }

    const domainEntity = new Motor();
    domainEntity.createdAt = raw.createdAt ?? null;
    domainEntity.updatedAt = raw.updatedAt ?? null;
    domainEntity.name = raw.name ?? '';
    domainEntity.brandName = raw.brandName ?? '';
    domainEntity.vehicleType = raw.vehicleType ?? '';
    domainEntity.engineCapacity = raw.engineCapacity ?? 0;
    domainEntity.horsepower = raw.horsepower ?? 0;
    domainEntity.torque = raw.torque ?? 0;
    domainEntity.fuelType = raw.fuelType ?? '';
    domainEntity.transmission = raw.transmission ?? '';
    domainEntity.manufacturer = raw.manufacturer ?? '';
    domainEntity.model = raw.model ?? '';
    domainEntity.maxSpeed = raw.maxSpeed ?? 0;
    domainEntity.acceleration = raw.acceleration ?? 0;
    domainEntity.fuelCapacity = raw.fuelCapacity ?? 0;
    domainEntity.mileage = raw.mileage ?? 0;
    domainEntity.price = raw.price ?? 0;
    domainEntity.currency = raw.currency ?? 'USD';
    domainEntity.color = raw.color ?? '';
    domainEntity.interiorColor = raw.interiorColor ?? '';
    domainEntity.seatingCapacity = raw.seatingCapacity ?? 0;
    domainEntity.doors = raw.doors ?? 0;
    domainEntity.insuranceProvider = raw.insuranceProvider ?? '';
    domainEntity.insuranceExpiryDate = raw.insuranceExpiryDate;
    domainEntity.numberOfCylinders = raw.numberOfCylinders ?? 0;
    domainEntity.location = raw.location ?? '';
    domainEntity.kilometersDriven = raw.kilometersDriven ?? 0;
    domainEntity.user = raw.user ?? null;

    return domainEntity;
  }

  static toPersistence(domainEntity: Motor): MotorEntity {
    if (!domainEntity) {
      throw new Error('Domain entity is null or undefined.');
    }

    const persistenceEntity = new MotorEntity();
    persistenceEntity.createdAt = domainEntity.createdAt;
    persistenceEntity.updatedAt = domainEntity.updatedAt;
    persistenceEntity.name = domainEntity.name ?? '';
    persistenceEntity.brandName = domainEntity.brandName ?? '';
    persistenceEntity.vehicleType = domainEntity.vehicleType ?? '';
    persistenceEntity.engineCapacity = domainEntity.engineCapacity ?? 0;
    persistenceEntity.horsepower = domainEntity.horsepower ?? 0;
    persistenceEntity.torque = domainEntity.torque ?? 0;
    persistenceEntity.fuelType = domainEntity.fuelType ?? '';
    persistenceEntity.transmission = domainEntity.transmission ?? '';
    persistenceEntity.manufacturer = domainEntity.manufacturer ?? '';
    persistenceEntity.model = domainEntity.model ?? '';
    persistenceEntity.maxSpeed = domainEntity.maxSpeed ?? 0;
    persistenceEntity.acceleration = domainEntity.acceleration ?? 0;
    persistenceEntity.fuelCapacity = domainEntity.fuelCapacity ?? 0;
    persistenceEntity.mileage = domainEntity.mileage ?? 0;
    persistenceEntity.price = domainEntity.price ?? 0;
    persistenceEntity.currency = domainEntity.currency ?? 'USD';
    persistenceEntity.color = domainEntity.color ?? '';
    persistenceEntity.interiorColor = domainEntity.interiorColor ?? '';
    persistenceEntity.seatingCapacity = domainEntity.seatingCapacity ?? 0;
    persistenceEntity.doors = domainEntity.doors ?? 0;
    persistenceEntity.insuranceProvider = domainEntity.insuranceProvider ?? '';
    persistenceEntity.insuranceExpiryDate = domainEntity.insuranceExpiryDate;
    persistenceEntity.numberOfCylinders = domainEntity.numberOfCylinders ?? 0;
    persistenceEntity.location = domainEntity.location ?? '';
    persistenceEntity.kilometersDriven = domainEntity.kilometersDriven ?? 0;

    // Ensure user is not null before assigning
    if (domainEntity.user) {
      persistenceEntity.user = domainEntity.user;
    } else {
      throw new Error('User is required to create a MotorEntity');
    }

    return persistenceEntity;
  }
}

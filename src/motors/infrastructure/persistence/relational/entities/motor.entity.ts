import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { UserEntity } from '../../../../../users/infrastructure/persistence/relational/entities/user.entity';
import { MotorImageEntity } from './motor-image.entity';
import { SparePartEntity } from './spare-part.entity';
import { RatingEntity } from './rating.entity';
import { RepaintEntity } from './repaint.entity';
import { FeatureEntity } from './feature.entity';

@Entity({ name: 'motor' })
export class MotorEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column({ type: 'varchar', length: 100 })
  name: string;

  @ApiProperty()
  @Column({ type: 'varchar', length: 100, default: 'other' })
  brandName: string;

  @ApiProperty()
  @Column({ type: 'varchar', length: 20 })
  vehicleType: string;

  @ApiProperty()
  @Column({ type: 'float' })
  engineCapacity: number;

  @ApiProperty()
  @Column({ type: 'int' })
  horsepower: number;

  @ApiProperty()
  @Column({ type: 'int' })
  torque: number;

  @ApiProperty()
  @Column({ type: 'varchar', length: 10 })
  fuelType: string;

  @ApiProperty()
  @Column({ type: 'varchar', length: 20 })
  transmission: string;

  @ApiProperty()
  @Column({ type: 'varchar', length: 100 })
  manufacturer: string;

  @ApiProperty()
  @Column({ type: 'varchar', length: 100, default: 'unknown' })
  model: string;

  @ApiProperty()
  @Column({ type: 'int' })
  year: number;

  @ApiProperty()
  @Column({ type: 'float' })
  weight: number;

  @ApiProperty()
  @Column({ type: 'varchar', length: 100 })
  dimensions: string;

  @ApiProperty()
  @Column({ type: 'int' })
  maxSpeed: number;

  @ApiProperty()
  @Column({ type: 'float' })
  acceleration: number;

  @ApiProperty()
  @Column({ type: 'float', default: 0.0 })
  fuelCapacity: number;

  @ApiProperty()
  @Column({ type: 'float', default: 0.0 })
  mileage: number;

  @ApiProperty()
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @ApiProperty()
  @Column({ type: 'varchar', length: 6, default: 'USD' })
  currency: string;

  @ApiProperty()
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty()
  @UpdateDateColumn()
  updatedAt: Date;

  @ApiProperty()
  @Column({ type: 'varchar', length: 50, default: 'unspecified' })
  color: string;

  @ApiProperty()
  @Column({ type: 'varchar', length: 50, default: 'unspecified' })
  interiorColor: string;

  @ApiProperty()
  @Column({ type: 'int', default: 5 })
  seatingCapacity: number;

  @ApiProperty()
  @Column({ type: 'int', default: 4 })
  doors: number;

  @ApiProperty()
  @Column({ type: 'float', default: 0 })
  safetyRating: number;

  @ApiProperty()
  @Column({ type: 'int', default: 0 })
  warrantyYears: number;

  @ApiProperty({ nullable: true })
  @Column({ type: 'varchar', length: 100, nullable: true })
  insuranceProvider?: string;

  @ApiProperty({ nullable: true })
  @Column({ type: 'date', nullable: true })
  insuranceExpiryDate?: Date;

  @ApiProperty()
  @Column({ type: 'int', default: 4 })
  numberOfCylinders: number;

  @ApiProperty()
  @Column({ type: 'varchar', length: 100, default: 'unknown' })
  location: string;

  @ApiProperty()
  @Column({ type: 'float', default: 0.0 })
  kilometersDriven: number;

  @ApiProperty({ type: () => UserEntity })
  @ManyToOne(() => UserEntity, (user) => user.motors, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  user: UserEntity;

  @ApiProperty({ type: () => MotorImageEntity, isArray: true })
  @OneToMany(() => MotorImageEntity, (motorImage) => motorImage.motor)
  images: MotorImageEntity[];

  @ApiProperty({ type: () => SparePartEntity, isArray: true })
  @OneToMany(() => SparePartEntity, (sparePart) => sparePart.motor)
  sparePartsRelated: SparePartEntity[];

  @ApiProperty({ type: () => RatingEntity, isArray: true })
  @OneToMany(() => RatingEntity, (rating) => rating.motor)
  ratings: RatingEntity[];

  @ApiProperty({ type: () => RepaintEntity, isArray: true })
  @OneToMany(() => RepaintEntity, (repaint) => repaint.motor)
  repaints: RepaintEntity[];

  @ApiProperty({ type: () => FeatureEntity, isArray: true })
  @ManyToMany(() => FeatureEntity, (feature) => feature.motors, {
    cascade: true,
    eager: true,
  })
  @JoinTable({
    name: 'motor_features',
    joinColumn: { name: 'motor_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'feature_id', referencedColumnName: 'id' },
  })
  features: FeatureEntity[];
}

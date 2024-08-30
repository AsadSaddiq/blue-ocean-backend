import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { AmenityEntity } from './amenity.entity';
import { PropertyImageEntity } from './property-image.entity';
import { RatingEntity } from './rating.entity';
import { UserEntity } from '../../../../../users/infrastructure/persistence/relational/entities/user.entity';
import { PropertyType } from '../../../../enum/property-type.enum';
import { TimePeriod } from '../../../../enum/time-period.enum';
import { HeatingType } from '../../../../enum/heating-type.enum';
import { CoolingType } from '../../../../enum/cooling-type.enum';

@Entity({ name: 'property' })
export class PropertyEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column()
  title: string;

  @ApiProperty()
  @Column()
  purpose: string;

  @ApiProperty()
  @Column()
  description: string;

  @ApiProperty()
  @Column({ type: 'enum', enum: PropertyType, default: PropertyType.APARTMENT })
  propertyType: string;

  @ApiProperty()
  @Column()
  bedrooms: number;

  @ApiProperty()
  @Column()
  bed: number;

  @ApiProperty()
  @Column()
  bathrooms: number;

  @ApiProperty()
  @Column('decimal', { precision: 8, scale: 2 })
  area: number;

  @ApiProperty()
  @Column()
  city: string;

  @ApiProperty()
  @Column()
  country: string;

  @ApiProperty()
  @Column()
  address: string;

  @ApiProperty()
  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @ApiProperty()
  @Column({
    type: 'enum',
    enum: TimePeriod,
    default: TimePeriod.MONTH,
  })
  rentPeriod: string;

  @ApiProperty()
  @Column()
  currency: string;

  @ApiProperty()
  @Column()
  availableFrom: Date;

  @ApiProperty()
  @Column({ nullable: true })
  floorNumber: number;

  @ApiProperty()
  @Column({ default: false })
  isFurnished: boolean;

  @ApiProperty()
  @Column({
    type: 'enum',
    enum: HeatingType,
    default: HeatingType.CENTRAL,
  })
  heatingSystem: string;

  @ApiProperty()
  @Column({
    type: 'enum',
    enum: CoolingType,
    default: CoolingType.CENTRAL,
  })
  coolingSystem: string;

  @ApiProperty()
  @Column({ nullable: true })
  parkingSpaces: number;

  @ApiProperty()
  @Column({ nullable: true })
  contactNumber: string;

  @ApiProperty()
  @Column()
  contactName: string;

  @ApiProperty()
  @Column()
  contactEmail: string;

  @ApiProperty()
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty()
  @UpdateDateColumn()
  updatedAt: Date;

  @ApiProperty({ type: () => UserEntity })
  @ManyToOne(() => UserEntity, (user) => user.property)
  owner: UserEntity;

  @ApiProperty({ type: () => AmenityEntity })
  @ManyToMany(() => AmenityEntity, (amenity) => amenity.properties, {
    cascade: true,
  })
  @JoinTable()
  amenities: AmenityEntity[];

  @ApiProperty({ type: () => PropertyImageEntity })
  @OneToMany(
    () => PropertyImageEntity,
    (propertyImage) => propertyImage.property,
    { cascade: true },
  )
  propertyImages: PropertyImageEntity[];

  @ApiProperty({ type: () => RatingEntity })
  @OneToMany(() => RatingEntity, (rating) => rating.property, { cascade: true })
  ratings: RatingEntity[];
}

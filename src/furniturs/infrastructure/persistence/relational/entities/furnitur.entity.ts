import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { EntityRelationalHelper } from '../../../../../utils/relational-entity-helper';
import { ApiProperty } from '@nestjs/swagger';
import { FurnitureImageEntity } from './furnitur-image.entity';
import { UserEntity } from '../../../../../users/infrastructure/persistence/relational/entities/user.entity';

@Entity({
  name: 'furnitur',
})
export class FurniturEntity extends EntityRelationalHelper {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => UserEntity, (user) => user.furniture)
  @ApiProperty({ type: () => UserEntity })
  user: UserEntity;

  @Column({ length: 100 })
  @ApiProperty()
  name: string;

  @Column({ length: 100 })
  @ApiProperty()
  brand_name: string;

  @Column({
    type: 'enum',
    enum: [
      'table',
      'chair',
      'sofa',
      'bed',
      'cabinet',
      'desk',
      'shelf',
      'stool',
      'dresser',
      'bench',
      'armchair',
      'recliner',
      'nightstand',
      'wardrobe',
      'bookcase',
      'console',
      'ottoman',
      'futon',
      'barstool',
      'sectional',
      'loveseat',
      'beanbag',
      'changing_table',
      'daybed',
      'murphy_bed',
      'other',
    ],
  })
  @ApiProperty()
  furniture_type: string;

  @Column({
    type: 'enum',
    enum: [
      'wood',
      'metal',
      'plastic',
      'fabric',
      'leather',
      'composite',
      'glass',
      'rattan',
      'vinyl',
      'stone',
      'ceramic',
      'bamboo',
      'marble',
      'particleboard',
      'fiberboard',
      'plywood',
      'natural_fiber',
      'other',
    ],
  })
  @ApiProperty()
  material: string;

  @Column({ length: 100 })
  @ApiProperty({ description: 'Dimensions (LxWxH) in cm' })
  dimensions: string;

  @Column('float')
  @ApiProperty({ description: 'Weight in kg' })
  weight: number;

  @Column({
    type: 'enum',
    enum: [
      'black',
      'white',
      'brown',
      'beige',
      'grey',
      'red',
      'blue',
      'green',
      'yellow',
      'purple',
      'orange',
      'pink',
      'teal',
      'gold',
      'silver',
      'cream',
      'navy',
      'burgundy',
      'tan',
      'lavender',
      'peach',
      'other',
    ],
    default: 'other',
  })
  @ApiProperty()
  color: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  @ApiProperty()
  price: number;

  @Column({
    type: 'enum',
    enum: [
      'USD',
      'EUR',
      'GBP',
      'JPY',
      'CNY',
      'INR',
      'AUD',
      'CAD',
      'CHF',
      'NZD',
      'SEK',
      'NOK',
      'DKK',
      'HKD',
      'SGD',
      'other',
    ],
    default: 'USD',
  })
  @ApiProperty()
  currency: string;

  @Column('int', { default: 0 })
  @ApiProperty({ description: 'Warranty period in months' })
  warranty_period: number;

  @Column('int', { nullable: true, default: 0 })
  @ApiProperty({ description: 'Seating capacity for sofas/chairs' })
  seating_capacity: number;

  @Column({ type: 'boolean', default: false })
  @ApiProperty({ description: 'Is assembly required?' })
  assembly_required: boolean;

  // Additional attributes from Motor model
  @Column({ length: 100, nullable: true })
  @ApiProperty({ description: 'Manufacturer of the furniture' })
  manufacturer: string;

  @Column({ length: 100, default: 'unknown' })
  @ApiProperty({ description: 'Model name or number' })
  model: string;

  @Column('int', { nullable: true })
  @ApiProperty({ description: 'Year of manufacture' })
  year: number;

  @Column({ length: 50, nullable: true })
  @ApiProperty({ description: 'Interior material' })
  interior_material: string;

  @Column('float', { default: 0 })
  @ApiProperty({ description: 'Safety rating out of 5' })
  safety_rating: number;

  @Column({ length: 100, default: 'unknown' })
  @ApiProperty({ description: 'Location where the furniture is available' })
  location: string;

  @Column('text', { nullable: true })
  @ApiProperty({ description: 'Instructions for maintaining the furniture' })
  maintenance_instructions: string;

  @OneToMany(() => FurnitureImageEntity, (image) => image.furniture, {
    cascade: true,
  })
  @ApiProperty({ type: () => FurnitureImageEntity, isArray: true })
  images: FurnitureImageEntity[];

  @ApiProperty()
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty()
  @UpdateDateColumn()
  updatedAt: Date;
}

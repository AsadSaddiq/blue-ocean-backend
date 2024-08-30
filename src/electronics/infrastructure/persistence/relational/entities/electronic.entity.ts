import {
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  Column,
} from 'typeorm';
import { EntityRelationalHelper } from '../../../../../utils/relational-entity-helper';
import { ApiProperty } from '@nestjs/swagger';

@Entity({
  name: 'electronic',
})
export class ElectronicEntity extends EntityRelationalHelper {
  @ApiProperty()
  @Column()
  abc: string;

  @ApiProperty()
  @Column()
  maintenance_instructions: string;

  @ApiProperty()
  @Column()
  connectivity: string;

  @ApiProperty()
  @Column()
  resolution: string;

  @ApiProperty()
  @Column()
  screenType: string;

  @ApiProperty()
  @Column()
  screenSize: string;

  @ApiProperty()
  @Column()
  operatingSystem: string;

  @ApiProperty()
  @Column()
  processor: string;

  @ApiProperty()
  @Column()
  ram: number;

  @ApiProperty()
  @Column()
  storageCapacity: number;

  @ApiProperty()
  @Column()
  batteryLife: number;

  @ApiProperty()
  @Column()
  weightUnit: string;

  @ApiProperty()
  @Column()
  weight: number;

  @ApiProperty()
  @Column()
  dimensions: string;

  @ApiProperty()
  @Column()
  warrantyPeriod: string;

  @ApiProperty()
  @Column()
  price: number;

  @ApiProperty()
  @Column()
  currency: string;

  @ApiProperty()
  @Column()
  color: string;

  @ApiProperty()
  @Column()
  modelNumber: string;

  @ApiProperty()
  @Column()
  electronicsType: string;

  @ApiProperty()
  @Column()
  brand: string;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty()
  @UpdateDateColumn()
  updatedAt: Date;
}

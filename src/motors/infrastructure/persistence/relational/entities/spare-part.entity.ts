import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { MotorEntity } from './motor.entity';

@Entity({ name: 'spare_part' })
export class SparePartEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column({ type: 'varchar', length: 100 })
  brandName: string;

  @ApiProperty()
  @Column({ type: 'varchar', length: 20 })
  partType: string;

  @ApiProperty({ nullable: true })
  @Column({ type: 'text', nullable: true })
  description?: string;

  @ApiProperty()
  @Column({ type: 'varchar', length: 100 })
  manufacturer: string;

  @ApiProperty({ nullable: true })
  @Column({ type: 'varchar', length: 100, nullable: true })
  modelNumber?: string;

  @ApiProperty({ type: () => MotorEntity })
  @ManyToOne(() => MotorEntity, (motor) => motor.sparePartsRelated, {
    onDelete: 'CASCADE',
  })
  motor: MotorEntity;

  @ApiProperty()
  @Column({ type: 'int', default: 0 })
  warrantyPeriod: number;
}

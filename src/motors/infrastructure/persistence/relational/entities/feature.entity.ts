import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { MotorEntity } from './motor.entity';

@Entity({ name: 'feature' })
export class FeatureEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column({ type: 'varchar', length: 50 })
  feature: string;

  @ApiProperty({ type: () => MotorEntity, isArray: true })
  @ManyToMany(() => MotorEntity, (motor) => motor.features)
  motors: MotorEntity[];
}

import { Entity, Column, ManyToOne, PrimaryColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { MotorEntity } from './motor.entity';

@Entity({ name: 'motor_image' })
export class MotorImageEntity {
  @ApiProperty()
  @PrimaryColumn('uuid')
  id: string;

  @ApiProperty()
  @Column({ type: 'varchar', length: 255 })
  path: string;

  @ApiProperty({ type: () => MotorEntity })
  @ManyToOne(() => MotorEntity, (motor) => motor.images, {
    onDelete: 'CASCADE',
  })
  motor: MotorEntity;
}

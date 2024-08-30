import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { MotorEntity } from './motor.entity';

@Entity({ name: 'repaint' })
export class RepaintEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column({ type: 'varchar', length: 50 })
  colorBrand: string;

  @ApiProperty()
  @Column({ type: 'varchar', length: 50 })
  colorName: string;

  @ApiProperty({ nullable: true })
  @Column({ type: 'varchar', length: 100, nullable: true })
  workshopName: string;

  @ApiProperty({ nullable: true })
  @Column({ type: 'text', nullable: true })
  description?: string;

  @ApiProperty()
  @CreateDateColumn()
  dateOfRepaint: Date;

  @ApiProperty({ type: () => MotorEntity })
  @ManyToOne(() => MotorEntity, (motor) => motor.repaints, {
    onDelete: 'CASCADE',
  })
  motor: MotorEntity;
}

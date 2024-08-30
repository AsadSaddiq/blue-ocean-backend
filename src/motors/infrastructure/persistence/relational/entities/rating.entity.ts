import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { MotorEntity } from './motor.entity';

@Entity({ name: 'rating' })
export class RatingEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column({ type: 'varchar', length: 50 })
  part: string;

  @ApiProperty()
  @Column({ type: 'float' })
  rating: number;

  @ApiProperty({ nullable: true })
  @Column({ type: 'text', nullable: true })
  review?: string;

  @ApiProperty()
  @Column({ type: 'varchar', length: 100 })
  ratedBy: string;

  @ApiProperty()
  @CreateDateColumn()
  dateRated: Date;

  @ApiProperty({ type: () => MotorEntity })
  @ManyToOne(() => MotorEntity, (motor) => motor.ratings, {
    onDelete: 'CASCADE',
  })
  motor: MotorEntity;
}

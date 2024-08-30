import { Entity, Column, ManyToOne, PrimaryColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { FurniturEntity } from './furnitur.entity';
import { EntityRelationalHelper } from '../../../../../utils/relational-entity-helper';

@Entity({ name: 'furniture_image' })
export class FurnitureImageEntity extends EntityRelationalHelper {
  @PrimaryColumn()
  @ApiProperty()
  id: string;

  @Column()
  @ApiProperty()
  path: string;

  @ManyToOne(() => FurniturEntity, (furniture) => furniture.images, {
    onDelete: 'CASCADE',
  })
  @ApiProperty({ type: () => FurniturEntity })
  furniture: FurniturEntity;
}

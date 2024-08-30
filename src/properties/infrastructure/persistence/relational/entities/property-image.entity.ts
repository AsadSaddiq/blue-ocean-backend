import { Entity, Column, ManyToOne, PrimaryColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { PropertyEntity } from './property.entity';
import { EntityRelationalHelper } from '../../../../../utils/relational-entity-helper';

@Entity({ name: 'property_image' })
export class PropertyImageEntity extends EntityRelationalHelper {
  @ApiProperty()
  @PrimaryColumn('uuid')
  id: string;

  @ApiProperty()
  @Column()
  path: string;

  @ApiProperty({ type: () => PropertyEntity })
  @ManyToOne(() => PropertyEntity, (property) => property.propertyImages, {
    onDelete: 'CASCADE',
  })
  property: PropertyEntity;
}

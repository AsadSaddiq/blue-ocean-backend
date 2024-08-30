import { DeepPartial } from '../../../utils/types/deep-partial.type';
import { NullableType } from '../../../utils/types/nullable.type';
import { IPaginationOptions } from '../../../utils/types/pagination-options';
import { Amenity } from '../../domain/amenity';
import { Property } from '../../domain/property';

export abstract class PropertyRepository {
  abstract create(
    data: Omit<Property, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<Property>;

  abstract createAmenity(
    data: Omit<Amenity, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>,
  ): Promise<Amenity>;

  abstract findAmenity(): Promise<Amenity[]>;

  abstract findAllWithPagination({
    paginationOptions,
    filterOptions,
  }: {
    paginationOptions: IPaginationOptions;
    filterOptions?: {
      purpose?: string;
    };
  }): Promise<Property[]>;

  abstract findById(id: Property['id']): Promise<NullableType<Property>>;

  abstract update(
    id: Property['id'],
    payload: DeepPartial<Property>,
  ): Promise<Property | null>;

  abstract remove(id: Property['id']): Promise<void>;
}

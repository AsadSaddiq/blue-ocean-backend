import { DeepPartial } from '../../../utils/types/deep-partial.type';
import { NullableType } from '../../../utils/types/nullable.type';
import { IPaginationOptions } from '../../../utils/types/pagination-options';
import { Furnitur } from '../../domain/furnitur';

export abstract class FurniturRepository {
  abstract create(
    data: Omit<Furnitur, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<Furnitur>;

  abstract findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<Furnitur[]>;

  abstract findById(id: Furnitur['id']): Promise<NullableType<Furnitur>>;

  abstract update(
    id: Furnitur['id'],
    payload: DeepPartial<Furnitur>,
  ): Promise<Furnitur | null>;

  abstract remove(id: Furnitur['id']): Promise<void>;
}

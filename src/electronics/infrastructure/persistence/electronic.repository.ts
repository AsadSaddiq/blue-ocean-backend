import { DeepPartial } from '../../../utils/types/deep-partial.type';
import { NullableType } from '../../../utils/types/nullable.type';
import { IPaginationOptions } from '../../../utils/types/pagination-options';
import { Electronic } from '../../domain/electronic';

export abstract class ElectronicRepository {
  abstract create(
    data: Omit<Electronic, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<Electronic>;

  abstract findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<Electronic[]>;

  abstract findById(id: Electronic['id']): Promise<NullableType<Electronic>>;

  abstract update(
    id: Electronic['id'],
    payload: DeepPartial<Electronic>,
  ): Promise<Electronic | null>;

  abstract remove(id: Electronic['id']): Promise<void>;
}

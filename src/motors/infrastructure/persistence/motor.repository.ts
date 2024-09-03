// import { promises } from 'dns';
import { DeepPartial } from '../../../utils/types/deep-partial.type';
import { NullableType } from '../../../utils/types/nullable.type';
import { IPaginationOptions } from '../../../utils/types/pagination-options';
import { Feature } from '../../domain/feature';
import { Motor } from '../../domain/motor';

export abstract class MotorRepository {
  abstract create(
    data: Omit<Motor, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<Motor>;

  abstract findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<Motor[]>;

  abstract findById(id: Motor['id']): Promise<NullableType<Motor>>;

  abstract update(
    id: Motor['id'],
    payload: DeepPartial<Motor>,
  ): Promise<Motor | null>;

  abstract remove(id: Motor['id']): Promise<void>;

  // abstract creteFeature(data: Feature): Promise<Feature>;

  abstract findFeature(): Promise<Feature[]>;
}

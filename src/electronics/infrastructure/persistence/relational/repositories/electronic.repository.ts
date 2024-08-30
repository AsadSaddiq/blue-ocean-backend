import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ElectronicEntity } from '../entities/electronic.entity';
import { NullableType } from '../../../../../utils/types/nullable.type';
import { Electronic } from '../../../../domain/electronic';
import { ElectronicRepository } from '../../electronic.repository';
import { ElectronicMapper } from '../mappers/electronic.mapper';
import { IPaginationOptions } from '../../../../../utils/types/pagination-options';

@Injectable()
export class ElectronicRelationalRepository implements ElectronicRepository {
  constructor(
    @InjectRepository(ElectronicEntity)
    private readonly electronicRepository: Repository<ElectronicEntity>,
  ) {}

  async create(data: Electronic): Promise<Electronic> {
    const persistenceModel = ElectronicMapper.toPersistence(data);
    const newEntity = await this.electronicRepository.save(
      this.electronicRepository.create(persistenceModel),
    );
    return ElectronicMapper.toDomain(newEntity);
  }

  async findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<Electronic[]> {
    const entities = await this.electronicRepository.find({
      skip: (paginationOptions.page - 1) * paginationOptions.limit,
      take: paginationOptions.limit,
    });

    return entities.map((user) => ElectronicMapper.toDomain(user));
  }

  async findById(id: Electronic['id']): Promise<NullableType<Electronic>> {
    const entity = await this.electronicRepository.findOne({
      where: { id },
    });

    return entity ? ElectronicMapper.toDomain(entity) : null;
  }

  async update(
    id: Electronic['id'],
    payload: Partial<Electronic>,
  ): Promise<Electronic> {
    const entity = await this.electronicRepository.findOne({
      where: { id },
    });

    if (!entity) {
      throw new Error('Record not found');
    }

    const updatedEntity = await this.electronicRepository.save(
      this.electronicRepository.create(
        ElectronicMapper.toPersistence({
          ...ElectronicMapper.toDomain(entity),
          ...payload,
        }),
      ),
    );

    return ElectronicMapper.toDomain(updatedEntity);
  }

  async remove(id: Electronic['id']): Promise<void> {
    await this.electronicRepository.delete(id);
  }
}

import { Injectable } from '@nestjs/common';
import { CreateFurniturDto } from './dto/create-furnitur.dto';
// import { UpdateFurniturDto } from './dto/update-furnitur.dto';
import { FurniturRepository } from './infrastructure/persistence/furnitur.repository';
import { IPaginationOptions } from '../utils/types/pagination-options';
import { Furnitur } from './domain/furnitur';

@Injectable()
export class FurnitursService {
  constructor(private readonly furniturRepository: FurniturRepository) {}
  create(createFurniturDto: CreateFurniturDto) {
    return this.furniturRepository.create(createFurniturDto);
  }
  findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }) {
    return this.furniturRepository.findAllWithPagination({
      paginationOptions: {
        page: paginationOptions.page,
        limit: paginationOptions.limit,
      },
    });
  }

  findOne(id: Furnitur['id']) {
    return this.furniturRepository.findById(id);
  }

  // update(id: Furnitur['id'], updateFurniturDto: UpdateFurniturDto) {
  //   return this.furniturRepository.update(id, updateFurniturDto);
  // }

  remove(id: Furnitur['id']) {
    return this.furniturRepository.remove(id);
  }
}

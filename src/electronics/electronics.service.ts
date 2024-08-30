import { Injectable } from '@nestjs/common';
import { CreateElectronicDto } from './dto/create-electronic.dto';
import { UpdateElectronicDto } from './dto/update-electronic.dto';
import { ElectronicRepository } from './infrastructure/persistence/electronic.repository';
import { IPaginationOptions } from '../utils/types/pagination-options';
import { Electronic } from './domain/electronic';

@Injectable()
export class ElectronicsService {
  constructor(private readonly electronicRepository: ElectronicRepository) {}

  create(createElectronicDto: CreateElectronicDto) {
    return this.electronicRepository.create(createElectronicDto);
  }

  findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }) {
    return this.electronicRepository.findAllWithPagination({
      paginationOptions: {
        page: paginationOptions.page,
        limit: paginationOptions.limit,
      },
    });
  }

  findOne(id: Electronic['id']) {
    return this.electronicRepository.findById(id);
  }

  update(id: Electronic['id'], updateElectronicDto: UpdateElectronicDto) {
    return this.electronicRepository.update(id, updateElectronicDto);
  }

  remove(id: Electronic['id']) {
    return this.electronicRepository.remove(id);
  }
}

import { Injectable } from '@nestjs/common';
import { CreateMotorDto } from './dto/create-motor.dto';
// import { UpdateMotorDto } from './dto/update-motor.dto';
import { MotorRepository } from './infrastructure/persistence/motor.repository';
import { IPaginationOptions } from '../utils/types/pagination-options';
import { Motor } from './domain/motor';
import { CreateFeatureDto } from './dto/create-feature.dto';
import { Feature } from './domain/feature';

@Injectable()
export class MotorsService {
  constructor(private readonly motorRepository: MotorRepository) {}

  create(createMotorDto: CreateMotorDto) {
    return this.motorRepository.create(createMotorDto);
  }

  findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }) {
    return this.motorRepository.findAllWithPagination({
      paginationOptions: {
        page: paginationOptions.page,
        limit: paginationOptions.limit,
      },
    });
  }

  findOne(id: Motor['id']) {
    return this.motorRepository.findById(id);
  }

  // update(id: Motor['id'], updateMotorDto: UpdateMotorDto) {
  //   return this.motorRepository.update(id, updateMotorDto);
  // }

  remove(id: Motor['id']) {
    return this.motorRepository.remove(id);
  }

  creteFeature(createFeatureCto: CreateFeatureDto) {
    return this.motorRepository.creteFeature(createFeatureCto);
  }

  findFeature(): Promise<Feature[]> {
    return this.motorRepository.findFeature();
  }
}

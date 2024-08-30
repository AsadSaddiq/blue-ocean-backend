import { Injectable } from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { PropertyRepository } from './infrastructure/persistence/property.repository';
import { IPaginationOptions } from '../utils/types/pagination-options';
import { Property } from './domain/property';
import { CreateAmenityDto } from './dto/create-amenity.dto';
import { Amenity } from './domain/amenity';

@Injectable()
export class PropertiesService {
  constructor(private readonly propertyRepository: PropertyRepository) {}

  create(createPropertyDto: CreatePropertyDto) {
    return this.propertyRepository.create(createPropertyDto);
  }
  createAmenity(createAmenityDto: CreateAmenityDto) {
    return this.propertyRepository.createAmenity(createAmenityDto);
  }

  findAmenity(): Promise<Amenity[]> {
    return this.propertyRepository.findAmenity();
  }

  findAllWithPagination({
    paginationOptions,
    filterOptions,
  }: {
    paginationOptions: IPaginationOptions;
    filterOptions?: {
      purpose?: string;
      minPrice?: number;
      maxPrice?: number;
      userId?: string;
      propertyType?: string;
    };
  }) {
    return this.propertyRepository.findAllWithPagination({
      paginationOptions: {
        page: paginationOptions.page,
        limit: paginationOptions.limit,
      },
      filterOptions,
    });
  }

  findOne(id: Property['id']) {
    return this.propertyRepository.findById(id);
  }

  update(id: Property['id'], updatePropertyDto: UpdatePropertyDto) {
    return this.propertyRepository.update(id, updatePropertyDto);
  }

  remove(id: Property['id']) {
    return this.propertyRepository.remove(id);
  }
}

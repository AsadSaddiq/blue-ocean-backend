import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  // UseGuards,
  Query,
} from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import {
  // ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { Property } from './domain/property';
// import { AuthGuard } from '@nestjs/passport';
import {
  InfinityPaginationResponse,
  InfinityPaginationResponseDto,
} from '../utils/dto/infinity-pagination-response.dto';
import { infinityPagination } from '../utils/infinity-pagination';
import { FindAllPropertiesDto } from './dto/find-all-properties.dto';
import { CreateAmenityDto } from './dto/create-amenity.dto';
import { Amenity } from './domain/amenity';

@ApiTags('Properties')
// @ApiBearerAuth()
// @UseGuards(AuthGuard('jwt'))
@Controller({
  path: 'properties',
  version: '1',
})
export class PropertiesController {
  constructor(private readonly propertiesService: PropertiesService) {}

  @Post()
  @ApiCreatedResponse({
    type: Property,
  })
  create(@Body() createPropertyDto: CreatePropertyDto) {
    return this.propertiesService.create(createPropertyDto);
  }
  @Post('amenity')
  @ApiCreatedResponse({
    type: Property,
  })
  createAmenity(@Body() createAmenityDto: CreateAmenityDto) {
    return this.propertiesService.createAmenity(createAmenityDto);
  }
  @Get('amenity')
  @ApiOkResponse({
    type: [Amenity],
  })
  findAmenity() {
    return this.propertiesService.findAmenity();
  }

  @Get()
  @ApiOkResponse({
    type: InfinityPaginationResponse(Property),
  })
  async findAll(
    @Query() query: FindAllPropertiesDto,
  ): Promise<InfinityPaginationResponseDto<Property>> {
    const page = query?.page ?? 1;
    let limit = query?.limit ?? 10;

    if (limit > 50) {
      limit = 50;
    }

    return infinityPagination(
      await this.propertiesService.findAllWithPagination({
        paginationOptions: {
          page,
          limit,
        },
        filters: {
          purpose: query.purpose,
          minPrice: query.minPrice,
          maxPrice: query.maxPrice,
          userId: query.userId,
          propertyType: query.propertyType,
          globalSearch: query.globalSearch,
        },
      }),
      { page, limit },
    );
  }

  @Get(':id')
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
  })
  @ApiOkResponse({
    type: Property,
  })
  findOne(@Param('id') id: string) {
    return this.propertiesService.findOne(id);
  }

  @Patch(':id')
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
  })
  @ApiOkResponse({
    type: Property,
  })
  update(
    @Param('id') id: string,
    @Body() updatePropertyDto: UpdatePropertyDto,
  ) {
    console.log('*******8test patch connection************');
    return this.propertiesService.update(id, updatePropertyDto);
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
  })
  remove(@Param('id') id: string) {
    return this.propertiesService.remove(id);
  }
}

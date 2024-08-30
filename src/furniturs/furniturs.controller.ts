import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { FurnitursService } from './furniturs.service';
import { CreateFurniturDto } from './dto/create-furnitur.dto';
// import { UpdateFurniturDto } from './dto/update-furnitur.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { Furnitur } from './domain/furnitur';
import { AuthGuard } from '@nestjs/passport';
import {
  InfinityPaginationResponse,
  InfinityPaginationResponseDto,
} from '../utils/dto/infinity-pagination-response.dto';
import { infinityPagination } from '../utils/infinity-pagination';
import { FindAllFurnitursDto } from './dto/find-all-furniturs.dto';

@ApiTags('Furniturs')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller({
  path: 'furniturs',
  version: '1',
})
export class FurnitursController {
  constructor(private readonly furnitursService: FurnitursService) {}

  @Post()
  @ApiCreatedResponse({
    type: Furnitur,
  })
  create(@Body() createFurniturDto: CreateFurniturDto) {
    return this.furnitursService.create(createFurniturDto);
  }

  @Get()
  @ApiOkResponse({
    type: InfinityPaginationResponse(Furnitur),
  })
  async findAll(
    @Query() query: FindAllFurnitursDto,
  ): Promise<InfinityPaginationResponseDto<Furnitur>> {
    const page = query?.page ?? 1;
    let limit = query?.limit ?? 10;
    if (limit > 50) {
      limit = 50;
    }

    return infinityPagination(
      await this.furnitursService.findAllWithPagination({
        paginationOptions: {
          page,
          limit,
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
    type: Furnitur,
  })
  findOne(@Param('id') id: string) {
    return this.furnitursService.findOne(id);
  }

  @Patch(':id')
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
  })
  @ApiOkResponse({
    type: Furnitur,
  })
  // update(
  //   @Param('id') id: string,
  //   @Body() updateFurniturDto: UpdateFurniturDto,
  // ) {
  //   return this.furnitursService.update(id, updateFurniturDto);
  // }
  @Delete(':id')
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
  })
  remove(@Param('id') id: string) {
    return this.furnitursService.remove(id);
  }
}

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
import { ElectronicsService } from './electronics.service';
import { CreateElectronicDto } from './dto/create-electronic.dto';
import { UpdateElectronicDto } from './dto/update-electronic.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { Electronic } from './domain/electronic';
import { AuthGuard } from '@nestjs/passport';
import {
  InfinityPaginationResponse,
  InfinityPaginationResponseDto,
} from '../utils/dto/infinity-pagination-response.dto';
import { infinityPagination } from '../utils/infinity-pagination';
import { FindAllElectronicsDto } from './dto/find-all-electronics.dto';

@ApiTags('Electronics')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller({
  path: 'electronics',
  version: '1',
})
export class ElectronicsController {
  constructor(private readonly electronicsService: ElectronicsService) {}

  @Post()
  @ApiCreatedResponse({
    type: Electronic,
  })
  create(@Body() createElectronicDto: CreateElectronicDto) {
    return this.electronicsService.create(createElectronicDto);
  }

  @Get()
  @ApiOkResponse({
    type: InfinityPaginationResponse(Electronic),
  })
  async findAll(
    @Query() query: FindAllElectronicsDto,
  ): Promise<InfinityPaginationResponseDto<Electronic>> {
    const page = query?.page ?? 1;
    let limit = query?.limit ?? 10;
    if (limit > 50) {
      limit = 50;
    }

    return infinityPagination(
      await this.electronicsService.findAllWithPagination({
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
    type: Electronic,
  })
  findOne(@Param('id') id: string) {
    return this.electronicsService.findOne(id);
  }

  @Patch(':id')
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
  })
  @ApiOkResponse({
    type: Electronic,
  })
  update(
    @Param('id') id: string,
    @Body() updateElectronicDto: UpdateElectronicDto,
  ) {
    return this.electronicsService.update(id, updateElectronicDto);
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
  })
  remove(@Param('id') id: string) {
    return this.electronicsService.remove(id);
  }
}

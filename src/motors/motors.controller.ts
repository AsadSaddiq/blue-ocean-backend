import {
  Controller,
  Get,
  Post,
  Body,
  // Patch,
  Param,
  Delete,
  // UseGuards,
  Query,
} from '@nestjs/common';
import { MotorsService } from './motors.service';
import { CreateMotorDto } from './dto/create-motor.dto';
// import { UpdateMotorDto } from './dto/update-motor.dto';
import {
  // ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Motor } from './domain/motor';
// import { AuthGuard } from '@nestjs/passport';
import {
  InfinityPaginationResponse,
  InfinityPaginationResponseDto,
} from '../utils/dto/infinity-pagination-response.dto';
import { infinityPagination } from '../utils/infinity-pagination';
import { FindAllMotorsDto } from './dto/find-all-motors.dto';
import { Feature } from './domain/feature';
import { CreateFeatureDto } from './dto/create-feature.dto';

@ApiTags('Motors')
// @ApiBearerAuth()
// @UseGuards(AuthGuard('jwt'))
@Controller({
  path: 'motors',
  version: '1',
})
export class MotorsController {
  constructor(private readonly motorsService: MotorsService) {}

  @Post()
  @ApiCreatedResponse({
    type: Motor,
  })
  create(@Body() createMotorDto: CreateMotorDto) {
    return this.motorsService.create(createMotorDto);
  }

  @Get()
  @ApiOkResponse({
    type: InfinityPaginationResponse(Motor),
  })
  async findAll(
    @Query() query: FindAllMotorsDto,
  ): Promise<InfinityPaginationResponseDto<Motor>> {
    const page = query?.page ?? 1;
    let limit = query?.limit ?? 10;
    if (limit > 50) {
      limit = 50;
    }

    return infinityPagination(
      await this.motorsService.findAllWithPagination({
        paginationOptions: {
          page,
          limit,
        },
      }),
      { page, limit },
    );
  }

  // @Get(':id')
  // @ApiParam({
  //   name: 'id',
  //   type: String,
  //   required: true,
  // })
  // @ApiOkResponse({
  //   type: Motor,
  // })
  // findOne(@Param('id') id: string) {
  //   return this.motorsService.findOne(id);
  // }

  // @Patch(':id')
  // @ApiParam({
  //   name: 'id',
  //   type: String,
  //   required: true,
  // })
  // @ApiOkResponse({
  //   type: Motor,
  // })
  // update(@Param('id') id: string, @Body() updateMotorDto: UpdateMotorDto) {
  //   return this.motorsService.update(id, updateMotorDto);
  // }

  @Delete(':id')
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
  })
  remove(@Param('id') id: string) {
    return this.motorsService.remove(id);
  }

  @Post('feature')
  @ApiCreatedResponse({
    type: Feature,
  })
  createFeature(@Body() createFeatureDto: CreateFeatureDto) {
    return this.motorsService.creteFeature(createFeatureDto);
  }

  @Get('feature')
  @ApiResponse({ type: [Feature] })
  findFeature() {
    return this.motorsService.findFeature();
  }
}

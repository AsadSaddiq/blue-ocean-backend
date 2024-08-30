import { Module } from '@nestjs/common';
import { ElectronicRepository } from '../electronic.repository';
import { ElectronicRelationalRepository } from './repositories/electronic.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ElectronicEntity } from './entities/electronic.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ElectronicEntity])],
  providers: [
    {
      provide: ElectronicRepository,
      useClass: ElectronicRelationalRepository,
    },
  ],
  exports: [ElectronicRepository],
})
export class RelationalElectronicPersistenceModule {}

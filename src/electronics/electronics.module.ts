import { Module } from '@nestjs/common';
import { ElectronicsService } from './electronics.service';
import { ElectronicsController } from './electronics.controller';
import { RelationalElectronicPersistenceModule } from './infrastructure/persistence/relational/relational-persistence.module';

@Module({
  imports: [RelationalElectronicPersistenceModule],
  controllers: [ElectronicsController],
  providers: [ElectronicsService],
  exports: [ElectronicsService, RelationalElectronicPersistenceModule],
})
export class ElectronicsModule {}

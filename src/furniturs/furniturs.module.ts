import { Module } from '@nestjs/common';
import { FurnitursService } from './furniturs.service';
import { FurnitursController } from './furniturs.controller';
import { RelationalFurniturPersistenceModule } from './infrastructure/persistence/relational/relational-persistence.module';

@Module({
  imports: [RelationalFurniturPersistenceModule],
  controllers: [FurnitursController],
  providers: [FurnitursService],
  exports: [FurnitursService, RelationalFurniturPersistenceModule],
})
export class FurnitursModule {}

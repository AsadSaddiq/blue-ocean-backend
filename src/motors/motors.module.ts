import { Module } from '@nestjs/common';
import { MotorsService } from './motors.service';
import { MotorsController } from './motors.controller';
import { RelationalMotorPersistenceModule } from './infrastructure/persistence/relational/relational-persistence.module';

@Module({
  imports: [RelationalMotorPersistenceModule],
  controllers: [MotorsController],
  providers: [MotorsService],
  exports: [MotorsService, RelationalMotorPersistenceModule],
})
export class MotorsModule {}

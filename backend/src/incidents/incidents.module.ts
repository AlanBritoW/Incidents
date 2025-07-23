import { Module } from '@nestjs/common';
import { IncidentsController } from './controllers/incidents/incidents.controller';
import { IncidentsService } from './services/incidents/incidents.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Incident } from './entities/incidents.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Incident])],
  controllers: [IncidentsController],
  providers: [IncidentsService]
})
export class IncidentsModule {}

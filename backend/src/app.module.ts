import { Module } from '@nestjs/common';
import { IncidentsModule } from './incidents/incidents.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from './ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(config), IncidentsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

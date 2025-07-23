import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Incident } from "./incidents/entities/incidents.entity";


const config: TypeOrmModuleOptions = {
    type: 'sqlite',
    database: 'data/incidents.db',
    entities: [Incident],
     synchronize: true,
};

export default config;
import { Module } from '@nestjs/common';
import { LogDBService } from './log-db.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LogDB, LogSchema } from './model/log';
import { PaginationModule } from '../../application/pagination/pagination.module';

//.env config
import { SystemIntegrationDbService } from './system-integration-db.service';
import { SystemIntegrationDB, SystemIntegrationSchema } from './model/system-integration';

import * as dotenv from "dotenv";
dotenv.config();
dotenv.config({ path: `src/common/config/.${process.env.NODE_ENV}.env` });

@Module({
    imports: [
        // MongooseModule.forFeature(
        //     [
        //     ],
        //     process.env.mongo_main_db,
        // ),
        MongooseModule.forFeature([
            { name: LogDB, schema: LogSchema },
        ], process.env.mongo_log_db),
        MongooseModule.forFeature([
            { name: SystemIntegrationDB, schema: SystemIntegrationSchema },
        ], process.env.mongo_central_db),
        PaginationModule,
    ],
    providers: [
        LogDBService,
        SystemIntegrationDbService,
    ],
    exports: [
        LogDBService,
        SystemIntegrationDbService,
    ],
})
export class DatabaseModule {
}

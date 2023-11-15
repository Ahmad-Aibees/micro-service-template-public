import { NestExpressApplication } from '@nestjs/platform-express';
import { getJwtMiddleware } from './application/auth/middlewares/auth-token-middleware';
import { SystemIntegrationDbService } from './model/database/system-integration-db.service';

export function initialize(app: NestExpressApplication): void {
    app.enableCors({
        origin: '*',
        methods: 'POST,GET,PATCH,DELETE,PUT',
        credentials: true,
    });

    // jwt
    const systemIntegrationDbService = app.get(SystemIntegrationDbService);

    app.use(getJwtMiddleware(systemIntegrationDbService));

    //static files
    // app.use(
    //     '/' + process.env.upload_user_profile_folder.replace('./', ''),
    //     express.static(join(__dirname, '..', process.env.upload_user_profile_folder.replace('./', ''))),
    // );

    systemIntegrationDbService.registerService().then();
}

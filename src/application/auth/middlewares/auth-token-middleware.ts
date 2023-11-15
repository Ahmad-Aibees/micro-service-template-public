import { RandomKeyHelper } from '../../../common/helpers/random-key-helper';
import { Identity } from '../models/identity';
import {SystemIntegrationDbService} from "../../../model/database/system-integration-db.service";

class AuthTokenMiddleware {
    private headerPrefix = 'Bearer ';

    constructor(
        private readonly systemIntegrationDbService: SystemIntegrationDbService
    ) {
    }

    public async run(req, res, next) {
        req['id'] = RandomKeyHelper.create(24, RandomKeyHelper.alphaNumeric);

        const token = this.extractToken(req);
        const origin = req.headers['origin'];

        req['identity'] = new Identity();
        const identity: Identity = req['identity'];

        if (token) {
            identity.service = await this.systemIntegrationDbService.findOne({ token });
            if (!identity.service || (identity.service.address !== origin && process.env.NODE_ENV === 'production'))
                identity.service = undefined;
        }
        next();
    }

    private extractToken(req): string {
        return req.headers['authorization']?.substr(this.headerPrefix.length) ?? null;
    }
}

// eslint-disable-next-line @typescript-eslint/ban-types
export function getJwtMiddleware(systemIntegrationDbService: SystemIntegrationDbService): Function {
    const e = new AuthTokenMiddleware(systemIntegrationDbService);
    return e.run.bind(e);
}

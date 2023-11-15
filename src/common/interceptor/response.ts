import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Identity } from '../../application/auth/models/identity';
import { LogDBService } from '../../model/database/log-db.service';
import { LogModel } from '../../model/database/model/log';

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, any> {
    constructor(private readonly logDBService: LogDBService) {}

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next.handle().pipe(
            map((response: any) => {
                const http = context.switchToHttp();
                const req = http.getRequest<Request>();

                const user: Identity = req['identity'];
                // Response log
                this.logDBService.insert({
                    date: new Date(),
                    url: req.url,
                    method: req.method,
                    request: { url: req.url, body: req.body, header: req.headers },
                    statusCode: 200,
                    response: response || ' ',
                    user: user?.service?.label,
                } as LogModel);

                return response;
            }),
        );
    }
}

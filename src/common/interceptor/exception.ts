import { Catch, ExceptionFilter, ArgumentsHost, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';
import { Identity } from '../../application/auth/models/identity';
import { LogDBService } from '../../model/database/log-db.service';
import { LogModel } from '../../model/database/model/log';

@Catch()
export class ExceptionInterceptor implements ExceptionFilter {
    constructor(private readonly logDBService: LogDBService) {}

    catch(exception: any, host: ArgumentsHost) {
        const http = host.switchToHttp();
        const req = http.getRequest<Request>();
        const res = http.getResponse<Response>();

        const status: number = exception.getResponse ? exception.getResponse().statusCode : HttpStatus.INTERNAL_SERVER_ERROR;
        const error = exception.getResponse ? exception.getResponse().message : { message: exception.message, stack: exception.stack };

        //console.log(status, exception);

        const user: Identity = req['identity'];
        // Response log
        this.logDBService.insert({
            date: new Date(),
            url: req.url,
            method: req.method,
            request: { url: req.url, body: req.body, header: req.headers },
            statusCode: status,
            response: error || ' ',
            user: user?.service?.label,
        } as LogModel);

        res.status(status).json({ statusCode: status, error });
    }
}

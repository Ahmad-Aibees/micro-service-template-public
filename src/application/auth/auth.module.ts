import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { DatabaseModule } from '../../model/database/database.module';

@Module({
    imports: [JwtModule.register({}), DatabaseModule],
    providers: [AuthService], exports: [AuthService] })
export class AuthModule {}

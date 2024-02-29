import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { DevicesModule } from './devices/devices.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    UsersModule,
    DevicesModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }

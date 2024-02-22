import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { DevicesModule } from './devices/devices.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    DatabaseModule,
    UsersModule,
    DevicesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }

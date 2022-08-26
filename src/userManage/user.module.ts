import { Module } from '@nestjs/common';
import { UserManageController } from './user.controller';
import { UserManageService } from './user.service';

@Module({
  controllers: [UserManageController],
  providers: [UserManageService],
})
export class UserManageModule {}

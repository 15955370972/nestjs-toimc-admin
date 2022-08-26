import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { OrdersModule } from './module/admin/orders/orders.module';
import { ArticlesModule } from './module/admin/articles/articles.module';
import { FocusModule } from './module/admin/focus/focus.module';
import { UserManageModule } from './userManage/user.module'
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UserModule,
    PrismaModule,
    OrdersModule,
    ArticlesModule,
    FocusModule,
    UserManageModule
  ],
})
export class AppModule {}

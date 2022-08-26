import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { UserManageDto } from './dto/page.dto';

@Injectable()
export class UserManageService {
  constructor(private prisma: PrismaService) {}

  findManyUser(userManage: UserManageDto) {
    return this.prisma.userManage.findMany({
      where: {
        userAccount: userManage.userAccount,
        userName: userManage.userName,
        sex: userManage.sex
      },
      take: userManage.size,
      cursor: { id: userManage.current}
    });
    // return this.prisma.$queryRaw(Prisma.sql`SELECT * from ${userManage}`);
  }
  findOneUser(userId) {
    return this.prisma.userManage.findFirst({
      where: {
        id: userId,
      },
    });
  }
  freezeUser(userId, status) {
    return this.prisma.userManage.update({
      where: {
        id: userId,
      },
      data: {
        status,
      },
    });
  }
  findOneByAccount(userAccount) {
    return this.prisma.userManage.findFirst({
      where: {
        userAccount,
      },
    });
  }
  addOneUser(data) {
    return this.prisma.userManage.create({
      data: {
        ...data,
        birthday: new Date(data.birthday),
      },
    });
  }
  updateOneUser(data) {
    return this.prisma.userManage.update({
      where: {
        id: data.userId,
      },
      data: {
        ...data,
        birthday: new Date(data.birthday),
      },
    });
  }
  delOneUser(id) {
    return this.prisma.userManage.delete({
      where: { id },
    });
  }
}

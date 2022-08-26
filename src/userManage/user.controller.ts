import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UseInterceptors
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AddDto } from './dto/add.dto';
import { UserManageDto } from './dto/page.dto';
import {
  ForbiddenUserException,
  FreezeUserException,
  RepeatUserException,
  SuccessUserException,
} from './exception';
import { TransformInterceptor } from './interceptors/TransformInterceptor';
import { RawBody, ValidationPipe } from './pipe/ValidationPipe';
import { UserManageService } from './user.service';

@Controller('userManage')
@UseInterceptors(new TransformInterceptor())
@ApiTags('userManage')
export class UserManageController {
  constructor(private userManageService: UserManageService) {}

  static successBack(data) {
    throw new SuccessUserException(data);
  }

  @Post('/getUserRecord')
  getUserRecord(@RawBody(new ValidationPipe()) userManage: UserManageDto) {
    return this.userManageService.findManyUser(userManage);
  }

  @Get('/delUser/:userId')
  async delUser(@Param('userId', ParseIntPipe) userId: number) {
    const user = await this.userManageService.findOneUser(userId);
    if (!user) {
      throw new ForbiddenUserException();
    }
    if (user.status === 2) {
      throw new FreezeUserException();
    }
    const data = await this.userManageService.delOneUser(userId);
    return UserManageController.successBack(data);
  }

  @Get('/freezeUser/:userId/:status')
  async freezeUser(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('status', ParseIntPipe) status: number
  ) {
    const user = await this.userManageService.findOneUser(userId);
    if (!user) {
      throw new ForbiddenUserException();
    }
    const data = await this.userManageService.freezeUser(userId, status);
    return UserManageController.successBack(data);
  }

  @Post('/editUser')
  async editUser(@RawBody(new ValidationPipe()) addDto: AddDto) {
    if (addDto.userId) {
      const user = await this.userManageService.findOneUser(addDto.userId);
      if (user.status === 2) {
        throw new FreezeUserException();
      }
      const data = await this.userManageService.updateOneUser(addDto);
      return UserManageController.successBack(data);
    }
    const current = await this.userManageService.findOneByAccount(
      addDto.userAccount,
    );
    console.log(current);
    if (current) {
      throw new RepeatUserException();
    }
    const res = await this.userManageService.addOneUser(addDto);
    return UserManageController.successBack(res);
  }
}

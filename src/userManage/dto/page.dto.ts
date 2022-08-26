import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsNotEmptyObject, Min } from 'class-validator';

export class UserManageDto {

  @IsInt({ message: '分页数据不得为空' })
  @Min(1, { message: '分页数据最少请求一页' })
  readonly current: number;

  @IsInt({ message: '分页数据不得为空' })
  @Min(1, { message: '分页数据最少每页1条' })
  readonly size: number;

  userAccount?: string;
  userName?: string;
  sex?: number;
}
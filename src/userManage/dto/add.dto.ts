import { IsNotEmpty } from "class-validator";

export class AddDto {
  @IsNotEmpty({ message: '数据不得为空' })
  userAccount: string;
  @IsNotEmpty({ message: '数据不得为空' })
  userName: string;
  @IsNotEmpty({ message: '数据不得为空' })
  portraitUrl: string;
  @IsNotEmpty({ message: '数据不得为空' })
  sex: number;
  @IsNotEmpty({ message: '数据不得为空' })
  birthday: Date;
  @IsNotEmpty({ message: '数据不得为空' })
  mobile: string;
  @IsNotEmpty({ message: '数据不得为空' })
  branch: string[];
  userId?: number;
}
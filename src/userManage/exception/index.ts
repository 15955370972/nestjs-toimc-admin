import { HttpException, HttpStatus } from "@nestjs/common";

class ForbiddenUserException extends HttpException {
  constructor() {
    super({
        code: 10000,
        data: false,
        message: '当前用户不存在',
        // eslint-disable-next-line prettier/prettier
    }, HttpStatus.OK)
  }
}

class RepeatUserException extends HttpException {
  constructor() {
    super({
        code: 10000,
        data: false,
        message: '当前用户已存在',
        // eslint-disable-next-line prettier/prettier
    }, HttpStatus.OK)
  }
}

class FreezeUserException extends HttpException {
  constructor() {
    super({
        code: 10000,
        data: '',
        message: '当前用户已冻结'
        // eslint-disable-next-line prettier/prettier
    }, HttpStatus.OK)
  }
}

class ValidateUserException extends HttpException {
  constructor(message) {
    super({
        code: 10000,
        data: '',
        message
        // eslint-disable-next-line prettier/prettier
    }, HttpStatus.OK)
  }
}

class SuccessUserException extends HttpException {
  constructor(data) {
    super({
        code: 0,
        data,
        message: ''
        // eslint-disable-next-line prettier/prettier
    }, HttpStatus.OK)
  }
}

export {
  ForbiddenUserException,
  FreezeUserException,
  RepeatUserException,
  SuccessUserException,
  ValidateUserException
}

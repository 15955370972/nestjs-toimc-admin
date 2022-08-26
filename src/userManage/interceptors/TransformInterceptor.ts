import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  Response
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

export interface Response<T> {
  code: number;
  data: T;
  message: string;
}

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(
    _context: ExecutionContext,
    next: CallHandler
  ): Observable<Response<T>> {
    return next.handle().pipe(map((data) => ({
      data,
      message: '',
      code: 0
    })));
  }
}
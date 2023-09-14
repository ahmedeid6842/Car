import { CallHandler, ExecutionContext, NestInterceptor, UseInterceptors } from '@nestjs/common';
import { Observable } from 'rxjs';
import { plainToInstance } from 'class-transformer';
import { map } from 'rxjs/operators';

interface ClassConstructor {
  // sepcify it will be an class
  new (...args: any[]): {};
}

export function Serialize(dto: ClassConstructor) { // implement a decorator for serialize to simplify the Interceptors call
  return UseInterceptors(new SerializeInterceptor(dto));
}

export class SerializeInterceptor implements NestInterceptor {
  constructor(private dto: any) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> {
    // Run code for incoming request before handler excuted

    return next.handle().pipe(
      map((data: any) => {
        // Run code for responses after sending the handler
        return plainToInstance(this.dto, data, {
          excludeExtraneousValues: true,
        });
      }),
    );
  }
}

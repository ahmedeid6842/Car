import {
    CallHandler,
    ExecutionContext,
    NestInterceptor, UseInterceptors
} from '@nestjs/common';
import { UsersService } from '../users.service';

// this interceptor is the link between our DI system and decorators or in other word link between CurrentUser decortator and User service
export class CurrentUserInterceptor implements NestInterceptor {
    constructor(private userService: UsersService) { };
    async intercept(context: ExecutionContext, next: CallHandler) {
        const request = context.switchToHttp().getRequest();
        const { userId } = request.session;

        if (userId) {
            const user = await this.userService.findOne(userId)
            request.currentUser = user;
        }

        return next.handle();
    }

}
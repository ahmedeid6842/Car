import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Observable } from "rxjs";

// this AuthGuard to preventing access with authentication guards
// in case if no value to return like null or defined it'll be considered falsy and will prevent the access to the rest

export class AuthGuard implements CanActivate {
    canActivate(context: ExecutionContext) {
        const request = context.switchToHttp().getRequest();

        return request.session.userId;
    }
}
import { Injectable, NestMiddleware } from "@nestjs/common";
import { UsersService } from "../users.service";
import { NextFunction, Request, Response } from "express";
import { User } from "../users.entity";

declare global {
    namespace Express {
        interface Request {
            currentUser?: User;
        }
    }
}

@Injectable()
export class CurrentUserMiddleWare implements NestMiddleware {
    constructor(private userService: UsersService) { }

    async use(req: Request, res: Response, next: NextFunction) {
        const { userId } = req.session || {}

        if (userId) {
            const user = await this.userService.findOne(userId)
            req.currentUser = user;
        }

        next()
    }
}
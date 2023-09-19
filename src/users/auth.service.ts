import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { UsersService } from "./users.service";
import * as bcrypt from "bcrypt"
import { User } from "./users.entity";
@Injectable()
export class AuthService {
    constructor(private userService: UsersService) { }

    async signup(email: string, password: string) {
        const users = await this.userService.find(email)

        if (users.length) {
            throw new BadRequestException(`this email:${email} is already exists`)
        }

        const salt = await bcrypt.genSalt();
        password = await bcrypt.hash(password, salt);

        const user = await this.userService.create(email, password);

        return user;
    }

    async signin(email: string, password: string) {
        const [user] = await this.userService.find(email)

        if (!user) {
            throw new NotFoundException("user not found");
        }

        const verifiedUser = await bcrypt.compare(password, user.password)
        if (!verifiedUser) {
            throw new BadRequestException('incorrect password')
        }

        return user;
    }
}
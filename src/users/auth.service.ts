import { BadRequestException, Injectable } from "@nestjs/common";
import { UsersService } from "./users.service";
import bcrypt from "bcrypt"
@Injectable()
export class AuthService {
    constructor(private userService: UsersService) { }

    async signup(email: string, password: string) {
        const users = await this.userService.find(email)

        if (users.length) {
            throw new BadRequestException(`this email:${email} is already exists`)
        }

        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt);

        const user = await this.userService.create(email, password);

        return user;
    }
}
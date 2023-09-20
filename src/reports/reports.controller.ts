import { Body, Controller, Post } from '@nestjs/common';
import { CreateReportDto } from './dto/create-report.dto';
import { CurrentUser } from 'src/users/decorators/current-user.decorator';
import { User } from 'src/users/users.entity';
import { ReportsService } from './reports.service';

@Controller('reports')
export class ReportsController {
    constructor(private reportService: ReportsService) { }
    @Post()
    createReport(@Body() body: CreateReportDto, @CurrentUser() user: User) {
        return this.reportService.create(body)
    }
}

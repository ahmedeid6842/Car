import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Report } from './reports.entity';
import { Repository } from 'typeorm';
import { CreateReportDto } from './dto/create-report.dto';
import { User } from 'src/users/users.entity';

@Injectable()
export class ReportsService {
    constructor(@InjectRepository(Report) private reports: Repository<Report>) { }

    create(reportDto: CreateReportDto, user: User) {
        const report = this.reports.create(reportDto)
        report.user = user;
        return this.reports.save(report);
    }
}

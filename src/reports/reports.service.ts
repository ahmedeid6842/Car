import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Report } from './reports.entity';
import { Repository } from 'typeorm';
import { CreateReportDto } from './dto/create-report.dto';

@Injectable()
export class ReportsService {
    constructor(@InjectRepository(Report) private reports: Repository<Report>) { }

    create(reportDto: CreateReportDto) {
        const report = this.reports.create(reportDto)
    }
}

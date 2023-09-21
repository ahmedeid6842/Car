import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Report } from './reports.entity';
import { Repository } from 'typeorm';
import { CreateReportDto } from './dto/create-report.dto';
import { User } from 'src/users/users.entity';
import { GetEstimateDto } from './dto/get-estimate.dto';

@Injectable()
export class ReportsService {
    constructor(@InjectRepository(Report) private reports: Repository<Report>) { }

    create(reportDto: CreateReportDto, user: User) {
        const report = this.reports.create(reportDto)
        report.user = user;
        return this.reports.save(report);
    }

    async changeApproval(id: string, approved: boolean) {
        const report = await this.reports.findOne({ where: { id: parseInt(id) } });

        if (!report) {
            throw new NotFoundException("report not found")
        }

        report.approved = approved
        return this.reports.save(report);
    }

    createEstimate({ make, model, lng, lat, year, mileage }: GetEstimateDto) {
        return this.reports
            .createQueryBuilder() // Create a query builder for the reports table.
            .select("AVG(price)", 'price') // Select the average price of cars as the price column.
            .where("make = :make", { make }) // Where the make of the car is equal to the make parameter.
            .andWhere("model = :model", { model }) // And the model of the car is equal to the model parameter.
            .andWhere("lng - :lng BETWEEN -5 AND 5", { lng }) // And the longitude of the car's location is between 5 degrees east and west of the lng parameter.
            .andWhere("lat - :lat BETWEEN -5 AND 5", { lat }) // And the latitude of the car's location is between 5 degrees north and south of the lat parameter.
            .andWhere("year - :year BETWEEN -3 AND 3", { year }) // And the year of the car is between 3 years before and after the year parameter.
            .andWhere("approved IS TRUE") // And the car is approved for sale.
            .orderBy("ABS(mileage - :mileage)", 'DESC') // Order by the absolute difference between the car's mileage and the mileage parameter in descending order.
            .setParameters({ mileage }) // Set the parameters for the query.
            .limit(3) // Limit the results to the top 3.
            .getRawOne() // Get the first raw result from the query.
    }
}

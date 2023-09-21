import { Transform } from "class-transformer";
import { IsLatitude, IsLongitude, IsNumber, IsString, Max, Min } from "class-validator";


export class GetEstimateDto {
    @IsString()
    make: string;

    @IsString()
    model: string;

    @Transform(({ value }) => parseInt(value))
    @IsNumber()
    @Min(1930)
    @Max(2050)
    year: number;

    @Transform(({ value }) => parseInt(value))
    @IsNumber()
    @Min(0)
    @Max(1_000_000)
    mileage: number;

    @Transform(({ value }) => parseInt(value))
    @IsLongitude()
    lng: number;

    @Transform(({ value }) => parseInt(value))
    @IsLatitude()
    lat: number;
}
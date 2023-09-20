import { Expose, Transform } from "class-transformer";

export class ReportDto {
    @Expose() // expose specify this property will be exposed 
    id: number;
    @Expose()
    price: number;
    @Expose()
    year: number;
    @Expose()
    lng: number;
    @Expose()
    lat: number;
    @Expose()
    make: string;
    @Expose()
    model: string;
    @Expose()
    mileage: string
    @Transform(({ obj }) =>obj.user.id) //transform is decorator to trnasofrm plain object to a new shape
    @Expose()
    userId: number;
}
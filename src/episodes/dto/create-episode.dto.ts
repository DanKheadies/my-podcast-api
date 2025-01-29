// import { Type } from 'class-transformer';
// import { IsBoolean, IsOptional, IsString } from "class-validator";

export class CreateEpisodeDto {
    // @IsString()
    name: string;

    // @IsBoolean()
    // @IsOptional()
    featured?: boolean;

    // @IsDataView()
    // @Type(() => Date)
    // publishedAt: Date;
}
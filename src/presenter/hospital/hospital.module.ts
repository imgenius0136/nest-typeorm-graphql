import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hospital } from 'src/entity/hospital.entity';
import { HospitalResolver } from './hospital.resolver';
import { HospitalService } from './hospital.service';

@Module({
    imports: [TypeOrmModule.forFeature([Hospital])],
    exports: [TypeOrmModule],
    providers: [
        HospitalResolver,
        HospitalService
    ]
})
export class HospitalModule {}

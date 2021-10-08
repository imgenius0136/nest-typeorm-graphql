import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Hospital } from 'src/entity/hospital.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HospitalService {
    constructor(
        @InjectRepository(Hospital)
        private hospitalRepository: Repository<Hospital>
    ){}

    findAll() : Promise<Hospital[]> {
        return this.hospitalRepository.find()
    }

    findUser(hospital_id: number) : Promise<Hospital> {
        return this.hospitalRepository.findOne(hospital_id)
    }

}
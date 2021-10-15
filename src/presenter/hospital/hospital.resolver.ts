import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Hospital } from 'src/entity/hospital.entity';
import { HospitalService } from './hospital.service';

@Resolver(() => Hospital)
export class HospitalResolver {
  constructor(private readonly hospitalService: HospitalService) {}

  @Query(() => [Hospital])
  async hospital() {
    return this.hospitalService.findAll();
  }

  @Query(() => Hospital)
  async findHospital(
    @Args('hospital_id', { type: () => Int }) hospital_id: number,
  ) {
    return this.hospitalService.findUser(hospital_id);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';
import { ObjectID, Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ){}

    findAll() : Promise<User[]> {
        return this.userRepository.find()
    }

    findUser(user_id: number) : Promise<User> {
        return this.userRepository.findOne(user_id)
    }

}
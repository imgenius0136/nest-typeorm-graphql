import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { User } from 'src/entity/user.entity';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
    constructor(private readonly userService: UserService) {}

    @Query(() => [User])
    async user() {
        return this.userService.findAll()
    }

    @Query(() => User)
    async findUser(@Args('user_id', {type: () => Int}) user_id: number) {
        return this.userService.findUser(user_id)
    }
}
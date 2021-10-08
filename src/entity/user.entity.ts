import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: "users"})
@ObjectType({isAbstract: true})
export class User extends BaseEntity{

    @PrimaryGeneratedColumn()
    @Field(() => Int)
    user_id: number;
  
    @Column()
    @Field(() => String)
    name: string;
  
    @Column()
    @Field(() => String)
    email: string;
  
    @Column()
    @Field(() => String)
    password: string;

    @Column()
    @Field(() => String)
    agreement: "y" | "n";

    @Column()
    @Field(() => String)
    login_type: "origin" | "kakao" | "facebook" | "gmail" | "naver";

    @Column()
    @Field(() => String)
    status: "live" | "sleep" | "dead";

    @Column()
    @Field(() => String)
    address: string;

  }
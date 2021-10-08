import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: "hospitals"})
@ObjectType({isAbstract: true})
export class Hospital extends BaseEntity{

    @PrimaryGeneratedColumn()
    @Field(() => Int)
    hospital_id: number;
  
    @Column()
    @Field(() => String)
    name: string;

  }
import { Resolver, Query } from '@nestjs/graphql';
import { User } from './entities/user.entity';

@Resolver('User')
export class UserResolver {
  constructor() {}

  @Query(() => User!)
  public async user(): Promise<User> {
    return {
      name: 'matheus',
    };
  }
}

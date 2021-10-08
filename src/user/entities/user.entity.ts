import { Field, Float, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => Float, { description: 'Example field (placeholder)' })
  id: number;

  @Field()
  name: string;
}

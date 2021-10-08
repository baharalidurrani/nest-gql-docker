import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  users: User[] = [
    { id: 1, name: 'user 1' },
    { id: 2, name: 'user 2' },
  ];
  create(createUserInput: CreateUserInput) {
    const user: User = { ...createUserInput, id: Math.random() };
    this.users.push(user);
    return user;
  }

  async findAll() {
    await new Promise((res) => setTimeout(res, 2000));
    return this.users;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

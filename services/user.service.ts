import { User } from '../models/user.ts';
import createId from '../services/createId.ts';

import UserRepository from '../repositories/user.repository.ts';

type UserData = Pick<User, 'name' | 'email'>;

class UserService {

  public repository = new UserRepository();

  public getUsers = async (): Promise<User[]> => {
    return await this.repository.getAll();
  }

  public getUser = async (userId: string): Promise<User | undefined> => {
    const user = await this.repository.getById(userId);
    return user;
  }

  public createUser = async (userData: UserData): Promise<string> => {
    const newUser = {
      name: String(userData.name),
      email: String(userData.email)
    };

    const userId = await this.repository.create(newUser);
    return String(userId);
  }

  public updateUser = async (
    userId: string,
    userData: UserData
  ): Promise<void> => {
    const user = await this.getUser(userId);

    if (!user) {
      throw new Error("User not found");
    }

    const updatedUser = {
      ...user,
      name: userData.name !== undefined ? String(userData.name) : user.name,
      email: userData.email !== undefined ? String(userData.email) : user.email
    };

    await this.repository.update(userId, updatedUser);
  }

  public deleteUser = async (userId: string): Promise<void> => {
    await this.repository.delete(userId);
  }
}

export default UserService;
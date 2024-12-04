import IService from "../interfaces/IService";
import UserRepository from "../repositories/user-repository";
import { User } from "@prisma/client";

class UserService implements IService<User> {
  private readonly userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async create(data: User): Promise<User> {
    return this.userRepository.create(data);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  async findById(id: string): Promise<User> {
    return this.userRepository.findById(id);
  }

  async updateById(id: string, data: User): Promise<User | null> {
    return this.userRepository.update(id, data);
  }

  async deleteById(id: string): Promise<User | null> {
    return this.userRepository.delete(id);
  }
}

export default UserService;

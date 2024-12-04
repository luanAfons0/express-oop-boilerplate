import { Prisma, PrismaClient, User } from "@prisma/client";
import { IRepository } from "../interfaces/IRepository";
import { DefaultArgs } from "@prisma/client/runtime/library";

class UserRepository implements IRepository<User> {
  private prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(data: User): Promise<User> {
    return await this.prisma.user.create({ data });
  }

  findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  findById(id: string): Promise<User> {
    return this.prisma.user.findFirst({ where: { id: Number(id) } });
  }

  update(id: string, data: User): Promise<User> {
    return this.prisma.user.update({ where: { id: Number(id) }, data });
  }

  delete(id: string): Promise<User> {
    return this.prisma.user.delete({ where: { id: Number(id) } });
  }
}

export default UserRepository;

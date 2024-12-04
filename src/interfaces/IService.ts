interface IService<T> {
  findById(id: string): Promise<T | null>;
  findAll(): Promise<T[]>;
  updateById(id: string, data: T): Promise<T | null>;
  deleteById(id: string): Promise<T | null>;
}

export default IService;

interface IService<T> {
    findById(id: number): T;
    findAll(): T[];
    updateById(id: number): T;
    deleteById(id: number): T;
}

export default IService;
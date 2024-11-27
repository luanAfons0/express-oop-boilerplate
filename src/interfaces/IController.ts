interface IController<T, Data> {
  getById?(id: Number): T;
  getAll?(): T[];
  post?(data: Data): T;
  patch?(id: Number, data: Data): T;
  put?(id: Number, data: Data): T;
  delete?(id: Number): T;
}

export default IController;


export interface IBaseModel {
  id: string;
  apiRoute: string;
}

export class SomeModel implements IBaseModel {
  id = '';
  name = '';
  apiRoute = 'SomeModels';
}

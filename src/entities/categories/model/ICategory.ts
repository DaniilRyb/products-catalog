import { IProduct } from '../../product/model/IProduct';

export interface ICategory {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
}

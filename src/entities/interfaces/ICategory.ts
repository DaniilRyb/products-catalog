import {IProduct} from "./IProduct";

export interface ICategory {
    products: Readonly<IProduct[]>;
    total:    number;
    skip:     number;
    limit:    number;
}


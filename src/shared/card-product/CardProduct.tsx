import React, {FC} from 'react';
import "./CardProduct.css"
import {IProduct} from "../../entities/interfaces/IProduct";

type CardProductProps = {
    product: IProduct
}
export const CardProduct: FC<CardProductProps> = ({product}) => {
    return (
        <div className="card-product">
            <div>
                <img src={product.thumbnail} alt={product.brand} width="200px" height="200px"/>
            </div>
            <div className="m-0"><p className="p-0 m-0"><strong>{product.title}</strong></p></div>
            <div className="m-0"><p className="p-0 m-0">{product.price}$</p></div>
        </div>
    );
};


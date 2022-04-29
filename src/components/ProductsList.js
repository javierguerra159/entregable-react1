import React from 'react';

const ProductsList = ({products}) => {
    return (
        <div>
            {
                products.map(product =>(
                    <div key={product.id}>
                        {product.name}
                        {product.category}
                        {product.price}
                        {product.isAvalible}
                    </div>
                ))
            }
        </div>
    );
};

export default ProductsList;
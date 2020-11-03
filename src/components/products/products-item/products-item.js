import React, {Component} from 'react';
import "./products-item.css"

class ProductsItem extends Component {
    render() {
        const {title, image, price, deleteProduct} = this.props;
        return (
            <div className="col-md-4">
                <li className="product-item">
                    <h3>{title}</h3>
                    <img src={image} alt={""}/>
                    <p>Price: <span>{price}$</span> <button className="btn btn-success buy-button">Купить</button>
                        <button onClick={()=>{deleteProduct(this.props.id)}} className='btn btn-danger ml-4'>удалить</button>

                    </p>

                </li>
            </div>
        );
    }
}

export default ProductsItem;
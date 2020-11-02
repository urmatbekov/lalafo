import React, {Component} from 'react';
import "./products-item.css"

class ProductsItem extends Component {
    render() {
        const {title, image, price} = this.props;
        return (
            <div className="col-md-4">
                <li className="product-item">
                    <h3>{title}</h3>
                    <img src={image} alt={""}/>
                    <p>Price: <span>{price}$</span>
                        <button className="btn btn-danger buy-button">Купить</button>
                    </p>
                    <button className='btn btn-danger'>x</button>
                </li>
            </div>
        );
    }
}

export default ProductsItem;
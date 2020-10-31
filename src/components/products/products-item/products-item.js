import React, {Component} from 'react';
import "./products-item.css"

class ProductsItem extends Component {
    state = {
        image: '/img/televizor.jpg',
        price: 200,
        title: "Televizor"
    }
    render() {
        const {title, image, price}= this.state;
        return (
            <div className="col-md-4">
                <li className="product-item">
                    <h3>{title}</h3>
                    <img src={image} alt={""}/>
                    <p>Price: <span>{price}$</span>
                        <button className="btn btn-danger buy-button">Купить</button>
                    </p>
                </li>
            </div>
        );
    }
}

export default ProductsItem;
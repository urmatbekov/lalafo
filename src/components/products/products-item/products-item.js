import React, {Component} from 'react';
import "./products-item.css"
import {Link} from "react-router-dom";

class ProductsItem extends Component {
    render() {
        const {title, image, price,id, deleteProduct} = this.props;
        return (
                <li className="product-item col-md-4">
                    <h3 className="product-title" title={title}>{title}</h3>
                    <Link to={"/product/"+id}><img src={image} alt={""}/></Link>
                    <p>Price: <span>{price}$</span>
                        <button onClick={()=>deleteProduct(this.props.id)} className='btn btn-danger delete-button'>x</button>
                        <button className="btn btn-danger buy-button">Купить</button>
                    </p>
                </li>
        );
    }
}

export default ProductsItem;
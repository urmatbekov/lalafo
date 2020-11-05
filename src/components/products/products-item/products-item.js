import React, {Component} from 'react';
import "./products-item.css"
import {Link} from "react-router-dom";

class ProductsItem extends Component {
    render() {
        const {title, image, price,id, deleteProduct} = this.props;
        return (
<<<<<<< HEAD
                <li className="product-item col-md-4">
                    <h3 className="product-title" title={title}>{title}</h3>
                    <Link to={"/product/"+id}><img src={image} alt={""}/></Link>
                    <p>Price: <span>{price}$</span>
                        <button onClick={()=>deleteProduct(this.props.id)} className='btn btn-danger delete-button'>x</button>
                        <button className="btn btn-danger buy-button">Купить</button>
                    </p>
=======
            <div className="col-md-4">
                <li className="product-item">
                    <h3>{title}</h3>
                    <img src={image} alt={""}/>
                    <p>Price: <span>{price}$</span> <button className="btn btn-success buy-button">Купить</button>
                        <button onClick={()=>{deleteProduct(this.props.id)}} className='btn btn-danger ml-4'>удалить</button>

                    </p>

>>>>>>> cd9c89a15eaa63d0c65d57ef8dbd60d33d6f4e02
                </li>
        );
    }
}

export default ProductsItem;
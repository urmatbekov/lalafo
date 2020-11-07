import React, {Component} from 'react';
import {withRouter} from "react-router-dom";


class ProductDetail extends Component {
    render() {
        const id = +this.props.match.params.id
        return (
            <div className="container">
                    {
                        ({data}) => {
                            const item = data.find((item) => item.id === id)
                            return (
                                <div>
                                    <h1>{item.title}</h1>
                                    <img style={{width:'400px'}} src={item.image} alt=""/>
                                    <p>{item.price} $</p>
                                </div>
                            )
                        }
                    }
            </div>
        );
    }
}

export default withRouter(ProductDetail);
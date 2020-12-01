import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
<<<<<<< HEAD
import {connect} from "react-redux";
=======

>>>>>>> mr-oroz

class ProductDetail extends Component {
    render() {
        const id = +this.props.match.params.id
        const item = this.props.data.find((item) => item.id === id)
        return (
            <div className="container">
<<<<<<< HEAD
                <div>
                    <h1>{item.title}</h1>
                    <img style={{width: '400px'}} src={item.image} alt=""/>
                    <p>{item.price} $</p>
                </div>
=======
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
>>>>>>> mr-oroz
            </div>
        );
    }
}

export default withRouter(connect(({data})=>({data}))(ProductDetail));
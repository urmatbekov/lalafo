import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
<<<<<<< HEAD

=======
>>>>>>> 630a8d845fbcd1b281c5887cdbe46eee24652949

class ProductDetail extends Component {
    render() {
        const id = +this.props.match.params.id
        return (
            <div className="container">
<<<<<<< HEAD
                <div>
                    <h1>{item.title}</h1>
                    <img style={{width: '400px'}} src={item.image} alt=""/>
                    <p>{item.price} $</p>
                </div>
=======
>>>>>>> 630a8d845fbcd1b281c5887cdbe46eee24652949
                {
                    ({data}) => {
                        const item = data.find((item) => item.id === id)
                        return (
                            <div>
                                <h1>{item.title}</h1>
                                <img style={{width: '400px'}} src={item.image} alt=""/>
                                <p>{item.price} $</p>
                            </div>
                        )
                    }
                }
<<<<<<< HEAD
=======

>>>>>>> 630a8d845fbcd1b281c5887cdbe46eee24652949
            </div>
        );
    }
}

export default withRouter(connect(({data}) => ({data}))(ProductDetail));
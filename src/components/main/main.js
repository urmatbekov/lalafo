import React, {Component} from 'react';
import Products from "../products";
import {withRouter} from "react-router-dom";

class Main extends Component {
    render() {
        const searchParams = new URLSearchParams(this.props.location.search);
        const page = +searchParams.get("page") || 1
        return (
            <main>
                <h1 className="text-center">Lalafo</h1>
                <Products page={page}/>
            </main>
        );
    }
}

export default withRouter(Main);
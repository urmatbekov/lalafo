import React, {Component} from 'react';
import Products from "../products";

class Main extends Component {
    render() {
        return (
            <main>
                <h1 className="text-center">Lalafo</h1>
                <Products/>
            </main>
        );
    }
}

export default Main;
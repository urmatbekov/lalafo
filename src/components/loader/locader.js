import React, {Component} from 'react';
import './locader.css';

class Locader extends Component {
    render() {
        return (
            <div className="lds-spinner">
                <div/>
                <div/>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        );
    }
}

export default Locader;
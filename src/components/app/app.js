import React, {Component} from 'react';
import Header from "../header";
import Main from "../main";

class App extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <Header/>
                    <Main/>
                </div>
            </div>
        );
    }
}

export default App;
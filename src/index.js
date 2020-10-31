import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from "./components/app";
import DataContainer from "./components/data-container/data-container";

ReactDOM.render(
    <DataContainer>
    <App/>
    </DataContainer>,
    document.getElementById('root')
);

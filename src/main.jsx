import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles.css';
import { CounterApp } from './CounterApp';
import { FirstApp } from './FirstApp';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <FirstApp title="Hola, Soy Vegeta"/>  */}
        <CounterApp value={ 10 } />
    </React.StrictMode>

)
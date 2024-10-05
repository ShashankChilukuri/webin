import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 
function App() {
    return (
        <Router>
            <div>
                <Main />
            </div>
        </Router>
    );
}

export default App;

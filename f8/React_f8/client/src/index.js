import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Fake comments
function emitComment(id) {
    setInterval(() => {
        window.dispatchEvent(
            new CustomEvent(`group-${id}`, {
                detail: `Nội dung của group ${id}`,
            })
        );
    }, 2000);
}

emitComment(1);
emitComment(2);
emitComment(3);

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

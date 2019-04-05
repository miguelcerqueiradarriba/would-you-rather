import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import {compose, createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'
import BrowserRouter from "react-router-dom/es/BrowserRouter";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(middleware));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
document.getElementById('root')
)
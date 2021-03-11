import React , {Component} from 'react'
import ReactDom from 'react-dom'
import './style/stylesheet.css'
import {BrowserRouter} from 'react-router-dom'
import rootReducer from './redux/reducer'
import {createStore , applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import App from './Component/App'
import thunk from 'redux-thunk'
import {database} from './database/config'

const store = createStore(rootReducer,applyMiddleware(thunk))
// const store = createStore(rootReducer,applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
ReactDom.render(<Provider store = {store}><BrowserRouter><App/></BrowserRouter></Provider>,document.getElementById('root'));

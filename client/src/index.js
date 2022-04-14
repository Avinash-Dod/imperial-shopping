import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './redux/reducers/index'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom'

const store = createStore(rootReducer)
store.subscribe(() => {
  console.log('current state', store.getState())
})
store.dispatch({
  type: 'ADD_TO_CART',
  data: { id: 1, pName: 'DSLR' }
})

ReactDOM.render(
  <React.StrictMode>
    <Router><Provider store={store}><App /></Provider></Router>
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

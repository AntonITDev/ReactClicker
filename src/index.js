import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux'
import { Provider } from 'react-redux';


const defaultState = {
  cash: 0,
  shopClosed: false,
  statisticClosed: false,
  click: 1,
  notificationShop: false,
  upgradeClickCost: 20
}

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case "ADD_CASH":
      return {...state, cash: state.cash + action.payload}
    case "GET_CASH":
      return {...state, cash: state.cash - action.payload}
    case "OPEN_SHOP":
      return {...state, shopClosed: action.payload}
    case "OPEN_STATISTIC":
      return {...state, statisticClosed: action.payload}
    case "SET_CLICK":
      return {...state, click: state.click + action.payload}
    case "SET_UPGRADE_CLICK_COST":
      return {...state, upgradeClickCost: action.payload}
    case "SHOW_SHOP_NOTIFICATION":
      return {...state, notificationShop: action.payload}
    default:
      return state
  }
}
const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

reportWebVitals();

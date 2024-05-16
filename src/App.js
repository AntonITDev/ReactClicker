import {React, useState} from 'react';


//Components
import Icon from './components/Icon';
import Coin from './components/Coin';
import Button from './components/Button/Button';
import Badge from '@mui/material/Badge';
import WindowShop from './components/Window/WindowShop';

//styles
import './styles/App.css';

//Icons
import LocalMallIcon from '@mui/icons-material/LocalMall';
import EqualizerIcon from '@mui/icons-material/Equalizer';

import iconSettings from './assets/images/icons/icon-settings.svg'
import coinImage from './assets/images/coin.png'
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch()
  
  const cash = useSelector(state => state.cash)
  const click = useSelector(state => state.click)
  const upgradeClickCost = useSelector(state => state.upgradeClickCost)

  const shopClosed = useSelector(state => state.shopClosed)
  const statisticClosed = useSelector(state => state.statisticClosed)

  const notificationShop = useSelector(state => state.notificationShop)

  function checkUpgrade() {
    if (cash >= upgradeClickCost) {
      dispatch({type: 'SHOW_SHOP_NOTIFICATION', payload: true})
    } else {
      dispatch({type: 'SHOW_SHOP_NOTIFICATION', payload: false})
    }
  }

  function addCash() {
    checkUpgrade()

    dispatch({type: 'ADD_CASH', payload: click})
  }

  function openShop() {
    dispatch({type: 'OPEN_SHOP', payload: !shopClosed})
  }

  function openStatistic() {
    dispatch({type: 'OPEN_STATISTIC', payload: !shopClosed})
  }

  function openSettings() {

  }

  return (
    <div className="App">
      <header className="header">
        <div className="header__container container">
          <p className="cash">{cash}</p>
          <Icon classes={['icon', 'icon-settings']} icon={iconSettings} alt={'setting'}/>
        </div>
      </header>
      <main className="main">
        <Coin image={coinImage} onClick={addCash} click={click} cash={cash}/>
        <WindowShop dispatch={dispatch} checkUpgrade={checkUpgrade}/>
      </main>
      <footer className="footer">
          <Button icon={
              <EqualizerIcon fontSize='large'/>
            } text={'statistic'}/>
          
          <Button onClick={openShop} icon={
              <Badge color="primary" variant="dot" invisible={!notificationShop} >
                <LocalMallIcon fontSize='large'/>
              </Badge>
            }
            text={'shop'}/>
      </footer>
    </div>
  );
}

export default App;

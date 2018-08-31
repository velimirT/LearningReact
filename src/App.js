import React, { Component } from 'react';
import logo from './logo.svg';
import styled, {keyframes} from 'styled-components';
import Places from './components/Places';
import FlowersList from './components/FlowersList';
import Flower from './components/Flower';
import Undo from './components/Undo';
import {resetPlace, resetFlower} from './store/Actions';
const AppWrap = styled.div`
  text-align:center;
`;

const AppHeader = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

const AppTitle = styled.h1`
  font-size: 1.5em;
`;

const AppLogoSpin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const AppLogo = styled.img`
  animation: ${AppLogoSpin} infinite 5s linear;
  height: 80px;
`;


const MainWrap = styled.main`
  position: relative;
`;

const FlowerOpen = styled.section`
svg{
  color: #23829c;
}
`;

const FlowersListWrap = styled.section`
svg{
  color: #23829c;
  opacity: 0.8;
}
`


class App extends Component {
  render() {
    const {store} = this.props;
    
    return (
      <AppWrap>
        <AppHeader>
          <AppLogo src={logo} alt="logo" />
          <AppTitle className="App-title">Welcome to React My Manz!</AppTitle>
        </AppHeader>
        <MainWrap>
          {
            store.getState().chosen_place === null ? 
                 <Places store = {store} />
                  : 
                    store.getState().chosen_flower === null ?
                      <FlowersListWrap>
                        <FlowersList place = {store.getState().places[store.getState().chosen_place]} store = {store}/>
                        <Undo onClickHandler = {() => {store.dispatch(resetPlace())}}/>
                      </FlowersListWrap>
                        :
                          <FlowerOpen>
                            <Undo onClickHandler = {() => {store.dispatch(resetFlower())}} />
                            <Flower flower = {store.getState().places[store.getState().chosen_place].flowers[store.getState().chosen_flower]} store = {store}/>
                          </FlowerOpen> 
          }
        </MainWrap>
      </AppWrap>
    );
  }
}

export default App;

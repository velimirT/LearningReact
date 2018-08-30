import React, { Component } from 'react';
import logo from './logo.svg';
import styled, {keyframes} from 'styled-components';
import Places from './components/Places';
import FlowersList from './components/FlowersList';
import Flower from './components/Flower';
import Undo from './components/Undo';

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


class App extends Component {
  render() {
    const {store} = this.props;

    const onClickResetPlace = () => {
      store.dispatch({type: "RESET_PLACE"});
    }

    const onClickResetFlower = () => {
      store.dispatch({type: "RESET_FLOWER"});
    }
    
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
                      <section>
                        <FlowersList place = {store.getState().places[store.getState().chosen_place]} store = {store}/>
                        <Undo onClickHandler = {onClickResetPlace.bind(null)}/>
                      </section>
                        :
                          <FlowerOpen>
                            <Undo onClickHandler = {onClickResetFlower.bind(null)} />
                            <Flower flower = {store.getState().places[store.getState().chosen_place].flowers[store.getState().chosen_flower]}/>
                          </FlowerOpen> 
          }
        </MainWrap>
      </AppWrap>
    );
  }
}

export default App;

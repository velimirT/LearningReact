import React, { Component } from 'react';
import logo from './logo.svg';
import styled, {keyframes} from 'styled-components';
import Places from './components/Places';
import FlowersList from './components/FlowersList';
import Flower from './components/Flower';
import Undo from './components/Undo';
import {resetPlace, resetFlower} from './store/Actions';
import PropTypes from 'prop-types';
import { PlacesWrap, FlowersListWrap, FlowerWrap, SideNavWrap } from './components/Containers'

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
  margin: 20px 0;
`;

class App extends Component {
  render() {
    return (
      <AppWrap>
        <AppHeader>
          <AppLogo src={logo} alt="logo" />
          <AppTitle className="App-title">Welcome to React My Manz!</AppTitle>
        </AppHeader>
        <MainWrap>
          <PlacesWrap/>
          <FlowersListWrap/>
          <FlowerWrap/>
          <SideNavWrap/>
        </MainWrap>
      </AppWrap>
    );
  }
}

export default App;

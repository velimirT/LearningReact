import React from 'react';
import FlowerImage from './img/flower-icon.png';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { chooseFlower } from '../store/Actions';

const FlowerEl = styled.div`
  position: relative;
  display: inline-block;
  margin-top: 40px;
 `;

 const FlowerThumbEl = styled.img`
  width: 50%;
  margin: 0 auto;
  cursor: pointer;
`;


export default function FlowerThumb ({
    flower,
    store,
    index,
}){

  return (
      <FlowerEl>
          <FlowerThumbEl src = {FlowerImage} alt = {flower.name} onClick = {() => {store.dispatch(chooseFlower(index))}}/>
          <h2>{flower.name}</h2>
      </FlowerEl>
  )
};

FlowerThumb.propTypes = {
  flower: propTypes.object,
  index: propTypes.number,
}
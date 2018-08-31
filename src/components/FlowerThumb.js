import React from 'react';
import FlowerImage from './img/flower-icon.png';
import styled from 'styled-components';
import propTypes from 'prop-types';

const FlowerEl = styled.div`
  position: relative;
  display: inline-block;
 `;

 const FlowerThumbEl = styled.img`
  width: 50%;
  margin: 0 auto;
`;


export default function FlowerThumb ({
    flower,
    store,
    index,
}){
  
  const onClickFlower = (flower) => {
    store.dispatch({type:'CHOOSE_FLOWER', id:flower});
  }

  return (
      <FlowerEl>
          <FlowerThumbEl src = {FlowerImage} alt = {flower.name} onClick = {onClickFlower.bind(null, index)}/>
          <h2>{flower.name}</h2>
      </FlowerEl>
  )
};

FlowerThumb.propTypes = {
  flower: propTypes.object,
  onClickFlower: propTypes.func,
  index: propTypes.number,
}
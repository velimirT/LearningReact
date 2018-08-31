import React from 'react';
import FlowerThumb from './FlowerThumb.js';
import propTypes from 'prop-types';
import styled from 'styled-components';
import Undo from './Undo';
const FlowersListWrap = styled.section`
svg{
  color: #23829c;
  opacity: 0.8;
}
`
export default function FlowersList ({
    place,
    onClickFlower,
    onClickUndo
}){
    return (
        <FlowersListWrap className = "flowersList">
            {
              place == null ? null :
                place.flowers ?
                  Object.keys(place.flowers).map( i => {
                    return <FlowerThumb flower = {place.flowers[i]} key = {i} onClickFlower = {onClickFlower} index = {parseInt(i, 10)}/>;
                  })
                  : 
                  'No Flowers for this place'
            }

            {
              place == null ? null :
                <Undo onClickHandler = {onClickUndo}/>
            }
        </FlowersListWrap>
    );
}

FlowersList.propTypes = {
    place: propTypes.object,
    onClickFlower: propTypes.func,
    onClickUndo: propTypes.func
}
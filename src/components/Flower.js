import React from 'react';
import FlowerImage from './img/flower-icon.png';
import Light from './Light.js';
import Humidity from './Humidity.js';
// import WaterLevel from './WaterLevel.js';
import styled from 'styled-components';
import propTypes from 'prop-types';
import Undo from './Undo';

const FlowerEl = styled.div`
  position: relative;
  width: 25%;
  display: inline-block;
  margin-top: 40px;
  ul{
      text-align: left;
      list-style-type: none;
  }
  ul li{
      height: auto;
      line-height: 30px;
      font-size: 21px;
      text-align: left;
      white-space: nowrap;
      width: 33%;
      display: inline-block;
      text-align: center;
  }
  ul li p{
    margin: 5px 0;
  }
`;

const Wrap = styled.section`
  svg{
    color: #23829c;
  }

`;

export default function Flower({
    flower,
    light,
    humidity,
    onClickUndo
}){
    return (
      <div>
        {
            flower !== null ?
            <Wrap>
              <FlowerEl>
                <img src = {FlowerImage} alt = {flower.name}/>
                <h2>{flower.name}</h2>
                <ul>
                    <li><Light light = {parseFloat(light, 10)}/></li>
                    <li><Humidity humidity = {parseInt(humidity, 10)}/></li>
                </ul>
              </FlowerEl>
              <Undo onClickHandler = {onClickUndo}/>
            </Wrap>
               : null
        }
      </div>
      
    );
}

Flower.propTypes = {
    flower: propTypes.object,
    onClickUndo: propTypes.func
}

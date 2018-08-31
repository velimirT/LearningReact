import React from 'react';
import FlowerImage from './img/flower-icon.png';
import Light from './Light.js';
import Humidity from './Humidity.js';
// import WaterLevel from './WaterLevel.js';
import styled from 'styled-components';
import propTypes from 'prop-types';


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

export default function Flower({
    flower,
    store,
}){
    return (
        <FlowerEl>
            <img src = {FlowerImage} alt = {flower.name} index = {parseInt(flower.ID, 10)} store = {store}/>
            <h2>{flower.name}</h2>
            <ul>
                <li><Light light = {parseInt(flower.light, 10)}/></li>
                <li><Humidity humidity = {parseInt(flower.humidity, 10)}/></li>
            </ul>
        </FlowerEl>
    );
}

Flower.propTypes = {
    flower: propTypes.object,
    onClickFlower: propTypes.func
}
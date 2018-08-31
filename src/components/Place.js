import React from 'react';
import { FontAwesomeIcon } from '../third_party_modules/@fortawesome/react-fontawesome';
import { faHome, faBuilding } from '../third_party_modules/@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import propTypes from 'prop-types';

const PlaceEl = styled.section`
    width: calc(50% - 40px);
    display: inline-block;
    vertical-align: top;
    margin: 20px;
    box-sizing: border-box;
    padding: 20px;
    border: 1px solid #444;
    border-radius: 15px;
    cursor: pointer;
    background-color: #fff;
    svg{
        width: auto !important;
        height: 150px !important;
        color: #61DAFB;
    }
`;

export default function Place({
    place,
    index,
    onClickPlace
}){

    return(
        <PlaceEl className = "place" onClick = {onClickPlace.bind(null, index)}>
            {place.type === 'home' ? <FontAwesomeIcon icon={faHome} className = 'fontawesome_icon'/> : 
                place.type === 'work' ?  <FontAwesomeIcon icon={faBuilding} className = 'fontawesome_icon'/> : null}
            <h2>{place.name}</h2>
        </PlaceEl>
    )
}

Place.propTypes = {
    place: propTypes.object,
    index: propTypes.number,
    onClickPlace: propTypes.func,
}

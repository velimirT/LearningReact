import React from 'react';
import Place from './Place.js';
import styled from 'styled-components';
import propTypes from 'prop-types';

const PlacesEl = styled.section`
    width: 100%;
    max-width: 1000px;
    border: 1px solid #444;
    border-radius: 15px;
    margin: 20px auto;
    overflow: hidden;
    background-color: #414141;
`;

export default function Places({
	store
}) {
	return (
		<PlacesEl className = "places">
			{Object.keys(store.getState().places).map( i => {
				return <Place place = {store.getState().places[i]} key = {i} store = {store} index = {parseInt(i, 10)}/>;
			})}
		</PlacesEl>
	)
};

Places.propTypes = {
	places: propTypes.array,
	onClickPlace: propTypes.func
}
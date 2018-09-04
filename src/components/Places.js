import React from 'react';
import Place from './Place.js';
import styled from 'styled-components';
import propTypes from 'prop-types';

const PlacesEl = styled.section`
    width: 100%;
    max-width: 1000px;
    border: 1px solid #444;
    border-radius: 15px;
    margin: 0px auto;
    overflow: hidden;
    background-color: #414141;
`;

export default function Places({
	chosen_place=null, 
	places=[], 
	onClickPlace=f=>f
}) {
	return (
		<div>
		{chosen_place !== null ? null :
			<PlacesEl className = "places">
					{ 
					Object.keys(places).map( i => {
						return <Place place = {places[i]} key = {i} index = {parseInt(i, 10)} onClickPlace={onClickPlace}/>;
					})}
			</PlacesEl>
		}
		</div>
	)
};

Places.propTypes = {
	places: propTypes.array,
	onClickPlace: propTypes.func
}
import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const SideNavEl = styled.aside`
    width: 100px;
    margin: 0px;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    border: 1px solid #414141;
    ul{
    	padding:0;
    	margin: 0;
    }
    li{
    	list-style-type: none;
    	cursor: pointer;
    	min-height: 60px;
    	width: 100px;
    	background-color: #fff;
    	color: #414141;
    	padding-top: 40px;
    	font-size: 20px;
    	text-transform: uppercase;
    }
    li.active{
    	background-color: #ccc;
    }
`;

export default function SideNav({
	chosen_place=null, 
	places=[], 
	onClickHome=f=>f,
	onClickPlace=f=>f
}) {
	return (
		<SideNavEl>
			<ul>
				<li onClick={onClickHome} className = {chosen_place === null ? "active" : null}>Home</li>
				{ 
				Object.keys(places).map( i => {
					if(i == chosen_place) 
					return <li key = {i} onClick={onClickPlace.bind(null, i)} className="active">{places[i].name}</li>;
					else
						return <li key = {i} onClick={onClickPlace.bind(null, i)}>{places[i].name}</li>;
				})}
			</ul>
		</SideNavEl>
	)
};

SideNav.propTypes = {
	places: propTypes.array,
	chosen_place: propTypes.string,
	onClickPlace: propTypes.func,
	onClickHome: propTypes.func,
}
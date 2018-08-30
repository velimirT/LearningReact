import React from 'react';
import { FontAwesomeIcon } from '../third_party_modules/@fortawesome/react-fontawesome';
import { faTint } from '../third_party_modules/@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import propTypes from 'prop-types';

const IconWrap = styled.div`
	width: 50px;
	display: inline-block;
	svg{
	  width: auto !important;
	  height: 50px !important;
	}
`;

export default function WaterLevel ({
	waterLevel,
}) {
	return (
		<div>
			<IconWrap>
				<FontAwesomeIcon icon={faTint} className="fontawesome_icon_small" style = {{color:'#61DAFB'}}/>
			</IconWrap>
			<p>Water Level: {0}</p>
		</div>
	);
}

WaterLevel.propTypes = {
	waterLevel: propTypes.number
}
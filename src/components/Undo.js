import React from 'react';
import { FontAwesomeIcon } from '../third_party_modules/@fortawesome/react-fontawesome';
import { faChevronCircleLeft } from '../third_party_modules/@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import propTypes from 'prop-types';

const UndoEl = styled.div`
	display: inline-block;
	position: absolute;
	top: 10px;
	right: 10px;
	width: 50px;
	height: 50px;
	cursor: pointer;
	svg{
		width:100% !important;
		height: 100%;
	}
`;

export default function Undo({
	onClickHandler,
}) {
	return (
		<UndoEl>
			<FontAwesomeIcon icon={faChevronCircleLeft} onClick = {onClickHandler} className="fontawesome_icon_undo" />
		</UndoEl>
	)
}

Undo.propTypes = {
	onClickHandler: propTypes.func,
}
import React from 'react';
import { FontAwesomeIcon } from '../third_party_modules/@fortawesome/react-fontawesome';
import { faSun } from '../third_party_modules/@fortawesome/free-solid-svg-icons';
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

export default function Light({
    light,
}) {
    return (
        <div>
            <IconWrap>
                <FontAwesomeIcon icon={faSun} className="fontawesome_icon_small" style = {{color:'rgba(247, 81, 33)'}}/>
            </IconWrap>
            <p>Light: {light}</p>
        </div>
    );
};

Light.propTypes = {
    light: propTypes.number
}
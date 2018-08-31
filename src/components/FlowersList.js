import React from 'react';
import FlowerThumb from './FlowerThumb.js';
import propTypes from 'prop-types';

export default function FlowersList ({
    place,
    store,
}){
    return (
        <section className = "flowersList">
            {
                place.flowers ?
                  Object.keys(place.flowers).map( i => {
                    return <FlowerThumb flower = {place.flowers[i]} key = {i} store = {store} index = {parseInt(i, 10)}/>;
                  })
                  : 
                  'No Flowers for this place'
            }
        </section>
    );
}

FlowersList.propTypes = {
    place: propTypes.object.isRequired,
}
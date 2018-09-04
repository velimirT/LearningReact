import C from './Constants';
import fetch from 'isomorphic-fetch';

export const choosePlace = (id) => 
	({
		type: C.CHOOSE_PLACE,
		id
	})

export const getFlower = (id) => {
  return function(dispatch, getState) {
    return fetch('http://vem-web.com/Ard/seonsor/func.php?act=readCSS118Graph')
    .then(response => response.json())
      .then(json => {
	      	console.log(json);
	      	dispatch(chooseFlower(id, json))
      	}
      )
    }
  }


export const chooseFlower = (id, json) => 
	({
		type: C.CHOOSE_FLOWER,
		id,
		json
	})

export const resetPlace = (id) => 
	({
		type: C.RESET_PLACE,
	})

export const resetFlower = (id) => 
	({
		type: C.RESET_FLOWER,
	})
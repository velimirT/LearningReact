import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Places from './Places';
import FlowersList from './FlowersList';
import Flower from './Flower';
import { choosePlace, chooseFlower, resetPlace, resetFlower } from '../store/Actions';

export const PlacesWrap = connect(
	store => 
		({
			places: store.places,
			chosen_place: store.chosen_place
		}),
	dispatch => 
		({
			onClickPlace(id){
				dispatch(choosePlace(id))
				dispatch(resetFlower());
			}
		})
)(Places);

export const FlowersListWrap = connect(
	store => 
		({
			place: store.chosen_place !== null && store.chosen_flower === null ? store.places[store.chosen_place] : null,
		}),
	dispatch => 
		({
			onClickFlower(id){
				dispatch(chooseFlower(id))
			},
			onClickUndo(){
				dispatch(resetPlace())
			}
		})
)(FlowersList);

export const FlowerWrap = connect(
	store =>
		({
			flower: (store.chosen_flower !== null && store.chosen_place !== null && typeof store.places[store.chosen_place].flowers !== 'undefined') ? store.places[store.chosen_place].flowers[store.chosen_flower] : null,
		}),
	dispatch =>
		({
			onClickUndo(){
				dispatch(resetFlower());
			}
		})
)(Flower);
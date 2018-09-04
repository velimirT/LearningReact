import C from './Constants';

export const MainReducer = (state = {}, action) => {
	switch (action.type){
		case C.CHOOSE_PLACE:
			return (
				{
					...state, 
					chosen_place: action.id
				}
			)
		case C.CHOOSE_FLOWER:
			return (
				{
					...state, 
					chosen_flower: action.id,
					chosen_flower_light: action.json[0].temp,
					chosen_flower_humidity: action.json[0].voc
				}
			)
		case C.RESET_PLACE:
			return (
				{
					...state, 
					chosen_place: null
				}
			)
		case C.RESET_FLOWER:
			return (
				{
					...state, 
					chosen_flower: null
				}
			)
		default: 
			return state;
	}
}
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
					chosen_flower: action.id
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
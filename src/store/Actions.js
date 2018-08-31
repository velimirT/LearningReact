import C from './Constants'

export const choosePlace = (id) => 
	({
		type: C.CHOOSE_PLACE,
		id
	})

export const chooseFlower = (id) => 
	({
		type: C.CHOOSE_FLOWER,
		id
	})

export const resetPlace = (id) => 
	({
		type: C.RESET_PLACE,
	})

export const resetFlower = (id) => 
	({
		type: C.RESET_FLOWER,
	})
import C from '../../../store/Constants';
import { MainReducer } from '../../../store/Reducers';
import StoreFactory from '../../../store/StoreFactory.js';
import { resetFlower } from '../../../store/Actions';
import deepFreeze from 'deep-freeze';
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};
global.localStorage = localStorageMock;
let store

describe("chooseFlower", () => {
	const initialState = {
	    places:[
	      {
	        "name":"Home NY", 
	        "type":"home", 
	        "flowers":[
	          {
	            "name":"Богемвилия",
	            "light":"100",
	            "humidity":"24",
	          },
	          {
	            "name":"Бонзай",
	            "light":"18",
	            "humidity":"34",
	          }
	        ]
	      },
	      {"name":"Office NY", "type":"work"},
	      {"name":"Home NY", "type":"home"},
	      {
	        "name":"Green Office NY", 
	        "type":"work", 
	        "flowers":[
	          {
	            "name":"Здравец",
	            "light":"50",
	            "humidity":"64",
	          },
	          {
	            "name":"Теменужка",
	            "light":"78",
	            "humidity":"14",
	          }
	        ]
	      },
	    ],
	    chosen_place: 1,
	    chosen_flower: 2,
	    chosen_flower_light: null,
	    chosen_flower_humidity: null,
	  }
	
	beforeAll(() => {
		store = StoreFactory(initialState)
		store.dispatch(resetFlower());
	})

	it("should reset chosen flower", () => {
		expect(store.getState().chosen_flower)
			.toEqual(null)
		expect(store.getState().chosen_place)
			.toEqual(1);
	})
})

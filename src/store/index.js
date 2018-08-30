import { createStore, applyMiddleware } from 'redux'
import { MainReducer } from './Reducers.js';

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
    chosen_place: null,
    chosen_flower: null,
  }

const logger = store => next => action => {
    let result
    console.groupCollapsed("dispatching", action.type)
    console.log('prev state', store.getState())
    console.log('action', action)
    result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()
    return result
}

const saver = store => next => action => {
    let result = next(action)
    localStorage['redux-store'] = JSON.stringify(store.getState())
    return result
}

const storeFactory = (state=initialState) =>
    // createStore(MainReducer, state);
    applyMiddleware(logger, saver)(createStore)(
        MainReducer,
        (localStorage['redux-store']) ?
            JSON.parse(localStorage['redux-store']) :
            state
    )

export default storeFactory
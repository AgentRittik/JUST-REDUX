import { createStore } from 'redux';


/**
 *    CreateStore->expects a reducer
 * 
 *    Reducer -> it is a simple function that takes 2 arguments (atate and actionn ) -> and
 *               return a updated or same state(i.e not updated state)
 * 
 * 
 *     Create Store takes 2 thing 
 *          -> [Reducer Fns]->
 *          -> [Initial State] -> 
 * 
 *    CreateStore return us a Obj->
 *                  {
 *                      subscribe -> 
 *                      dispatch -> 
 *                      getState -> return the current state
 *                      ReplaceReducer -> change the reducer 
 *                  
 *                  }
 */

// basic reducer function for testing


function demoReducer(state , action){
    if(action.type == 'add_item'){
        return [...state , {name : action.itemName}]
    }
    return state;
}

const initialState = [{name : 'apple'} , {name : 'orange'}];

const response = createStore(demoReducer , initialState);
console.log(response); // retuen obj with those 4 functions ->  this returned obj is a state 

console.log(response.getState());
response.dispatch({
    type : 'add_item',
    itemName : 'Banana'
});
console.log(response.getState());
response.dispatch({
    type:'unknown',
    itemName : 'unknownn'
});
console.log(response.getState());
/**
 *  STORE -> a blackbox that has your state of the application and some utility methods to manage it.
 *           
 *  The onlly way to change the state is using DISPATCH only
 */
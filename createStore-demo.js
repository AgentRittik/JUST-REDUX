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
        return [...state , {name : action.itemName , quantity : action.itemQuantity}]
    }
    return state;
}

/// These type of functions are called as action creators
const add_item = (name , quantity) =>({
    type : 'add_item',
    itemName : name,
    itemQuantity : ((quantity)?quantity: 1)
});

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
response.dispatch(add_item('mango'));
console.log(response.getState());
response.dispatch(add_item('cherry',5));
console.log(response.getState());

// If We directly passing the obj in the diapatch function then later there might be a case where we need to store a new 
// property in a store then in that case we have to manually change the obj everywhere . there is a better way
/**
 *  STORE -> a blackbox that has your state of the application and some utility methods to manage it.
 *           
 *  The only way to change the state is using DISPATCH only
 * 
 * 
 * [[ACTION CREATOR FUNCTION]]-> These are the simple functions which returns a object
 * ->if we need updation then we can use them
 */
import {createStore} from 'redux'

const initialState ={
    buy:0
}

const reducer=(state=initialState,action) => {
    console.log('reducer>', action);
    switch(action.type) {
        case 'INCREMENT':
            return{
                ...state,
                buy: state.buy +1
            }
        default:
            return state;
    }
    return state;
}
const store = createStore(reducer);
export default store;
import {INCREMENT} from "./redux/types";

const initialState = {
    buy: 0
}
export const shopReducer = (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT:
            return{
                ...state,
                buy: state.buy +1
            }

        default:
            return state;
    }
}
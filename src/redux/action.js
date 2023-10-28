import {INCREMENT} from "./types";


export function incrementShop(product) {
    return{
        type: INCREMENT,
        payload: product
    }
}

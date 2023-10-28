import {INCREMENT} from "./types";


export function incrementShop(product) {
    console.log(product)
    return{
        type: INCREMENT,
        payload: product
    }
}

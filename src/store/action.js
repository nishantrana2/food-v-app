
export const FETCH_PRODUCTS_PENDING = 'FETCH_PRODUCTS_PENDING';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';



export const FETCH_CLIENT_PENDING = "FETCH_CLIENT_PENDING";
export const FETCH_CLIENT_SUCCESS = "FETCH_CLIENT_SUCCESS";
export const FETCH_CLIENT_ERROR = "FETCH_CLIENT_ERROR";



export const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART"

export const CLEAR_CART = "CLEAR_CART"


export function fetchProductsPending() {
    return {
        type: FETCH_PRODUCTS_PENDING
    }
}

export function fetchProductsSuccess(products) {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        products: products
    }
}

export function fetchProductsError(error) {
    return {
        type: FETCH_CLIENT_ERROR,
        error: error
    }
}

export function fetchClientsPending() {
    return {
        type: FETCH_CLIENT_PENDING
    }
}

export function fetchClientsSuccess(clients) {
    return {
        type: FETCH_CLIENT_SUCCESS,
        clients
    }
}

export function fetchClientsError(error) {
    return {
        type: FETCH_CLIENT_ERROR,
        error: error
    }
}


export const addItemToCart = (product) => {
    return {
        type: ADD_ITEM_TO_CART,
        product
    }
};
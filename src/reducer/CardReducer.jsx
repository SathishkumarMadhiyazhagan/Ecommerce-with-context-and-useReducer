export const CardReducer = (state, action) => {
    const {type, payload} = action;

    switch(type) {
        case 'ADD_TO_CART':
            const add = payload.products;
            return {...state, cartList: add}
        case 'REMOVE_TO_CART':
            const remove = payload.products;
            return {...state, cartList: remove}
        case 'UPDATE_CART_TOTAL':
            return {...state, total: payload.total}
        default:
            throw new Error("No Case Found In cartReducer");
    }
}

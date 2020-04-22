// export const increaseCountProduct = id => ({
//     type: 'INCREASE_COUNT_PRODUCT',
//     payload: id,
// });

// export const decreaseCountProduct = id => ({
//     type: 'DECREASE_COUNT_PRODUCT',
//     payload: id,
// });

export const addToCart = obj => ({
    type: 'ADD_TO_CART',
    payload: obj,
});
export const deleteFromCart = obj => ({
    type: 'DELETE_F',
    payload: obj,
});

export const removeFromCart = id => ({
    type: 'REMOVE_FROM_CART',
    payload: id,
});
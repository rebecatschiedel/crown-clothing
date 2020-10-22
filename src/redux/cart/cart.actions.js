import { typesOfActions } from "./cart.typesOfActions";

export const toggleCartHidden = () => ({
    type: typesOfActions.TOGGLE_CART_HIDDEN
});

export const addItem = (item) => ({
    type: typesOfActions.ADD_ITEM,
    payload: item
}); 

export const removeItem = (item) => ({
    type: typesOfActions.REMOVE_ITEM,
    payload: item
});

export const clearItemFromCart = (item) => ({
    type: typesOfActions.CLEAR_ITEM_FROM_CART,
    payload: item
});
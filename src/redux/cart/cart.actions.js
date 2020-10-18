import { typesOfActions } from "./cart.typesOfActions";

export const toggleCartHidden = () => ({
    type: typesOfActions.TOGGLE_CART_HIDDEN
});

export const addItem = (item) => ({
    type: typesOfActions.ADD_ITEM,
    payload: item
}); 
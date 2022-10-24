const INITIAL_STATE = {
  hidden: false,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_CART_HIDDEN":
      return {
        ...state,
        hidden: !state.hidden,
      };
    case "ADD_ITEM":
      return { ...state, cartItems: addItem(state.cartItems, action.payload) };
    case "REMOVE_ITEM":
      return {
        ...state,
        cartItems: removeItem(state.cartItems, action.payload),
      };
    case "CLEAR_ITEM":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          item => item.id !== action.payload.id
        ),
      };
    case "EMPTY_CART":
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};

export default cartReducer;

export const addItem = (cartItems, itemToAdd) => {
  const exists = cartItems.find(item => item.id === itemToAdd.id);

  if (exists) {
    return cartItems.map(item =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const removeItem = (cartItems, itemToRemove) => {
  if (itemToRemove.quantity === 1) {
    return cartItems.filter(item => item.id !== itemToRemove.id);
  }

  return cartItems.map(item =>
    item.id === itemToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};

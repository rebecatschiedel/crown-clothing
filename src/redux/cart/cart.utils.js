export const addItemToCart = (cartItems, cartItemToAdd) => {
    let newItem = true;

    const updatedCart = cartItems.map(cartItem => {
        if (cartItem.id === cartItemToAdd.id) {
            newItem = false;
            return {...cartItem, quantity: cartItem.quantity + 1} 
        } else {
            return cartItem;
        }
    });

    return newItem ? [...cartItems, {...cartItemToAdd, quantity: 1}] : updatedCart;    
}

// export const addItemToCart = (cartItems, cartItemToAdd) => {
//     const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

//     if (existingCartItem) {
//         return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem);
//     } 

//     return [...cartItems, {...cartItemToAdd, quantity: 1}];
// }


export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    if(cartItemToRemove.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }
    
    return cartItems.map(cartItem => 
        cartItem.id === cartItemToRemove.id ?
        {...cartItem, quantity: cartItem.quantity - 1} 
        :
        cartItem
        );
}

// export const removeItemFromCart = (cartItems, cartItemToRemove) => {
//     const index = cartItems.indexOf(cartItemToRemove)
//     cartItems.splice(index,1);
//     return [...cartItems]; 
// }
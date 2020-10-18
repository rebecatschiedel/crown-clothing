export const addItemToCart = (cartItems, cartItemToAdd) => {
    let flag = false;

    const array = cartItems.map(cartItem => {
        if(cartItem.id === cartItemToAdd.id) {
            flag = true;
            return {...cartItem, quantity: cartItem.quantity + 1} 
        } else {
            return cartItem;
        }
    });

    return flag ? array : [...cartItems, {...cartItemToAdd, quantity: 1}];    
}

// export const addItemToCart = (cartItems, cartItemToAdd) => {
//     const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

//     if (existingCartItem) {
//         return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem);
//     } 

//     return [...cartItems, {...cartItemToAdd, quantity: 1}];
// }
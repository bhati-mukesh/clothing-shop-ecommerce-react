export const addItemToCart = (cartItems, cartItemToAdd)=>{
    
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );
    if(existingCartItem){
        return cartItems.map(cartItem => 
               cartItem.id === cartItemToAdd.id
               ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem 
            )
    }
    console.log("quantity",cartItemToAdd.quantity)
    console.log("item",cartItemToAdd)
    console.log("all items",cartItems)

    return [...cartItems, {...cartItemToAdd, quantity: 1}]
}
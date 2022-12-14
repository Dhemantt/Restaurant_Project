import { useReducer } from "react";
import CartContext from "./cart-context";

const defualtCartState = () => {
    return {
        items: [],
        totalAmount: 0
    }
}

const cartReducer = (state, action) => {
    if (state === 'ADD') {
        {
            const updatedItems = state.items.concat(action.item);
            const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount

            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount
            }
        }
    }
    return defualtCartState;
};

const CartProvider = props => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defualtCartState)

    const addItemToCartHandler = (item) => {
        dispatchCartAction({
            type: 'ADD',
            item: item
        })
    }

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({
            type: 'REMOVE',
            id: id
        })
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider
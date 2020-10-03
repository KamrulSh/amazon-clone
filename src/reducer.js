export const initialState = {
    basket: [],
    user: null
}

// selector for adding the item price
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item]
            }

        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];
            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(`Can't remove product (id ${action.id}) as it is not in the basket.`);
            }
            return {
                ...state,
                basket: newBasket
            }
        // it will remove all items having same id
        // return {
        //     ...state,
        //     basket: state.basket.filter(item => item.id !== action.id)
        // }

        case "SET_USER":
            return {
                ...state,
                user: action.user
            }

        default:
            return state;
    }
};

export default reducer;
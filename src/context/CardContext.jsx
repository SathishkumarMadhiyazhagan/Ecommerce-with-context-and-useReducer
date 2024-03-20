import { createContext, useContext, useReducer } from "react"
import { CardReducer } from "../reducer/CardReducer";

const initalValue = {
    cartList: [],
    total: 0
}

const cardContext = createContext(initalValue);

export const CardProvider = ({children}) => {
    const [state, dispatch] = useReducer(CardReducer, initalValue);

    const addCart = (product) => {
        const updateCartList = state.cartList.concat(product)
        updateTotal(updateCartList);

        dispatch({
            type: "ADD_TO_CART",
            payload: {
                products: updateCartList,
            }
        })
    }

    const removeCart = (product) => {
        const updateCartList = state.cartList.filter(iteam => iteam.id !== product.id);
        updateTotal(updateCartList);

        dispatch({
            type: "REMOVE_TO_CART",
            payload: {
                products: updateCartList,
            }
        })
    }

    const updateTotal = (products) => {
        let total = 0; 
        products.forEach(element => {
            total = total + element.price;
        });
        dispatch({
            type: "UPDATE_CART_TOTAL",
            payload: {
                total
            }
        })
    }

    const value = {
        cartList: state.cartList,
        total: state.total,
        addCart,
        removeCart,
    };

    return (
        <cardContext.Provider value={value}>
            {children}
        </cardContext.Provider>
    )
}

export const useCard = () => {
    return useContext(cardContext);
}
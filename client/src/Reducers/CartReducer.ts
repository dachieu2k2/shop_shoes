import { CartActionKind, CartStateType, CartType } from "../Models/CartModel"

export type CartAction = {
    type: CartActionKind;
    payload: any
}


export const cartReducer = (state: CartStateType, action: CartAction) => {
    const { payload, type } = action
    console.log(payload);


    switch (type) {
        case CartActionKind.SET_PRODUCT: {

            return { ...state, isLoading: false, data: payload }
        }
        case CartActionKind.ADD_PRODUCT: {
            let check = 0;

            const data = state.data.map((value) => {
                if (value.product._id === payload._id && value.size === payload.size[0]) {
                    check = 1;
                    return { ...value, amount: value.amount + 1 }
                }
                return value
            })
            console.log(check);


            if (check) {
                return {
                    ...state,
                    data,
                }
            }

            return {
                ...state,
                data: [...state.data, { size: payload.size[0], amount: 1, product: payload }],
            }

        }

        case CartActionKind.UPDATE_PRODUCT: {

            return { ...state, isLoading: false }
        }
        case CartActionKind.DELETE_PRODUCT: {

            return { ...state, isLoading: false }
        }

        default:
            return state;
    }

}
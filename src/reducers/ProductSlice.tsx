import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Product {
    id: number;
    createdAt: Date;
    stock: number;
    title: number;
    description: string;
    discount: number;
}

export interface ProductState {
    products: Product[];
}

export const initialState: ProductState = {
    products: [],
};
export const ProductSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setProduct: (state, action) => {
            return {
                products: [...action.payload.data],
            };
        },
        addProductReducer: (
            state,
            action: PayloadAction<Product>
        ): ProductState => {
            return {
                products: [...state.products, action.payload],
            };
        },
    },
});

export default ProductSlice.reducer;
export const { setProduct, addProductReducer } = ProductSlice.actions;

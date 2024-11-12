// src/store/slices/goodsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GoodsState {
    goodsData: any;
}

const initialState: GoodsState = {
    goodsData: null,
};

const goodsSlice = createSlice({
    name: 'goods',
    initialState,
    reducers: {
        setGoodsData(state, action: PayloadAction<any>) {
            state.goodsData = action.payload;
        },
    },
});

export const { setGoodsData } = goodsSlice.actions;
export default goodsSlice.reducer;
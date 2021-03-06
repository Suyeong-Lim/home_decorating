import { configureStore, createSlice } from "@reduxjs/toolkit";

// const [data, setData] = useState({
//   id: 0,
//   imageUrl: "",
//   productList: [],
// });

//slice 만들기
const productSlice = createSlice({
  name: "productReducer",
  initialState: { productInfo: { id: "", imageUrl: "", productList: [] } },
  reducers: {
    product(state, action) {
      state.productInfo = action.payload;
    },
  },
});

//data 넣는 createStore 상위버전.
const store = configureStore({
  reducer: productSlice.reducer,
});

export const productActions = productSlice.actions;
export default store;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"; // Ubah import

const initialState = {
  items: [],
  status: null,
  error: null
}

export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async (id = null, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhosDt:5000/products"); // Tambahkan await dan simpan response ke dalam sebuah variable
      return response?.data; // Kembalikan data yang diambil dari API
    }catch(error){
      return rejectWithValue("INI ERROR CUK");
    }
    
  }
)

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [productsFetch.pending]: (state, action) => {
      //immer
      state.status = "pending";
    },
    [productsFetch.fulfilled]: (state, action) => {
      //immer
      state.status = "success";
      state.items = action.payload;
    },
    [productsFetch.rejected]: (state, action) => {
      //immer
      state.status = "rejected";
      state.error = action.payload;
    }
  }
});

export default productsSlice.reducer;

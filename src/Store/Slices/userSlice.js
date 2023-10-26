import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUsers } from "../Actions/userAction";

// Define the initial state
const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

// Create the user slice
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    deleteUser(state, action) {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;

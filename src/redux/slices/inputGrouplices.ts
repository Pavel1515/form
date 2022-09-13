import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GroupState {
  inputWork: string | null;
  inputProfesion: string | null;
  inputAge: string | null;
  inputDate: string | null;
}

const initialState: GroupState = {
  inputWork: null,
  inputProfesion: null,
  inputAge: null,
  inputDate: null,
};

export const inputGroupSlices = createSlice({
  name: "group",

  initialState,
  reducers: {
    setWork: (state, action: PayloadAction<string>) => {
      state.inputWork = action.payload;
    },
    setProfession: (state, action: PayloadAction<string>) => {
      state.inputProfesion = action.payload;
    },
    setAge: (state, action: PayloadAction<string>) => {
      state.inputAge = action.payload;
    },
    setDate: (state, action: PayloadAction<string>) => {
      state.inputDate = action.payload;
    },
  },
});

export const { setWork, setProfession, setAge, setDate } =
  inputGroupSlices.actions;

export default inputGroupSlices.reducer;

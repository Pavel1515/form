import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listLabelInput: [
    { value: "inputWork", label: "Место работи" },
    { value: "inputProfesion", label: "Професия" },
    { value: "inputAge", label: "Вік" },
    { value: "inputDate", label: "Дата народження" },
  ],
  listLabelLang: [
    { value: "EN", label: "Английский" },
    { value: "UA", label: "Украиский" },
    { value: "GR", label: "Немецкий" },
    { value: "FR", label: "Францкзкий" },
  ],
  listLabelGroup: [{ value: "group", label: "Group" }],
};

export const listsSlices = createSlice({
  name: "lists",

  initialState,
  reducers: {},
});

export default listsSlices.reducer;

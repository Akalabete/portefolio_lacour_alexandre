import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  title: '',
  skills: [],
  image: '',
  imageAlt: ''
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.title = action.payload.title;
      state.skills = action.payload.skills;
      state.image = action.payload.image;
      state.imageAlt = action.payload.imageAlt;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.title = '';
      state.skills = [];
      state.image = '';
      state.imageAlt = '';
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;

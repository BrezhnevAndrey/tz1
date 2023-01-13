import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IDataElement {
  avatar: string;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
}

export interface IData {
  data: { data: Array<IDataElement> };
}

export interface ILikes {
  data: { id: number; like: boolean };
}

export interface IDataState {
  data: {
    data: Array<IDataElement>;
    selectedUser: IDataElement;
    IsListOPen: boolean;
    likes: Array<number>;
  };
}

const emptyUser = () => ({
  avatar: "",
  email: "",
  first_name: "No content",
  id: 0,
  last_name: "",
});

const counterSlice = createSlice({
  name: "data",
  initialState: {
    data: [emptyUser()],
    selectedUser: emptyUser(),
    IsListOPen: false,
    likes: [0],
  },
  reducers: {
    pushDataResucer(state, action: PayloadAction<Array<IDataElement>>) {
      state.data[0].id === 0 && state.data.splice(0, 1);
      state.data.length === 0 &&
        action.payload.map((element) => {
          state.data.push(element);
        });
    },
    clearData(state) {
      state.likes.splice(1, state.data.length - 1);
    },
    changeSelectedUserReducer(state, action: PayloadAction<IDataElement>) {
      state.selectedUser = action.payload;
    },
    changeIsListOpen(state, action: PayloadAction<boolean>) {
      state.IsListOPen = action.payload;
    },
    changeLikes(state, action: PayloadAction<Array<number>>) {
      action.payload.splice(0, state.likes.length - 1);
      action.payload.map(
        (element) => !state.likes.includes(element) && state.likes.push(element)
      );
    },
    addLike(state, action: PayloadAction<number>) {
      !state.likes.includes(action.payload) && state.likes.push(action.payload);
    },
    deleteLike(state, action: PayloadAction<number>) {
      const index = state.likes.indexOf(action.payload);
      state.likes.splice(index, 1);
    },
  },
});

export const {
  pushDataResucer,
  changeSelectedUserReducer,
  changeIsListOpen,
  changeLikes,
  addLike,
  deleteLike,
  clearData,
} = counterSlice.actions;

export const dataReducers = counterSlice.reducer;

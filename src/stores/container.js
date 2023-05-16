import {createSlice} from '@reduxjs/toolkit';

 const listMusic = createSlice({
    name: 'container',
     initialState: {
        listMusic: [],
    },
     reducers: {
             getListMusic:()=>{},
             addListMusic: (state, action) => {
                state.listMusic = action.payload
            }
    },
});


export const { getListMusic, addListMusic  } = listMusic.actions;


export default listMusic.reducer;
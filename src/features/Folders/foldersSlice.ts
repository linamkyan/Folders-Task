import {  createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';


export interface Folders {
    id: string,
    text: string,
    completed: boolean,
}
export interface FoldersState {
    folder: Folders[],
    file: Folders[],

}

const initialState: FoldersState = {
    folder: [],
    file: [],
};


export const foldersSlice = createSlice({
    name: 'folders',
    initialState,
    reducers: {
        addToList: (state, action: PayloadAction<any>) => {
            state.folder.push({
                id: new Date().toISOString(),
                text: action.payload,
                completed: false,
            });
        },
        deleteFoldersState(state, action) {
            state.folder = []
        },
        removeFolder(state, action) {
            state.folder = state.folder.filter(item => item.id !== action.payload.id);
        },
        addToListFile: (state, action: PayloadAction<any>) => {
            state.file.push({
                id: new Date().toISOString(),
                text: action.payload,
                completed: false,
            });
        },
        deleteFilesState(state, action) {
            state.file = []
        },
        removeFile(state, action) {
            state.file = state.file.filter(item => item.id !== action.payload.id);
        },
    },


});


export const {addToList, deleteFoldersState, removeFolder, deleteFilesState, removeFile, addToListFile } = foldersSlice.actions;

export const userSelectValue = (state: RootState) => state.folders.folder;
export const userSelectValueFile = (state: RootState) => state.folders.file;

export default foldersSlice.reducer;


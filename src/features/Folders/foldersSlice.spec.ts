import foldersReducer, { FoldersState, addToList } from '../Folders/foldersSlice';

describe('todo reducer', () => {
    const initialState: FoldersState = {
        folder: [],
        file: [],
    };
    it('should handle increment', () => {
        const actual = foldersReducer(initialState, addToList(['']));
        expect(actual.folder).toEqual(['']);
    });
});

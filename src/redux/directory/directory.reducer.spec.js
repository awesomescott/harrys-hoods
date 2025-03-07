import directoryReducer, { INITIAL_STATE } from './directory.reducer';

describe('directoryReducer', () => {

    // Return initial state.
    it('should return initial state', () => {
        expect(directoryReducer(undefined, {})).toEqual(INITIAL_STATE);
    });
});

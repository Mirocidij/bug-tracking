export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('persistedReduxStore');
        if (serializedState === null) {
            return undefined;
        }

        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
}

export const saveState = (state) => {
    try {
        const stateToSave = {
            users: state.users,
            boards: state.boards
        }

        const serializedState = JSON.stringify(stateToSave);
        localStorage.setItem('persistedReduxStore', serializedState);
    } catch (err) {
        // Ignore writes errors
    }
}
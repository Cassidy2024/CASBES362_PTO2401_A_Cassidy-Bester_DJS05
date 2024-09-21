// Action types
const ADD = 'ADD';
const SUBTRACT = 'SUBTRACT';
const RESET = 'RESET';

// Initial state
const initialState = {
    value: 0
};

// Reducer function to handle actions and update state
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                value: state.value + 1
            };
        case SUBTRACT:
            return {
                ...state,
                value: state.value - 1
            };
        case RESET:
            return {
                ...state,
                value: 0
            };
        default:
            return state;
    }
};

// Redux-inspired store
const createStore = (reducer) => {
    let state = reducer(undefined, {});  
    const listeners = [];


    const getState = () => state;

    // Method to dispatch actions and update the state
    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(listener => listener());
    };

    // Method to subscribe to state changes
    const subscribe = (listener) => {
        listeners.push(listener);
    };

    return { getState, dispatch, subscribe };
};

// Create the store
const store = createStore(reducer);

// Subscribe to log the new state to the console whenever the state changes
store.subscribe(() => {
    console.log( store.getState().value);
});

// Log function to print the state's value
const log = () => {
    console.log(store.getState().value);
};

//store.subscribe(log);

// Dispatch actions to modify the state
store.dispatch({ type: ADD });  
store.dispatch({ type: ADD });  
store.dispatch({ type: ADD});  
store.dispatch({ type: SUBTRACT });  
store.dispatch({ type: RESET });     

export const list = [
        {
            item: 'Go to Area 51 & get an 👽',
            completed: false,
            id: 1
        },
        {
            item: 'Learn Reducers',
            completed: false,
            id: 2 
        },
        {
            item: 'Learn Context API',
            completed: false,
            id: 3
        }
];
        
    

export const TodoReducer = (state, action) => {
    switch(action.type) {
        case 'TOGGLE_COMPLETED':
            return state.map(list => {
                if(list.id === action.payload) {
                    return {...list, completed: !list.completed};
                }
                return list;
            });
        case 'ADD_ITEM':
            return [
                ...state, 
                { item: action.payload,
                completed: false,
                id: Date.now() }
                ];
        case 'CLEAR':
            return state.filter(list => !list.completed)
          default:
            return state;
    }
};

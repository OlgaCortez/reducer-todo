export const initialState = {
    todo: [
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
    ]
};
        
    

export const reducer = (state, action) => {
    switch(action.type) {
        case 'TOGGLE_COMPLETED':
            let completedTodo  = state.todo.map(item => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        completed: !item.completed
                    }
                } else {
                    return item;
                }
            })
            return {
                ...state, 
                todo: completedTodo
            }
        case 'ADD_ITEM':
            let newTodo = {
                id: Date.now(),
                item: action.payload,
                completed: false
            }
            return {
                ...state,
                todo: [...state.todo, newTodo]
            }
        case 'CLEAR_ITEMS':
            return {
                ...state, 
                todo: state.todo.filter(item => !item.completed)
            };
          default:
            return state;
    }
};

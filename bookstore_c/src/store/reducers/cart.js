const initialState = {
    items: [],
};

export default (state = initialState, action) => {
    switch(action.type) {
        // case 'INCREASE_COUNT_PRODUCT':
        //     console.log(state);
        //     return state; 
        //     // const idx = state.items.findIndex(o => o.id === action.payload);
        //     // console.log(state);
        //     // return {
        //     //     ...state,
        //     //     items: state.items[idx].count++
        //     // };
        // // case 'DECREASE_COUNT_PRODUCT':
        // //     const idxx = state.items.findIndex(o => o.id === action.payload);
        // //     return {
        // //         ...state,
        // //         items: state.items[idxx].count--
        // //     };
        // case 'ADD_TO_CART':
        //     const idx = state.items.findIndex(o => o.id === action.payload);
        //     if(idx === -1) {
        //         return {
        //             ...state,
        //             items: [...state.items, {id: action.payload, count: 1} ]
        //         };
        //     } else {
        //         state.items[idx].count++;
        //         return state;
        //     }
        // case 'ADD_TO_CART':
        //     const idx = state.items.indexOf(action.payload);
        //     if(idx === -1) {
        //         return {
        //             ...state,
        //             items: [...state.items, action.payload]
        //         };
        //     } else {
        //         state.items[idx].count++;

        //         return state;
        //     }
            

        case 'ADD_TO_CART':
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        case 'DELETE_F':
            let idx = state.items.findIndex(o => o.id === action.payload.id);
            console.log(idx);
            return {
                ...state,
                items: state.items.filter( (t, i) => i !== idx )
            };
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                items: state.items.filter(o => o.id !== action.payload)
            };  
        default:
            return state;
    }
};
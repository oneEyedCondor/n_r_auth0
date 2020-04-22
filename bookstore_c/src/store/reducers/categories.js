export const initialState = {
    items: null,
    categoryId: 0,
};

export default (state = initialState, action) => {
    switch(action.type) {
        case 'SELECT_CATEGORY':
            sessionStorage.setItem('selected_category', action.payload);
            return {...state, categoryId: action.payload};
        case 'SET_CATEGORIES':
            
            
            return {...state, items: action.payload};
        default:
            return state;
    }
};
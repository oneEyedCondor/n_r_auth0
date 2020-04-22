export const setCategories = categories => ({
    type: 'SET_CATEGORIES',
    payload: categories,
});

export const selectCategory = categoryId => ({
    type: 'SELECT_CATEGORY',
    payload: categoryId,
});
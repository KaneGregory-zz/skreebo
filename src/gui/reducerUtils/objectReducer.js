export const objectReducer = ({initialState, actionHandlers}) =>
    (state = initialState, action) =>
        (actionHandlers[action.type] || (state => state))(state, action);

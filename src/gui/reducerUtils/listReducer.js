import * as uuid from 'uuid';

export const listReducer = ({addItemAction, removeItemAction, updateItemAction, updateItemReducer}) => {
    const actionMapper = {
        [addItemAction]: (state, action) => {
            const {item, index} = action.data;
            const newItem = Object.assign({ id: uuid.v4() }, action.data.item);
            if (index === undefined) {
                return state.concat(newItem);
            } else {
                return [...state.slice(0, action.index), newItem, ...state.slice(action.index)];
            }
        },
        [removeItemAction]: (state, action) => state.filter(item => item.id !== action.data.id),
        [updateItemAction]: (state, action) => updateItemReducer(state.find(item => item.id), action.data.updateAction)
    };
    return (state = [], action) => (actionMapper[action.type] || (state => state))(state, action);
};

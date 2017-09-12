import * as uuid from 'uuid';
import { listReducer } from '../../reducerUtils/listReducer';
import { timelineEventReducer } from './timelineEventReducer';
import { TimelineActionType } from './timelineActionType';

export const Timeline = {
    name: 'timeline',
    reducer: listReducer({
        addItemAction: TimelineActionType.ADD,
        removeItemAction: TimelineActionType.DELETE,
        updateItemAction: TimelineActionType.UPDATE,
        updateItemReducer: timelineEventReducer
    })
};

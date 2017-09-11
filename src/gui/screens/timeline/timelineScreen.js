import { TimelineView } from './timelineView';
import { TimelineActionType } from '../../objects/timeline/timelineActionType';

export const TimelineScreen = {
    id: 'timeline.screen',
    name: 'Timeline',
    events: {
        addTimelineEvent: (dispatch) => dispatch({type: TimelineActionType.ADD, data: {item: {}}}),
        deleteTimelineEvent: (dispatch, id) => dispatch({type: TimelineActionType.DELETE, data: {id}})
    },
    view: TimelineView
};

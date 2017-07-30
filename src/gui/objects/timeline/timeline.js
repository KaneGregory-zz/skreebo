import * as uuid from 'uuid';

const Timeline = {
    name: 'timeline',
    reducer: (state = [], event) => {
        switch (event.type) {
            case 'ADD_TIMELINE_EVENT': {
                return state.concat({
                    id: uuid.v4(),
                    name: null,
                    description: null
                });
            }
            case 'DELETE_TIMELINE_EVENT': {
                return state.filter(timelineEvent => timelineEvent.id !== event.data.id);
            }
            case 'SET_TIMELINE_EVENT_NAME': {
                // TODO
            }
            case 'SET_TIMELINE_EVENT_DESCRIPTION': {
                // TODO
            }
            default: {
                return state;
            }
        }
    }
}

export default Timeline;

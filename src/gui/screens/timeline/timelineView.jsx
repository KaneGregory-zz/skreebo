import * as React from 'react';

export const TimelineView = ({timeline, addTimelineEvent, deleteTimelineEvent}) => (
    <div>
        <ol>
            {timeline.map(timelineEvent => (
                <li key={timelineEvent.id}>
                    <h1>
                        {timelineEvent.name || 'TODO: Placeholder name'}
                        <button onClick={() => deleteTimelineEvent(timelineEvent.id)}>X</button>
                    </h1>
                    <span>{timelineEvent.description || 'TODO: Placeholder description'}</span>
                </li>
            ))}
        </ol>
        <button onClick={addTimelineEvent}>Add</button>
    </div>
);

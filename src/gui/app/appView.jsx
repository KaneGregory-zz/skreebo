import * as React from 'react';

export const AppView = ({screens, selectedScreenId, selectScreen}) => {
    const VisibleScreen = screens.find(screen => screen.id === selectedScreenId).component;
    return (
        <div>
            <h1>
                {screens.map(screen => {
                    let className = 'tab';
                    if (screen.id === selectedScreenId) {
                        className += ' tab--selected';
                    }
                    return <div key={screen.id} className={className} onClick={() => selectScreen(screen.id)}>{screen.name}</div>;
                })}
            </h1>
            <VisibleScreen />
        </div>
    );
}

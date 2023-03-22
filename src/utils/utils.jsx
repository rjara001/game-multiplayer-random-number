export const getHour = () => {
    return new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
}


export const getRows = (players) => {
    return players.map((_, i) => {
        return { id: i, Name: _.name, Point: !_.isActive ? '-' : _.inputPoint, Multiplier: !_.isActive ? '-' : _.multiplier }
    })
}

export const getRoundPlaying = (prev, player) => {
    const newRound = prev.players.map((_, i) => {
        return (_.name === 'You' || _.name === player.name)?player:undefined || {
            id: i
            , name: _.name
            , points: _.points
            , multiplier: calculateRandomMultiplier()
            , inputPoint: 100
            , isActive: true
        }
    });

    return newRound;
}

export const getLimitValueRandom = () => {
    const max = 10;
    const min = 0;
    return (Math.random() * (max - min) + min).toFixed(2);
}

function calculateRandomMultiplier() {
    const max = 10;
    const min = 0;
    return (Math.random() * (max - min) + min).toFixed(2);
}


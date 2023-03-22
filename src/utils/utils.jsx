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

export const getResultRoundPlaying = (prev, player, limit) => {
    const newRound = prev.players.map((_, i) => {
        let you = (_.name === 'You' || _.name === player.name)?player:undefined;
        let cpu = {
            id: i
            , name: _.name
            , points: _.points
            , multiplier: calculateRandomMultiplier()
            , inputPoint: 100
            , isActive: true
        }
        cpu = calculateScore(cpu, limit);
        you = calculateScore(you, limit);

        return you || cpu;
    });

    return newRound.sort((a,b)=>b.score - a.score);
}

function calculateScore(player, limit) {
    if (!player)
        return undefined;
        
    player.score = player.multiplier;

    if (parseFloat(player.multiplier) > parseFloat(limit/100))
        player.score = 0;

    return player;
}

export const getScore = (players) => {
    return players.map((_, i) => {
        return { Number: i, Name: _.name, Score: _.score }
    })
}

export const getLimitValueRandom = () => {
    const max = 1000;
    const min = 100;
    return Math.random() * (max - min) + min;
}

function calculateRandomMultiplier() {
    const max = 10;
    const min = 0;
    return (Math.random() * (max - min) + min).toFixed(2);
}


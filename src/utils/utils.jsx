export const getHour = () => {
    return new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
}


export const getRows = (players) => {
    return players.map((_, i) => {
        return { id: i, Name: _.name, Point: !_.isActive ? '-' : _.points, Multiplier: !_.isActive ? '-' : _.multiplier }
    })
}

export const getRoundPlaying = (prev, player) => {
    const newRound = prev.players.map((_, i) => {
        return (_.name === 'You' || _.name === player.name) ? player : undefined || {
            id: i
            , name: _.name
            , points: 100
            , multiplier: calculateRandomMultiplier()
            , isActive: true
        }
    });

    return newRound;
}

export const getResultRoundPlaying = (prev, limit) => {

    return prev.players.map((_) => {
        return { ..._, points: (_.multiplier> parseFloat(limit / 100))?0: parseInt(_.points * _.multiplier) }

    });

}

export const getScorePlaying = (prev, player, limit) => {
    const newRound = prev.players.map((_) => {
        return { ..._, score: _.points, totalPoints: _.totalPoints + _.points }
    });

    return newRound.sort((a, b) => b.score - a.score);
}

// function calculateScore(player, limit) {
//     if (!player)
//         return player;
//     if (!player.score)
//         player.score = 0;
//     player.score = parseFloat(player.score) + parseFloat(player.multiplier);

//     if (parseFloat(player.multiplier) > parseFloat(limit / 100))
//         player.score = 0;

//     return player;
// }

export const getScore = (players) => {
    return players.map((_, i) => {
        return { Number: i, Name: (_.isActive==true)?_.name:'-', Score: (_.isActive==true)?_.score:'-' }
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


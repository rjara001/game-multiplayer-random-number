import { Box, Grid } from "@mui/material"
import { PlayerInput } from "../components/PlayerInput/PayerInput.jsx"
import { LineGraph } from "../components/LineGraph/LineGraph.jsx"
import { TableRanking } from "../components/TableRanking/TableRanking.jsx"
import { Chat } from "../components/Chat/Chat.jsx"
import { InserUser } from "../components/InsertUser/InsertUser.jsx"
import { useEffect, useState } from "react"
import { Player } from "../models/player.jsx"
import { Round } from "../models/round.jsx"
import { Ranking } from '../models/ranking.jsx'

import { getScorePlaying, getRoundPlaying, getResultRoundPlaying, getLimitValueRandom } from '../utils/utils.jsx';

export const Playboard = () => {
    const [player, setPlayer] = useState(new Player());
    const [round, setRound] = useState(new Round());
    const [ranking, setRanking] = useState(new Ranking());
    const [limit, setLimit] = useState(0);
    const [speed, setSpeed] = useState(1);

    const handleClickStart = () => {

        setLimit(getLimitValueRandom());

        setPlayer((prev) => {
            return { ...prev, totalPoints: prev.totalPoints - prev.points }
        });
    }

    const processFinished = () => {
        if (round.started === true) {

            setRound((prev) => {
                return { ...prev, players: getResultRoundPlaying(prev, limit), started: false }
            });

            setPlayer((prev) => {
                let _points = (prev.multiplier > parseFloat(limit / 100)) ? 0 : parseInt(prev.points * prev.multiplier);

                return { ...prev, points: _points, totalPoints: prev.totalPoints + _points }
            });

        }

    }

    useEffect(() => {
        setRanking((prev) => {
            return { ...prev, players: getScorePlaying(round, player, limit) }
        });


    }, [round.players])

    useEffect(() => {
        if (limit > 0)
            setRound((prev) => {
                return { ...prev, players: getRoundPlaying(prev, player, limit), randomLimit: limit, started: true }
            });
    }, [limit]);

    useEffect(() => {
        setRound((prev) => {
            return { ...prev, speed }
        });
    }, [speed]);

    return (
        <Grid style={{ textAlign: '-webkit-center' }}>
            <Box style={{ width: '85%' }}>
                <Grid container spacing={2}>
                    <Grid item xs={4} style={{ borderColor: 'gold', borderStyle: 'solid', borderWidth: 'thin' }}>
                        {player.isActive && <PlayerInput player={player} setPlayer={setPlayer} round={round} handleClickSetRound={handleClickStart} setSpeed={setSpeed}></PlayerInput>}
                        {!player.isActive && <InserUser player={player} setPlayer={setPlayer}></InserUser>}
                    </Grid>
                    <Grid item xs={8}>
                        <LineGraph player={player} round={round} finished={processFinished}></LineGraph>
                    </Grid>

                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <TableRanking round={ranking}></TableRanking>
                    </Grid>
                    <Grid item xs={4}><Chat player={player} ></Chat></Grid>
                </Grid>
            </Box>
            <Box></Box>
        </Grid>
    )

}
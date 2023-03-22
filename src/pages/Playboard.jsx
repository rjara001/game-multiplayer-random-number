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

import {getRoundPlaying, getResultRoundPlaying, getLimitValueRandom} from '../utils/utils.jsx';

export const Playboard = () => {
    const [player, setPlayer] = useState(new Player());
    const [round, setRound] = useState(new Round());
    const [ranking, setRanking] = useState(new Ranking());
    const [limit, setLimit] = useState(0);
    const [speed, setSpeed] = useState(1);

    const handleClickStart = () => {

        setLimit(getLimitValueRandom());

        setPlayer((prev)=>{
            return {... prev, points: prev.points - prev.inputPoint}
        });
    }

    const processFinished = () =>{
        if (round.started===true)
            setRanking((prev)=>{
                return {... prev, players:getResultRoundPlaying(prev, player, limit)}
            });

            setRound((prev)=>{
                return {... prev, started:false}
            });
    }

    useEffect(()=>{
        if (limit>0)
            setRound((prev)=>{
                return {... prev, players:getRoundPlaying(prev, player, limit), randomLimit: limit, started:true}
            });
    }, [limit]);

    useEffect(()=>{
            setRound((prev)=>{
                return {... prev, speed}
            });
    }, [speed]);

    return (
        <Grid>
            <Box>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ paddingRight: '20px' }}>
                        {player.isActive && <PlayerInput player={player} setPlayer={setPlayer} round={round} handleClickSetRound={handleClickStart} setSpeed={setSpeed}></PlayerInput>}
                        {!player.isActive && <InserUser player={player} setPlayer={setPlayer}></InserUser>}
                    </div>
                    <div>
                        <LineGraph player={player} round={round} finished={processFinished}></LineGraph>
                    </div>
                   
                </div>
                <TableRanking round={ranking}></TableRanking>
                <Chat></Chat>
            </Box>
            <Box></Box>
        </Grid>
    )

}
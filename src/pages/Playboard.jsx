import { Box, Grid } from "@mui/material"
import { PlayerInput } from "../components/PlayerInput/PayerInput.jsx"
import { LineGraph } from "../components/LineGraph/LineGraph.jsx"
import { Ranking } from "../components/Ranking/Ranking.jsx"
import { Chat } from "../components/Chat/Chat.jsx"
import { InserUser } from "../components/InsertUser/InsertUser.jsx"
import { useEffect, useState } from "react"
import { Player } from "../models/player.jsx"
import { Round } from "../models/round.jsx"
import {getRoundPlaying, getLimitValueRandom} from '../utils/utils.jsx';

export const Playboard = () => {
    const [player, setPlayer] = useState(new Player());
    const [round, setRound] = useState(new Round());
  
    const handleClickStart = () => {
        setPlayer((prev)=>{
            return {... prev, points: prev.points - prev.inputPoint}
        });

        setRound((prev)=>{
            return {... prev, players:getRoundPlaying(prev, player), randomLimit: getLimitValueRandom(), started:true}
        });
    }


    return (
        <Grid>
            <Box>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ paddingRight: '20px' }}>
                        {player.isActive && <PlayerInput player={player} setPlayer={setPlayer} round={round} handleClickSetRound={handleClickStart}></PlayerInput>}
                        {!player.isActive && <InserUser player={player} setPlayer={setPlayer}></InserUser>}
                    </div>
                    <div>
                        <LineGraph player={player} round={round}></LineGraph>
                    </div>
                   
                </div>
                <Ranking></Ranking>
                <Chat></Chat>
            </Box>
            <Box></Box>
        </Grid>
    )

}
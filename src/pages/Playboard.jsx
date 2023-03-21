import { Box, Grid } from "@mui/material"
import { PlayerInput } from "../components/PlayerInput/PayerInput.jsx"
import { LineGraph } from "../components/LineGraph/LineGraph.jsx"
import { Ranking } from "../components/Ranking/Ranking.jsx"
import { Chat } from "../components/Chat/Chat.jsx"
import { InserUser } from "../components/InsertUser/InsertUser.jsx"
import { useEffect, useState } from "react"
import { Player } from "../models/player.jsx"

export const Playboard = () => {
    const [player, setPlayer] = useState(new Player());

    // useEffect(()=>{
    //     console.log(UserName);
    // }, [UserName]);

    return (
        <Grid>
            <Box>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ paddingRight: '20px' }}>
                        {player.isActive && <PlayerInput player={player} setPlayer={setPlayer}></PlayerInput>}
                        {!player.isActive && <InserUser player={player} setPlayer={setPlayer}></InserUser>}
                    </div>
                    <div>
                        <LineGraph player={player}></LineGraph>
                    </div>
                   
                </div>
                <Ranking></Ranking>
                <Chat></Chat>
            </Box>
            <Box></Box>
        </Grid>
    )

}
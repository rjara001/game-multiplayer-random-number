import { Box, Grid } from "@mui/material"
import { PlayerInput } from "../components/PlayerInput/PayerInput.jsx"
import { LineGraph } from "../components/LineGraph/LineGraph.jsx"
import { Ranking } from "../components/Ranking/Ranking.jsx"
import { Chat } from "../components/Chat/Chat.jsx"

export const Playboard = () => {
    return (
        <Grid>
            <Box>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ paddingRight: '20px' }}>
                        <PlayerInput></PlayerInput>
                    </div>
                    <div>
                        <LineGraph></LineGraph>
                    </div>
                   
                </div>
                <Ranking></Ranking>
                <Chat></Chat>
            </Box>
            <Box></Box>
        </Grid>
    )

}
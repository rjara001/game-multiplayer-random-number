import { Button, Grid, SpeedDial } from "@mui/material"
import { PointInput } from './PointInput.jsx'
import { CurrentRound } from './CurrentRound.jsx'
import { SpeedControl } from './SpeedControl.jsx'

export const PlayerInput = () => {
    return <Grid>
        <div style={{ width: '340px' }}>
            <Grid style={{ display: 'flex',justifyContent: 'center' }} container  spacing={2}>
                <Grid  item xs={6} style={{ paddingRight: '20px' }}>
                    <PointInput title="Point"></PointInput>
                </Grid>
                <Grid item xs={6}>
                    <PointInput title="Multiplier"></PointInput>
                </Grid>

            </Grid>
            <div  style={{ width: '100%', padding: '4px 0px 4px 0px' }}>
                <Button variant="contained" color="success" style={{ width: '100%', padding: '4px 0px 4px 0px' }}>Start</Button>
            </div>
            
            <div>
                <CurrentRound></CurrentRound>
            </div>
            <div>
            <SpeedControl></SpeedControl>
            </div>
        </div>




      
       
    </Grid>
}
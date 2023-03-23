import { Button, Grid, SpeedDial } from "@mui/material"
import { PointInput } from './PointInput.jsx'
import { CurrentRound } from './CurrentRound.jsx'
import { SpeedControl } from './SpeedControl.jsx'
import { startPlay } from '../../utils/utils.jsx'
import { useEffect } from "react"


export const PlayerInput = ({ player, setPlayer, round, handleClickSetRound, setSpeed }) => {

    const handleIncreasePoint = () => {
        setPlayer((prev) => {
            return { ...prev, points: prev.points + 25 }
        });
    };

    const handleDecreasePoint = () => {
        setPlayer((prev) => {
            return { ...prev, points: prev.points - 25 }
        });
    }

    const handleIncreaseMultiplier = () => {
        setPlayer((prev) => {
            return { ...prev, multiplier: prev.multiplier + 0.25 }
        });
    };

    const handleDecreaseMultiplier = () => {
        setPlayer((prev) => {
            return { ...prev, multiplier: prev.multiplier - 0.25 }
        });
    }

    const setInputPoint = (value) =>{
        setPlayer((prev) => {
            return { ...prev, points: value }
        });
        
    }

    const setInputMultiplier = (value) =>{
        setPlayer((prev) => {
            return { ...prev, multiplier: value }
        });
        
    }

    return <Grid>
        <div style={{ width: '100%' }}>
            <Grid style={{ display: 'flex', justifyContent: 'center' }} container spacing={2}>
                <Grid item xs={6}>
                    <PointInput isDecimal={false} title="Point" value={player.points} setValue={setInputPoint} handleIncrease={handleIncreasePoint} handleDecrease={handleDecreasePoint}></PointInput>
                </Grid>
                <Grid item xs={6}>
                    <PointInput isDecimal={true} title="Multiplier" value={player.multiplier} setValue={setInputMultiplier} handleIncrease={handleIncreaseMultiplier} handleDecrease={handleDecreaseMultiplier}></PointInput>
                </Grid>

            </Grid>
            <div style={{ width: '100%', padding: '4px 0px 4px 0px' }}>
                <Button variant="contained" color="success" style={{ width: '100%', padding: '4px 0px 4px 0px' }} onClick={handleClickSetRound}>Start</Button>
            </div>

            <div>
                <CurrentRound round={round}></CurrentRound>
            </div>
            <div>
                <SpeedControl setSpeed={setSpeed}></SpeedControl>
            </div>
        </div>






    </Grid>
}
import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Grid } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';

export const SpeedControl = ({setSpeed}) => {
    const marks = [
        {
            value: 20,
            label: '1x',
        },
        {
            value: 40,
            label: '2x',
        },
        {
            value: 60,
            label: '3x',
        },
        {
            value: 80,
            label: '4x',
        },
        {
            value: 100,
            label: '5x',
        },
    ];

    function valuetext(value) {
        return `${value}`;
    }

    return <Grid>
        <Box>
            <Grid container direction="row" alignItems="center">
                <Grid item>
                    <LightModeIcon color="primary" />
                </Grid>
                <Grid item>
                    <h3>Speed</h3>
                </Grid>
            </Grid>

        </Box>
        <Box sx={{ width: '100%' }}>
            <Slider
                aria-label="Always visible"
                defaultValue={10}
                getAriaValueText={valuetext}
                onChange={(event)=>setSpeed(event.target.value === "" ? "" : Number(event.target.value))}
                step={10}
                marks={marks}
                valueLabelDisplay="on"
            />
        </Box>
    </Grid>
}
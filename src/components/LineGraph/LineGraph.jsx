import * as React from 'react';
import Box from '@mui/material/Box';
import { CandyBlock } from './CandyBlock.jsx'
import { Button, Grid, SpeedDial } from "@mui/material"

export const LineGraph = () => {
    return (
        <div>
            <div>
                <Grid style={{ display: 'flex', justifyContent: 'center' }} container  spacing={2}>
                    <Grid item xs={4}>
                        <CandyBlock title="115"></CandyBlock>
                    </Grid>
                    <Grid item xs={4}>
                        <CandyBlock title="Thomas"></CandyBlock>
                    </Grid>
                    <Grid item xs={4}>
                        <CandyBlock title="21:30"></CandyBlock>
                    </Grid>
                </Grid>
                <div style={{ width: '100%', padding: '4px 0px 4px 0px' }}>
                    <div>
                        <Box
                            sx={{
                                width: 800,
                                height: 600,
                                backgroundColor: 'primary.dark',
                                '&:hover': {
                                    backgroundColor: 'primary.main',
                                    opacity: [0.9, 0.8, 0.7],
                                },
                            }}
                        />
                    </div>
                </div>
            </div>

        </div>

    );
}
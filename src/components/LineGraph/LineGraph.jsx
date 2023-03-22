import * as React from 'react';
import Box from '@mui/material/Box';
import { CandyBlock } from './CandyBlock.jsx'
import { Button, Grid, SpeedDial } from "@mui/material"
import { getHour } from '../../utils/utils.jsx';
import { IncrementalValue } from './IncrementalValue.jsx';

export const LineGraph = ({player, round}) => {

    return (
        <div>
            <div>
                <Grid style={{ display: 'flex', justifyContent: 'center' }} container  spacing={2}>
                    <Grid item xs={4}>
                        <CandyBlock title={player.points} icon='cup'></CandyBlock>
                    </Grid>
                    <Grid item xs={4}>
                        <CandyBlock title={player.name} icon='user'></CandyBlock>
                    </Grid>
                    <Grid item xs={4}>
                        <CandyBlock title={getHour()} icon='hour'></CandyBlock>
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
                        >
                            <div>
                                <IncrementalValue started={round.started} limit={round.randomLimit}></IncrementalValue>
                            </div>

                        </Box>
                    </div>
                </div>
            </div>

        </div>

    );
}
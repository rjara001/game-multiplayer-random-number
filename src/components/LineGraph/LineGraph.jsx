import * as React from 'react';
import Box from '@mui/material/Box';
import { CandyBlock } from './CandyBlock.jsx'
import { Button, Grid, SpeedDial } from "@mui/material"
import { getHour } from '../../utils/utils.jsx';
import { IncrementalValue } from './IncrementalValue.jsx';

export const LineGraph = ({player, round, finished}) => {

    return (
        <div>
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <CandyBlock title={player.totalPoints} icon='cup'></CandyBlock>
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
                                width: '100%',
                                height: 600,
                                backgroundColor: 'primary.dark',
                                '&:hover': {
                                    backgroundColor: 'primary.main',
                                    opacity: [0.9, 0.8, 0.7],
                                },
                            }}
                        >
                            <div style={{ textAlign: '-webkit-center', position: 'absolute',top: '32%', left: '57%', fontSize: '50px'}}>
                                <IncrementalValue started={round.started} limit={round.randomLimit} finished={finished} speed={round.speed}></IncrementalValue>
                            </div>

                        </Box>
                    </div>
                </div>
            </div>

        </div>

    );
}
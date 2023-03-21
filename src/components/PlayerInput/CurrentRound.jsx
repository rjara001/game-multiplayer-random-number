import * as React from 'react';
import { useState, useEffect } from "react"
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { createSvgIcon } from '@mui/material/utils';
import { Button, Grid, SpeedDial } from "@mui/material"
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { getRows } from '../../utils/utils.jsx';

const columns = [
    {
        field: 'Name',
        headerName: 'Name',
        width: 150,
        editable: true,
    },
    {
        field: 'Point',
        headerName: 'Point',
        width: 80,
        editable: true,
    },
    {
        field: 'Multiplier',
        headerName: 'Multiplier',
        width: 90,
        editable: true,
    }
];

// const rows = [
//     { id: 1, Name: 'You', Point: '-', Multiplier: '-' },
//     { id: 2, Name: 'CPU', Point: '-', Multiplier: '-' },
//     { id: 3, Name: 'CPU', Point: '-', Multiplier: '-' },
//     { id: 4, Name: 'CPU', Point: '-', Multiplier: '-' },
//     { id: 5, Name: 'CPU', Point: '-', Multiplier: '-' },
// ];

export const CurrentRound = ({ round }) => {
    const [rows, setRows] = useState();

    useEffect(()=>{
        let values = getRows(round.players);
        setRows(values);

        console.log(rows);
    }, [round]);

    return (
        <Grid>
            <Box>
                <Grid container direction="row" alignItems="center">
                    <Grid item>
                        <EmojiEventsIcon color="primary" />
                    </Grid>
                    <Grid item>
                        <h3> Current Round</h3>
                    </Grid>
                </Grid>

            </Box>
            {rows && <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}

                />
            </Box>}
        </Grid>

    );
}
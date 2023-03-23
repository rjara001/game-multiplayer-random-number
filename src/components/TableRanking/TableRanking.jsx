import * as React from 'react';
import { useState, useEffect } from "react"
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { createSvgIcon } from '@mui/material/utils';
import { Button, Grid, SpeedDial } from "@mui/material"
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { getScore } from '../../utils/utils.jsx';

const columns = [
    {
        field: 'Number',
        headerName: 'Number',
        width: 200,
        editable: true,
    },
    {
        field: 'Name',
        headerName: 'Name',
        width: 300,
        editable: true,
    },
    {
        field: 'Score',
        headerName: 'Score',
        width: 200,
        editable: true,
    }
];

export const TableRanking = ({ round }) => {
    const [rows, setRows] = useState();

    useEffect(()=>{
        let values = getScore(round.players);
        setRows(values);

    }, [round]);

    return (
        <Grid>
            <Box>
                <Grid container direction="row" alignItems="center">
                    <Grid item>
                        <EmojiEventsIcon color="primary" />
                    </Grid>
                    <Grid item>
                        <h3> Ranking</h3>
                    </Grid>
                </Grid>

            </Box>
            {rows && <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid getRowId={(row) => row.Number}
                    rows={rows}
                    columns={columns}

                />
            </Box>}
        </Grid>

    );
}
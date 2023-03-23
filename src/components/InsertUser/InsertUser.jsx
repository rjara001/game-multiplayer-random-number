import { Button, Box, Grid } from "@mui/material"

import TextField from '@mui/material/TextField';

export const InserUser = ({ player, setPlayer }) => {
    const handleChange = (event) => {
        setPlayer((prev) => {
            return { ...prev, name: event.target.value }
        });
    };

    const handleClick = () => {
        setPlayer((prev) => {
            return { ...prev, isActive: true, totalPoints: 1000, points: 50, multiplier: 1, score: 0 }
        });
    };

    return <Box style={{ width: '95%' }}>
        <Grid style={{ padding: '100px' }}>
            Welcome
        </Grid>
        <Grid style={{ textAlign: 'center' }}>
            Please Insert Your Name
        </Grid>
        <div style={{ padding: '10px 0px 10px 0px' }}>
            <form>
                <TextField style={{ width: '100%' }}
                    label="Name"
                    size="small"
                    variant="outlined"
                    value={player.name}
                    onChange={handleChange}
                />

            </form>
        </div>
        <div>
            <Button variant="contained" color="primary" onClick={handleClick} style={{ width: '100%' }} size="large">
                Accept
            </Button>
        </div>
    </Box>
}
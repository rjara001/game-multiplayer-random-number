import { Button, Box } from "@mui/material"

import TextField from '@mui/material/TextField';

export const InserUser = ({ player, setPlayer }) => {
    const handleChange = (event) => {
        setPlayer((prev) => {
            return { ...prev, name: event.target.value }
        });
    };

    const handleClick = () => {
        setPlayer((prev) => {
            return { ...prev, isActive: true, points:1000, inputPoint:50, Multiplier:1 }
        });
    };

    return <Box>
        <div>
            Welcome
        </div>
        <div>

        </div>
        <div>
            <form>
                <TextField
                    label="Name"
                    variant="outlined"
                    value={player.name}
                    onChange={handleChange}
                />

            </form>
        </div>
        <div>
            <Button variant="contained" color="primary" onClick={handleClick}>
                Accept
            </Button>
        </div>
    </Box>
}
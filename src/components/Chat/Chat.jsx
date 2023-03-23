import Box from '@mui/material/Box';

export const Chat = () => {
    return <div>
        <div>
            <Box
                sx={{
                    width: '100%',
                    height: 250,
                    backgroundColor: 'primary.dark',
                    '&:hover': {
                        backgroundColor: 'primary.main',
                        opacity: [0.9, 0.8, 0.7],
                    },
                }}
            >
                Upcomming a chat

            </Box>
        </div>
    </div>
}
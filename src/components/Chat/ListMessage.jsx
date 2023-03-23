import { Grid } from "@mui/material"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

import Avatar from '@mui/material/Avatar';

export const ListMessage = ({ messages }) => {
    return <div>

        <List dense sx={{ width: '100%', maxWidth: 360, height:240, bgcolor: 'background.paper', overflowY:'auto' }}>
            {messages.map((message, idx) => (
 
                    <ListItem
                        key={idx}>
                        <ListItemButton>
                            <ListItemAvatar>
                                <Avatar
                                    alt={`Avatar n°${idx + 1}`}
                         
                                    sx={{ width: 24, height: 24 }}
                                >{message.user?.length>0?message.user[0]:'A'}</Avatar>
                            </ListItemAvatar>
                            <ListItemText id={idx} primary={message.text} />
                        </ListItemButton>
                    </ListItem>

            ))}
        </List>

    </div>
}
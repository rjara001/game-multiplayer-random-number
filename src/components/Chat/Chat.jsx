
import {ListMessage} from './ListMessage.jsx'
import { Button, Box, Grid } from "@mui/material"
import { useEffect, useState, useCallback} from "react"
import TextField from '@mui/material/TextField';
import useWebSocket, { ReadyState } from 'react-use-websocket';

export const Chat = ({player}) => {
    // const [messages, setMessages] = useState([{from:'Cpu1', text:'Hi'},{from:'Me', text:'Hi'}]);
    const [socketUrl, setSocketUrl] = useState('ws://localhost:8080');
    const [messageHistory, setMessageHistory] = useState([]);

    const [message, setMessage] = useState('');
    const [activeSendMessage, setActiveSendMessage] = useState(false);

    const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);

    useEffect(() => {
        if (lastMessage !== null) {
         
            if (lastMessage.data instanceof Blob) {
                let reader = new FileReader();
        
                reader.onload = () => {
                    setMessageHistory((prev) => prev.concat(JSON.parse(reader.result)));
                    console.log("Result: " + reader.result);
                };
        
                reader.readAsText(lastMessage.data);
            } else {
                console.log("Result: " + lastMessage.data);
            }
        }
      }, [lastMessage, setMessageHistory]);

      useEffect(()=>{
        if (activeSendMessage)
        {
            sendMessage(JSON.stringify({text:message, user:player.name}));
            setActiveSendMessage(false);
            setMessage('');
        }
            
    }, [activeSendMessage])

    const handleSendClick = () => {
        setActiveSendMessage(true);
    }

    return <Box
            >
                <ListMessage messages={messageHistory} lastMessage={lastMessage}></ListMessage>
                
                <form style={{paddingTop:'55px'}}>
                    <Grid container spacing={2} style={{Padding:'3px', width:'100%'}}>
                        <Grid xs={10}>  
                            <TextField style={{ width: '100%' }}
                            label={readyState !== ReadyState.OPEN?'disconected':'connected'}
                            size="small"
                            variant="outlined"
                            value={message}
                            onChange={(e)=>setMessage(e.target.value)}
                            disabled={readyState !== ReadyState.OPEN}/>
                        </Grid>
                        <Grid xs={2}> 
                            <Button variant="contained" color="primary" onClick={handleSendClick}>
                                Send
                            </Button>
                        </Grid>
                    </Grid>


                </form>
            </Box>
            
}
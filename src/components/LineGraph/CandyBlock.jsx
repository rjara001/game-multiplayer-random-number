import React, { useState } from 'react';
import { Button, TextField, Badge, Stack } from '@mui/material';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { makeStyles } from "@mui/styles";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PersonIcon from '@mui/icons-material/Person';
import TimerIcon from '@mui/icons-material/Timer';

const PointInputStyles = makeStyles(() => ({
    number: {
        width: '50px'
        , textAlign: 'center'
        , display: 'block'
    }
    , left: {

        display: 'inline-block'
        , verticalAlign: 'top'
        , verticalAlign: 'bottom'
    }
    , right: {

        display: 'inline-block'
        , verticalAlign: 'top'
        , verticalAlign: 'bottom'
    }
    , textContainer: {

        width: '80px'
        , display: 'flex'
        , textAlign: 'center'
        , verticalAlign: '-webkit-baseline-middle'
        , width: '100%'
    }
    , container: {
        borderStyle: 'solid'
        , borderRadius: '6px'
        , borderWidth: '1px'
        , height: '45px'
        , textAlign: 'center'
    }
    , positionIcon: {
        position: 'relative'
        , top: '10px'
        , left: '4px'
    }
}));

export const CandyBlock = ({ title, icon }) => {
    const classes = PointInputStyles();

    return (
        <div className={classes.container}>

            <div className={classes.textContainer}>
                <div>
                    {icon == 'cup' && <EmojiEventsIcon color="primary" className={classes.positionIcon} />}
                    {icon == 'user' && <PersonIcon color="primary" className={classes.positionIcon} />}
                    {icon == 'hour' && <TimerIcon color="primary" className={classes.positionIcon} />}
                </div>

                <div style={{ width: '100%', position: 'relative', top: '9px' }}>{title}</div>

            </div>

        </div>
    );
}

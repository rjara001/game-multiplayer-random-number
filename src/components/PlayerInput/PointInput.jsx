import React, { useState } from 'react';
import { Button, TextField, Badge, Stack } from '@mui/material';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { makeStyles } from "@mui/styles";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const PointInputStyles = makeStyles(() => ({
    number: {
        width: '50px'
        , textAlign: 'center'
        , display: 'block'
    }
    , left: {

        display: 'inline-block'
        , verticalAlign:'top'
        , verticalAlign: 'bottom'
    }
    , right: {

        display: 'inline-block'
        , verticalAlign:'top'
        , verticalAlign: 'bottom'
    }
    , numberContainer: {

        width: '80px'
        , textAlign: 'center'
        , display: 'inline-block'
    }
    , container:{
        borderStyle: 'solid'
        , borderRadius: '6px'
        , borderWidth: '1px'
        , height: '45px'
        , textAlignLast: 'center'
    }
}));

export const PointInput = ({title}) => {
    const classes = PointInputStyles();
    const [value, setValue] = useState(0);

    const handleIncrease = () => {
        setValue(prevValue => prevValue + 1);
    };

    const handleDecrease = () => {

    }

    const incrementButton = <ArrowCircleUpIcon className={classes.left} color="action" />;
    const inputNumber =
        <div className={classes.numberContainer}><div style={{ fontSize: 'small' }}>{title}</div>

            <TextField size="small" className={classes.middle}
                type="text"
                value={value}
                inputProps={{
                    style: {

                        textAlign: 'center',
                        padding: '2px 18px 2px 18px',
                        display: 'block'
                    }
                }}
                onChange={(event) => setValue(event.target.value)} /></div>;
    const decreaseButton = <ArrowCircleUpIcon className={classes.right} color="action" />;
    return (
        <div className={classes.container}>

            {incrementButton}

            {inputNumber}

            {decreaseButton}

            {/* <Icon color="primary" onClick={handleIncrease}>add_circle</Icon> */}
            {/* <TextField
                type="number"
                value={value}
                onChange={(event) => setValue(event.target.value)}
            />
            <Icon color="primary" onClick={handleDecrease}>add_circle</Icon> */}
        </div>
    );
}

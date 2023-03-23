import React, { useState } from 'react';
import { IconButton, TextField, Badge, Stack } from '@mui/material';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
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
        , verticalAlign: 'top'
        , verticalAlign: 'bottom'
    }
    , right: {

        display: 'inline-block'
        , verticalAlign: 'top'
        , verticalAlign: 'bottom'
    }
    , numberContainer: {

        width: '80px'
        , textAlign: 'center'
        , display: 'inline-block'
    }
    , container: {
        borderStyle: 'solid'
        , borderRadius: '6px'
        , borderWidth: '1px'
        , height: '45px'
        , textAlignLast: 'center'
    }
}));

export const PointInput = ({ title, value, setValue, handleIncrease, handleDecrease, isDecimal }) => {
    const classes = PointInputStyles();


    const handleIncrease2 = () => {
        handleIncrease();
    };

    const handleDecrease2 = () => {
        handleDecrease();
    }

    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    const incrementButton = <IconButton onClick={handleIncrease2}> <ArrowCircleUpIcon /> </IconButton>;
    const valueNumber = () => {
        let num = isNumeric(value) ? parseFloat(value) : 0;
        if (isDecimal)
            return num.toFixed(2);

        return num;
    }
    const inputNumber =
        <div className={classes.numberContainer}><div style={{ fontSize: 'small' }}>{title}</div>

            <TextField size="small" className={classes.middle}
                type="text"
                value={valueNumber()}
                inputProps={{
                    style: {

                        textAlign: 'center',
                        padding: '2px 18px 2px 18px',
                        display: 'block',
                        fontSize: '12px'
                    }
                }}
                onChange={(event) => setValue(event.target.value)} /></div>;
    const decreaseButton = <IconButton onClick={handleDecrease2}> <ArrowCircleDownIcon /></IconButton>;
    return (
        <div className={classes.container}>


            {decreaseButton}
            
            {inputNumber}

            {incrementButton}


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

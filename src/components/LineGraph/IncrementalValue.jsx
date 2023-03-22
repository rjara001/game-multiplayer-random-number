import React, { useState, useEffect } from 'react';


export const IncrementalValue = ({started, limit, finished, speed}) => {
    const [currentValue, setCurrentValue] = useState(0);
    const targetValue = limit;
   
    const [increment, setIncrement] = useState(1);

    useEffect(()=>{
        setIncrement(speed/3);

        if (started===true)
            setCurrentValue(0);
    }, [started, speed]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentValue(currentValue => {
                const newValue = currentValue + increment;
                if (newValue >= targetValue) {
                    clearInterval(intervalId); // Stop the interval once target value is reached
                    finished()
                    return targetValue;
                }
                return newValue;
            });
        }, 200);
        return () => clearInterval(intervalId); // Clean up the interval when component unmounts


    }, [currentValue, started]);

    // if (!started)
    //     return <div>0.00x</div>
    return <div>{parseFloat(currentValue/100).toFixed(2) + 'x'}</div>;
}



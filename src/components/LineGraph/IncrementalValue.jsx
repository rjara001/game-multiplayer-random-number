import React, { useState, useEffect } from 'react';

export const IncrementalValue = ({started, limit}) => {
    const [currentValue, setCurrentValue] = useState(0);
    const targetValue = 1000 * limit;
    const increment = targetValue / 30; // Increase value by 100/30 = 3.33 every second

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentValue(currentValue => {
                const newValue = currentValue + increment;
                if (newValue >= targetValue) {
                    clearInterval(intervalId); // Stop the interval once target value is reached
                    return targetValue;
                }
                return newValue;
            });
        }, 200);
        return () => clearInterval(intervalId); // Clean up the interval when component unmounts
    }, [increment, targetValue, started]);

    if (!started)
        return <div>0.00x</div>
    return <div>{parseFloat(currentValue/100).toFixed(2)}</div>;
}



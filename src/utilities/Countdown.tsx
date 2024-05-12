import { Typography } from "@material-tailwind/react";
import React, { useState, useEffect } from "react";

interface CountdownTimerProps {
    flashSaleEndTime: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
    flashSaleEndTime,
}) => {
    const calculateTimeLeft = () => {
        const difference = +flashSaleEndTime - +new Date();
        let timeLeft: Record<string, number> = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    return (
        <div className="flex md:gap-3 mt-1 gap-2">
            <div className=" block">
                {timeLeft.days !== undefined && timeLeft.days !== null && (
                    <div>
                        <Typography variant='small' className=" text-xs" placeholder={undefined}>Days</Typography>
                        <span className=" md:text-4xl">{timeLeft.days}</span>
                    </div>
                )}
            </div>
            <Typography variant='h5' placeholder={undefined} className="md:mt-6">:</Typography>
            <div>
                {timeLeft.hours !== undefined && timeLeft.hours !== null && (
                    <div>
                        <Typography variant='small' className=" text-xs" placeholder={undefined}>Hours</Typography>
                        <span className=" md:text-4xl">{timeLeft.hours}</span>
                    </div>
                )}
            </div>
            <Typography variant='h5' placeholder={undefined} className="md:mt-6">:</Typography>      <div>
                {timeLeft.minutes !== undefined && timeLeft.minutes !== null && (
                    <div>
                        <Typography placeholder={undefined} variant="small" className=" text-xs">Minutes</Typography>
                        <span className=" md:text-4xl">{timeLeft.minutes}</span>
                    </div>
                )}
            </div>
            <Typography variant='h5' placeholder={undefined} className="md:mt-6">:</Typography>      <div>
                {timeLeft.seconds !== undefined && timeLeft.seconds !== null && (
                    <div>
                        <Typography placeholder={undefined} variant="small" className=" text-xs">Seconds</Typography>
                        <span className=" md:text-4xl">{timeLeft.seconds}</span>
                    </div>
                )}
            </div>
            {Object.keys(timeLeft).length === 0 && <span>Flash sale has ended!</span>}
        </div>
    );
};

export default CountdownTimer;

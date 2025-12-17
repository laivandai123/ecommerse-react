import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
const CountdownTimer = ({ targetDate }) => {
    const { box, title } = styles;
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();

        if (difference > 0) {
            return {
                Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                Mins: Math.floor((difference / 1000 / 60) % 60),
                Secs: Math.floor((difference / 1000) % 60)
            };
        }

        return {};
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const formatNumber = (number) => String(number).padStart(2, '0');

    return (
        <div>
            {Object.keys(timeLeft).map((interval) => (
                <span key={interval} className={box}>
                    {formatNumber(timeLeft[interval])}{' '}
                    <span className={title}>{interval}</span>{' '}
                </span>
            ))}
        </div>
    );
};

export default CountdownTimer;

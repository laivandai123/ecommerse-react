import { useState, useEffect, useRef } from 'react';

const useTranslateX = () => {
    const [scrollDirection, setScrollDirection] = useState(null);
    const [translateXPosition, setTranslateXPosition] = useState(20);
    const [scrollPosition, setScrollPosition] = useState(0);

    const previousScrollPosition = useRef(0);
    const scrollTracking = () => {
        const currentScrollPosition = window.scrollY;
        if (currentScrollPosition > previousScrollPosition.current) {
            setScrollDirection('down');
        } else if (currentScrollPosition < previousScrollPosition.current) {
            setScrollDirection('up');
        }
        previousScrollPosition.current =
            currentScrollPosition <= 0 ? 0 : currentScrollPosition;
        setScrollPosition(currentScrollPosition);
    };
    useEffect(() => {
        window.addEventListener('scroll', scrollTracking);
        return () => window.removeEventListener('scroll', scrollTracking);
    }, []);
    console.log(scrollPosition);
    const handleTranslateX = () => {
        if (scrollDirection === 'down' && scrollPosition >= 1500) {
            setTranslateXPosition(
                translateXPosition <= 0 ? 0 : translateXPosition - 1
            );
        } else if (scrollDirection === 'up') {
            setTranslateXPosition(
                translateXPosition >= 20 ? 20 : translateXPosition + 1
            );
        }
    };
    useEffect(() => {
        handleTranslateX();
    }, [scrollPosition]);
    return { translateXPosition };
};
export default useTranslateX;

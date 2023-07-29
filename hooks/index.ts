import {useMotionValueEvent, useScroll} from "framer-motion";
import {useState} from "react";

export const useScrollPosition = () => {
    const { scrollY } = useScroll();
    const [scrollPosition, setScrollPosition] = useState<number>(0);

    useMotionValueEvent(scrollY, 'change', (latestValue) => {
        setScrollPosition(latestValue);
    });

    return scrollPosition;
}

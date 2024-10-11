import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

export default function useWindowDimensions() {

    const [windowDimensions, setWindowDimensions] = useState();



    return windowDimensions;
}
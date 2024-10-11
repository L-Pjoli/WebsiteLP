/* eslint import/no-webpack-loader-syntax: off */
import * as IconBi from "react-icons/bi";
import FailedHumanitiesSVG from "../FailedHumanitiesSVG"

export const HomepageLinkData = [
    {
        path: "/about",
        icons: <IconBi.BiInfoCircle size={100} fill="white" />,
        cName: "nav-text"
    },
    {
        path: "/portfolio",
        icons: <IconBi.BiFolder size={100} fill="white" />,
        cName: "nav-text"
    },
    {
        path: "/failedhumanities",
        icons: <FailedHumanitiesSVG width="100" height="100" fill="white" />,
        cName: "nav-text"
    },
    {
        path: "/contact",
        icons: <IconBi.BiMap size={100} fill="white" />,
        cName: "nav-text"
    },
]
import { useState } from "react";
import * as FaIcons from "react-icons/fa"
import { IconContext } from "react-icons";
import { NavLink } from "react-router-dom";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import "./NavBar.css"
import * as IconBi from "react-icons/bi";
import { useTranslation } from "react-i18next";
import FailedHumanitiesSVG from "../FailedHumanitiesSVG";


function NavBar() {
    const { t, i18n } = useTranslation();
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 400 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                <ListItem>
                    <div >
                        <h1 className="navbarH1Name">Louis-Philippe Jolicoeur</h1>
                    </div>
                </ListItem>
                <ListItem key={0} className="nav-text">
                    <NavLink to="/" style={({ isActive }) => ({ backgroundColor: isActive ? "#0D7377" : '' })}>
                        <IconBi.BiHome />
                        <span className="IconTitleSpan">{t('Navigation.Home')}</span>
                    </NavLink>
                </ListItem>
                <ListItem key={1} className="nav-text">
                    <NavLink to="/about" style={({ isActive }) => ({ backgroundColor: isActive ? "#0D7377" : '' })}>
                        <IconBi.BiInfoCircle />
                        <span className="IconTitleSpan">{t('Navigation.About')}</span>
                    </NavLink>
                </ListItem>
                <ListItem key={2} className="nav-text">
                    <NavLink to="/portfolio" style={({ isActive }) => ({ backgroundColor: isActive ? "#0D7377" : '' })}>
                        <IconBi.BiFolder />
                        <span className="IconTitleSpan">{t('Navigation.Portfolio')}</span>
                    </NavLink>
                </ListItem>
                <ListItem key={3} className="nav-text">
                    <NavLink to="/failedhumanities" style={({ isActive }) => ({ backgroundColor: isActive ? "#0D7377" : '' })}>
                        <FailedHumanitiesSVG width="26" height="26" fill="white" />
                        <span className="IconTitleSpan">{t('Navigation.FailedHumanities')}</span>
                    </NavLink>
                </ListItem>
                <ListItem key={4} className="nav-text">
                    <NavLink to="/contact" style={({ isActive }) => ({ backgroundColor: isActive ? "#0D7377" : '' })}>
                        <IconBi.BiMap />
                        <span className="IconTitleSpan">{t('Navigation.Contact')}</span>
                    </NavLink>
                </ListItem>
            </List>
            <div className="LanguageButtonColDrawer">
                <button
                    onClick={() => i18n.changeLanguage("fr")}
                    disabled={i18n.resolvedLanguage === "fr" ? true : false}
                    style={{ backgroundColor: i18n.resolvedLanguage === "fr" ? "#31363F" : "", border: i18n.resolvedLanguage === "fr" ? "#31363F solid 1px" : "" }}
                    className="LanguageButtonDrawer">
                    {t('Languages.fr')}
                </button>
            </div>
            <div className="LanguageButtonColDrawer">
                <button
                    onClick={() => i18n.changeLanguage("en")}
                    disabled={i18n.resolvedLanguage === "en" ? true : false}
                    style={{ backgroundColor: i18n.resolvedLanguage === "en" ? "#31363F" : "", border: i18n.resolvedLanguage === "en" ? "#31363F solid 1px" : "" }}
                    className="LanguageButtonDrawer">
                    {t('Languages.en')}
                </button>
            </div>
        </Box>
    );


    return (
        <div>
            <IconContext.Provider value={{ color: "white" }}>
                <button onClick={toggleDrawer(true)} className="OpenDrawerButton">
                    <FaIcons.FaBars size={20} className="barIcon" />
                </button>
                <Drawer open={open} onClose={toggleDrawer(false)}>
                    {DrawerList}
                </Drawer>
            </IconContext.Provider>
        </div>
    );
}

export default NavBar;


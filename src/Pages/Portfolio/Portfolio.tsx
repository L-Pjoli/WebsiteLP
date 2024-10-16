import { Col, Container, Row } from "react-bootstrap";
import "../Common.css"
import "./Portfolio.css"
import KBFront from './KBFront.jpg'
import PCB from './PCB.png'
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

export default function Portfolio() {
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <Container>
            <Row className="PageTitle">
                <h1>Portfolio</h1>
            </Row>
            <br />
            <br />

            {/* Professionnal Portfolio Section */}
            <Row className="PageTitle">
                <h1>{t('Portfolio.WorkedOn')}</h1>
            </Row>
            <br />
            {/* Web Development Section */}
            <Row className="PageContent">
                <h2>{t('Portfolio.WebDev')}</h2>
            </Row>
            <Row className="PageContent">
                <a href="https://darian-hills-website.vercel.app/" target="_blank" rel="noopener noreferrer"><h4>Darian Hills Luthier</h4></a>
            </Row>
            <Row className="PageContent">
                <h5>{t('Portfolio.DarianInfo1')}</h5>
            </Row>
            <Row className="PageContent">
                <h5>{t('Portfolio.DarianInfo2')}</h5>
            </Row>
            <Row className="PageContent">
                <h5>{t('Portfolio.DarianInfo3')}</h5>
            </Row>

            {/* Personnal Projects Section */}
            <br /><br />
            <Row className="PageTitle">
                <h1>{t('Portfolio.PersonalTitle')}</h1>
            </Row>
            <br />

            {/* Electronics Section */}
            <Row className="PageTitle">
                <h2>{t('Portfolio.Electronics')}</h2>
            </Row>

            <Row className="PageContent">
                <a href="https://github.com/L-Pjoli/FroodKeyboard" target="_blank" rel="noopener noreferrer"><h4>{t('Portfolio.FroodKB')}</h4></a>
            </Row>
            <Row className="PageContent">
                <h5>{t('Portfolio.FroodInfo1')}</h5>
            </Row>
            <Row className="PageContent">
                <h5>{t('Portfolio.FroodInfo2')}</h5>
            </Row>
            <Row>
                <Col md={6}><img src={KBFront} width="100%" alt="Front of keyboard" /></Col>
                <Col md={6}><img src={PCB} width="100%" alt="PCB" /></Col>
            </Row>
            <br />
            {/* Game Engine Section */}
            <Row className="PageTitle">
                <h2>{t('Portfolio.GameEngine')}</h2>
            </Row>
            <Row className="PageContent">
                <h4>{t('Portfolio.FailedHumanities')}</h4>
            </Row>
            <Row className="PageContent">
                <NavLink to="/FailedHumanities" >
                    <h5>{t('Portfolio.FailedHumanitiesInfo')}</h5>
                </NavLink>
            </Row>
            <br />
        </Container>
    );
}
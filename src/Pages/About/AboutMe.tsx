import { Container, Row } from "react-bootstrap";
import "../Common.css"
import "./AboutMe.css"
import { useTranslation } from "react-i18next";
import CVFR from "./CV Louis-Philippe Jolicoeur - FR.png"
import CVEN from "./CV Louis-Philippe Jolicoeur - EN.png"

export default function AboutMe() {
    const { t, i18n } = useTranslation();

    return (
        <Container>
            <Row className="PageTitle">
                <h1>{t("About.AboutTag")}</h1>
            </Row>
            <Row className="PageContent"><h4>{t('About.Info1')}</h4></Row>
            <Row className="PageContent"><h4>{t('About.Info2')}</h4></Row>
            <Row className="PageContent"><h4>{t('About.Info3')}</h4></Row>
            <ul className="ContentList">
                <Row><li><h4>{t('About.Task1')}</h4></li></Row>
                <Row><li><h4>{t('About.Task2')}</h4></li></Row>
                <Row><li><h4>{t('About.Task3')}</h4></li></Row>
                <Row><li><h4>{t('About.Task4')}</h4></li></Row>
            </ul>
            <Row className="PageContent"><h4>{t('About.Info5')}</h4></Row>
            <Row className="PageContent"><h4>{t('About.Info6')}</h4></Row>
            <Row className="CVRow">
                {i18n.resolvedLanguage === 'fr' ? <img className="CV" src={CVFR} width="80%" alt="CV - Louis-Philippe Jolicoeur - FR" /> : ""}
                {i18n.resolvedLanguage === 'en' ? <img className="CV" src={CVEN} width="80%" alt="CV - Louis-Philippe Jolicoeur - EN"/> : ""}
            </Row>
        </Container>
    );
}
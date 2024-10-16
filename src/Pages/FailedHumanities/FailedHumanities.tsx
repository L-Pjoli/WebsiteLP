import { Col, Container, Row } from "react-bootstrap";
import "../Common.css"
import { useTranslation } from "react-i18next";
import "./FailedHumanities.css"
import Clones from './FailedHumanities-Clone.png'
import Antarctica1 from './FailedHumanities-Antarctica1.png'
import Antarctica2 from './FailedHumanities-Antarctica2.png'
import Antarctica3 from './FailedHumanities-Antarctica3.png'
import { useMediaQuery } from "react-responsive";
import { useEffect } from "react";

export default function FailedHumanities() {
    const { t } = useTranslation();

    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

    return (
        <Container className="containerContent">
            <Row className="PageTitle">
                <h1>Failed Humanities</h1>
            </Row>
            <Row className="PageContent">
                <h4>{t('FailedHumanities.Info1')}</h4>
                <h4>{t('FailedHumanities.Info2')}</h4>
                <h4>{t('FailedHumanities.Info3')}</h4>
            </Row>
            <Row className="PageContent">
                <h4>
                    <a href="https://www.youtube.com/@FailedHumanities" target="_blank" rel="noopener noreferrer"> https://www.youtube.com/@FailedHumanities</a>
                </h4>
            </Row>
            <Row className="PageContent">
                <h4>{t('FailedHumanities.Info4')}</h4>
                <h4>{t('FailedHumanities.Info5')}</h4>
            </Row>
            <br />
            <Row className="PageContent">
                <h5>{t('Other.Video')} 1</h5>
            </Row>
            <Row className="ImageRow">
                <Col><img width="100%" src={Clones} alt="Clones Video" /></Col>
            </Row>
            <Row className="PageContent">
                <h5>{t('Other.Video')} 2</h5>
            </Row>
            <Row className="ImageRow">
                <Col><img width="100%" src={Antarctica1} alt="Antarctica Video" /></Col>
            </Row>
            {isTabletOrMobile && isPortrait ?
                <>
                    <Row className="ImageRow">
                        <Col><img width="100%" src={Antarctica2} alt="Antarctica Video" /></Col>
                    </Row>
                    <Row className="ImageRow">
                        <Col><img width="100%" src={Antarctica3} alt="Antarctica Video" /></Col>
                    </Row>
                </>
                :
                <Row className="ImageRow">
                    <Col md={5}><img width="100%" src={Antarctica2} alt="Antarctica Video" /></Col>
                    <Col md={7}><img width="100%" src={Antarctica3} alt="Antarctica Video" /></Col>
                </Row>
            }


        </Container>
    );
}
import { Col, Container, Row } from "react-bootstrap";
import HomepageLink from "../../components/homepageLink/HomepageLink";
import { HomepageLinkData } from "../../components/homepageLink/HomepageLinkData";
import { useTranslation } from "react-i18next";
import "./home.css"

export default function Home() {
    const { t, i18n } = useTranslation();

    return (
        <>
            <Container fluid>
                <Row className="TitleRow">
                    <Col md={5}>
                        <div  className="homepageH1Div">
                            <h1 className="homepageH1">Louis-Philippe Jolicoeur</h1>
                        </div>
                    </Col>
                    <Col md={{ span: 3, offset: 1 }} className="HomepageLinkCol1">
                        <HomepageLink item={HomepageLinkData[0]} title={<Row className="homepageLink-text"><h2>{t('Navigation.About')}</h2></Row>} />
                    </Col>
                    <Col md={{ span: 3, }} className="HomepageLinkCol2" >
                        <HomepageLink item={HomepageLinkData[1]} title={<Row className="homepageLink-text"><h2>{t('Navigation.Portfolio')}</h2></Row>} />
                    </Col>
                </Row>
                <Row>
                    <Col md={5}>
                        <div className="LanguageButtonCol">
                            <button
                                onClick={() => i18n.changeLanguage("fr")}
                                disabled={i18n.resolvedLanguage === "fr" ? true : false}
                                style={{ backgroundColor: i18n.resolvedLanguage === "fr" ? "#31363F" : "", border: i18n.resolvedLanguage === "fr" ? "#31363F solid 1px" : "" }}
                                className="LanguageButton">
                                {t('Languages.fr')}
                            </button>
                        </div>
                        <div className="LanguageButtonCol">
                            <button
                                onClick={() => i18n.changeLanguage("en")}
                                disabled={i18n.resolvedLanguage === "en" ? true : false}
                                style={{ backgroundColor: i18n.resolvedLanguage === "en" ? "#31363F" : "", border: i18n.resolvedLanguage === "en" ? "#31363F solid 1px" : "" }}
                                className="LanguageButton">
                                {t('Languages.en')}
                            </button>
                        </div>
                    </Col>
                    <Col md={{ span: 3, offset: 1 }} className="HomepageLinkCol1">
                        <HomepageLink item={HomepageLinkData[2]} title={<><Row className="homepageLink-text"><h2>Failed Humanities</h2></Row></>} />
                    </Col>
                    <Col md={{ span: 3, }} className="HomepageLinkCol2">
                        <HomepageLink item={HomepageLinkData[3]} title={<Row className="homepageLink-text"><h2>{t('Navigation.Contact')}</h2></Row>} />
                    </Col>
                </Row>
            </Container>
        </>
    );
}
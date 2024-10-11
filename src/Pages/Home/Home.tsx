import { Col, Container, Row } from "react-bootstrap";
import HomepageLink from "../../components/homepageLink/HomepageLink";
import { HomepageLinkData } from "../../components/homepageLink/HomepageLinkData";
import { useTranslation } from "react-i18next";
import "./home.css"
import { useMediaQuery } from "react-responsive";

export default function Home() {
    const { t, i18n } = useTranslation();

    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

function getSpan(){
    if(isTabletOrMobile && !isPortrait){
        return 3;
    }else{
        return 2;
    }
}

function getSpanOffset(){
    if(isTabletOrMobile && !isPortrait){
        return {span:5, offset:0};
    }else{
        return {span:5, offset:1};
    }
}

    return (
        <>
            <Container fluid>
                <Row className="TitleRow">
                    <Col md={getSpanOffset()}>
                        <div className="homepageH1Div">
                            <h1 className="homepageH1">Louis-Philippe Jolicoeur</h1>
                        </div>
                    </Col>
                    <Col md={getSpan()} className="colHomepageLink">
                        <HomepageLink item={HomepageLinkData[0]} title={<Row className="homepageLink-text"><h2>{t('Navigation.About')}</h2></Row>} />
                    </Col>
                    <Col md={getSpan()} className="colHomepageLink">
                        <HomepageLink item={HomepageLinkData[1]} title={<Row className="homepageLink-text"><h2>{t('Navigation.Portfolio')}</h2></Row>} />
                    </Col>
                </Row>

                <Row>
                    {isTabletOrMobile && isPortrait ?
                        ""
                        :
                        <Col md={getSpanOffset()}>
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
                    }
                    <Col md={getSpan()} className="colHomepageLink">
                        <HomepageLink item={HomepageLinkData[2]} title={<><Row className="homepageLink-text"><h2>Failed Humanities</h2></Row></>} />
                    </Col>
                    <Col md={getSpan()} className="colHomepageLink">
                        <HomepageLink item={HomepageLinkData[3]} title={<Row className="homepageLink-text"><h2>{t('Navigation.Contact')}</h2></Row>} />
                    </Col>
                </Row>

            </Container>
        </>
    );
}
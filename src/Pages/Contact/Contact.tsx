import { Container, Row } from "react-bootstrap";
import "../Common.css"
import "./Contact.css"
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";

export default function Contact() {
    const { t } = useTranslation();

    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

    const Links = [
        "https://www.linkedin.com/in/louis-philippe-jolicoeur/",
        "https://github.com/L-Pjoli",
        "https://www.youtube.com/@FailedHumanities"
    ]

    return (
        <Container>
            <Row className="PageTitle">
                <h1>{t('Contact.Contact')}</h1>
            </Row>
            <Row className="ContactName"><h1>Louis-Philippe Jolicoeur</h1></Row>

            <Row className="ContactField"><h2>{t('Contact.PhoneNumberTag')}</h2></Row>
            <Row className="ContactValue"><h3>+1 (438) 520-7882</h3></Row>

            <Row className="ContactField"><h2>{t('Contact.EmailAddressTag')}</h2></Row>
            <Row className="ContactValue"><h3>lp@jolicoeur.dev</h3></Row>

            <Row className="ContactField"><h2>{t('Contact.SocialsTag')}</h2></Row>

            {isTabletOrMobile && isPortrait ?
                <>
                    <Row className="ContactValue"><h3><a href={Links[0]} target="_blank" rel="noopener noreferrer">LinkedIn</a></h3></Row>
                    <Row className="ContactValue"><h3><a href={Links[1]} target="_blank" rel="noopener noreferrer">Github</a></h3></Row>
                    <Row className="ContactValue"><h3><a href={Links[2]} target="_blank" rel="noopener noreferrer">Failed Humanities Youtube</a></h3></Row>
                </>
                :
                <>
                    <Row className="ContactValue"><h3><b>LinkedIn: </b><a href={Links[0]} target="_blank" rel="noopener noreferrer">{Links[0]}</a></h3></Row>
                    <Row className="ContactValue"><h3><b>Github: </b><a href={Links[1]} target="_blank" rel="noopener noreferrer">{Links[1]}</a></h3></Row>
                    <Row className="ContactValue"><h3><b>Failed Humanities Youtube: </b><a href={Links[2]} target="_blank" rel="noopener noreferrer">{Links[2]}</a></h3></Row>
                </>
            }

        </Container>
    );
}
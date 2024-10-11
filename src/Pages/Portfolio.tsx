import { Container, Row } from "react-bootstrap";
import "./Common.css"
import { useTranslation } from "react-i18next";

export default function Portfolio() {
    const { t } = useTranslation();

    return (
        <Container>
            <Row className="PageTitle">
                <h1>Portfolio</h1>
            </Row>
            <Row className="PageContent">
                <h2>{t('Portfolio.WIP')}</h2>
            </Row>
        </Container>
    );
}
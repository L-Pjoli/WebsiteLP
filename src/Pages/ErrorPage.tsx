import { Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

export default function ErrorPage() {
    const { t } = useTranslation();

    return (
        <Container className="containerContent">
            <Row className="PageTitle">
                <h1>{t('Error.ErrorTag')}</h1>
            </Row>
            <Row className="PageTitle">
                <h1>{t('Error.ErrorText')}</h1>
            </Row>
            <Row className="PageTitle">
                <div className="LanguageButtonColDrawer">
                    <button className="LanguageButtonDrawer">
                        <NavLink to="/" style={{textDecoration: "none", color: "white"}}>
                            {t('Error.Return')}
                        </NavLink>
                    </button>
                </div>
            </Row>

        </Container>
    );
}
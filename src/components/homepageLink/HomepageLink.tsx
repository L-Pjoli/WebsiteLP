import { Container, Row } from "react-bootstrap";
import { IconContext } from "react-icons";
import "./homepageLink.css";
import { NavLink } from "react-router-dom";

function HomepageLink(props: any) {

    return (
        <Container className="homepageLink-container">
            <NavLink to={props.item.path} className="navlink">
                <IconContext.Provider value={{ color: "black" }}>
                    <Row className="homepageLink-icon" >
                        {props.item.icons}
                    </Row>
                    {props.title}
                </IconContext.Provider>
            </NavLink>
        </Container>
    )
}

export default HomepageLink;
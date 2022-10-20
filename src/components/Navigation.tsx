import { Button, Container, Nav, Navbar, NavLink } from "react-bootstrap";

function Navigation() {
    return (
    <Navbar className="bg-white shadow-lg mb-3" sticky="top">
        <Container>
            <Nav className="me-auto">
                <Nav.Link href="/" as={NavLink}>
                    Home
                </Nav.Link>
                <Nav.Link href="/features" as={NavLink}>
                    Features
                </Nav.Link>
                <Nav.Link href="/application" as={NavLink}>
                    Application
                </Nav.Link>
            </Nav>
            <Button
                className="rounded-circle"
                style={{width: "3rem", height: "3rem"}}
                variant="outline-primary"
                >
                    hi
            </Button>
        </Container>
    </Navbar>
    )
}

export default Navigation;
import './FoodMarket.css';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

import {Button, Spinner, Container, Nav, Navbar} from 'react-bootstrap';
import banner_bg from "./img/banner_bg.jpg";


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import food1 from './img/food1.jpg';
import food2 from './img/food2.jpg';
import food3 from './img/food3.jpg';
import food4 from './img/food4.jpg';



function FoodMarket(){
return (
    <div>

    <Navbar bg="light" data-bs-theme="light">
        <Container>
            <Navbar.Brand href="#home">FoodMarket</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
        </Container>
    </Navbar>

    <div className='main-bg'></div>
    {/* <img src="/src/foodmarket/img/banner_bj.jpg" alt="" /> */}
    

    <Container>
        <Row>
            <Col md={4} sm={2}>
            <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={food1} />
        <Card.Body>
            <Card.Title>타이틀 div</Card.Title>
            <Card.Text>
                내부내용 p
            </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>
            </Col>
            <Col md={4} sm={2}>
            <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={food2} />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>
            </Col>
            <Col md={4} sm={2}>
            <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={food3} />
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>
            </Col>
        </Row>
    </Container>

    </div>


)
}

export default FoodMarket;
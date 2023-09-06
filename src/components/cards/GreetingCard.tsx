import { Col, Row } from "react-bootstrap"

interface GreetingCardProps {
    username: string;
}
  
function GreetingCard(props: GreetingCardProps) 
{
    const { username } = props;
  
    return (
    <Row className="greeting-card col-6">
        <Col md="3">
            <img className="w-100" src="../src/assets/images/doctor_icon.png" />
        </Col>
        <Col md="9" className="d-flex flex-column justify-content-center">
            <h3>Good Morning, <span className="dashboard-username">{username}</span></h3>
            <p>Have a nice day at work!</p>
        </Col>
    </Row>
    )
}

export default GreetingCard
import { Col } from "react-bootstrap"

interface GreetingCardProps {
    username: string;
}
  
function GreetingCard(props: GreetingCardProps) 
{
    const { username } = props;
  
    return (
        <>
            <Col md="3">
                <img className="w-100" src="../src/assets/images/doctor_icon.png" />
            </Col>
            <Col md="9" className="d-flex flex-column justify-content-center">
                <h4>Good Morning, <span className="dashboard-username">{username}</span></h4>
                <p>Have a nice day at work!</p>
            </Col>
        </>
    )
}

export default GreetingCard
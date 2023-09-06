import { Button, Col, Row, Stack } from "react-bootstrap";


interface MetricsProps
{
    icon: any,
    title: string,
    counter: number
}

function MetricsCard(props: MetricsProps) 
{
    const { icon, title, counter } = props;
    
    return (
        <Col md="3" className="text-center metrics-card pt-4">
            <Stack gap={1}>
                <Row className="h2">
                    {icon}
                </Row>
                <Row>
                    <h6 className="metrics-title">{title}</h6>
                </Row>
                <Row>
                    <Button className="metrics-btn w-100">{counter}</Button>
                </Row>
            </Stack>
        </Col>
    )
}

export default MetricsCard